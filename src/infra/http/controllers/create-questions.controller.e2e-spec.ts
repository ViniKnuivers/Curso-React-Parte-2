import { randomUUID } from 'node:crypto'
import request from 'supertest'
import type { INestApplication } from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'
import { AttachmentFactory } from 'test/factories/make-attachment'

describe('Create question (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  let studentFactory: StudentFactory
  let attachmentFactory: AttachmentFactory

  let userId: string
  let token: string

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    jwt = e2eApp.jwt
    studentFactory = e2eApp.studentFactory
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

  test('[POST] /questions returns 401 without a token', async () => {
    const response = await request(app.getHttpServer())
      .post('/questions')
      .send({
        title: 'A question',
        content: 'Some content',
      })

    expect(response.status).toBe(401)
  })

  test('[POST] /questions creates a question when authenticated', async () => {
    const title = `New question ${randomUUID()}`

    const response = await request(app.getHttpServer())
      .post('/questions')
      .set('Authorization', `Bearer ${token}`)
      .send({ title, content: 'Some content' })

    expect(response.status).toBe(201)

    const questionOnDatabase = await prisma.question.findFirst({
      where: { authorId: userId, title },
    })

    expect(questionOnDatabase).toBeTruthy()
    expect(questionOnDatabase?.content).toBe('Some content')
  })

  test('[POST] /questions creates a question with an attachment and persists it linked in the database', async () => {
    const attachment = await attachmentFactory.makePrismaAttachment()
    const title = `Question with attachment ${randomUUID()}`

    const response = await request(app.getHttpServer())
      .post('/questions')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title,
        content: 'Some content',
        attachments: [attachment.id.toString()],
      })

    expect(response.status).toBe(201)

    const questionOnDatabase = await prisma.question.findFirstOrThrow({
      where: { authorId: userId, title },
    })

    const attachmentOnDatabase = await prisma.attachment.findUniqueOrThrow({
      where: { id: attachment.id.toString() },
    })

    expect(attachmentOnDatabase.questionId).toBe(questionOnDatabase.id)
  })
})
