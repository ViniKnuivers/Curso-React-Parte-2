import { randomUUID } from 'node:crypto'
import request from 'supertest'
import type { INestApplication } from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionFactory } from 'test/factories/make-question'
import { AttachmentFactory } from 'test/factories/make-attachment'

describe('Edit question (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory
  let attachmentFactory: AttachmentFactory

  let userId: string
  let token: string

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    jwt = e2eApp.jwt
    studentFactory = e2eApp.studentFactory
    questionFactory = e2eApp.questionFactory
    attachmentFactory = e2eApp.attachmentFactory

    const user = await studentFactory.makePrismaStudent({
      email: `${randomUUID()}@example.com`,
    })
    userId = user.id.toString()
    token = jwt.sign({ sub: userId })
  })

  afterAll(async () => {
    await prisma.question.deleteMany({ where: { authorId: userId } })
    await prisma.user.deleteMany({ where: { id: userId } })
    await app.close()
  })

  test('[PUT] /questions/:id edits title, content, and swaps the linked attachment', async () => {
    const oldAttachment = await attachmentFactory.makePrismaAttachment()
    const newAttachment = await attachmentFactory.makePrismaAttachment()

    const question = await questionFactory.makePrismaQuestion({
      authorId: new UniqueEntityID(userId),
      title: 'Original title',
    })

    await prisma.attachment.update({
      where: { id: oldAttachment.id.toString() },
      data: { questionId: question.id.toString() },
    })

    const response = await request(app.getHttpServer())
      .put(`/questions/${question.id.toString()}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Edited title',
        content: 'Edited content',
        attachments: [newAttachment.id.toString()],
      })

    expect(response.status).toBe(200)

    const updatedQuestion = await prisma.question.findUniqueOrThrow({
      where: { id: question.id.toString() },
    })
    expect(updatedQuestion.title).toBe('Edited title')
    expect(updatedQuestion.content).toBe('Edited content')

    const oldAttachmentOnDatabase = await prisma.attachment.findUniqueOrThrow({
      where: { id: oldAttachment.id.toString() },
    })
    expect(oldAttachmentOnDatabase.questionId).toBeNull()

    const newAttachmentOnDatabase = await prisma.attachment.findUniqueOrThrow({
      where: { id: newAttachment.id.toString() },
    })
    expect(newAttachmentOnDatabase.questionId).toBe(question.id.toString())
  })
})
