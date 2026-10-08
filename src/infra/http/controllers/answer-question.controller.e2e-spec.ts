import { randomUUID } from 'node:crypto'
import request from 'supertest'
import type { INestApplication } from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'

describe('Forum flow (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  let studentFactory: StudentFactory

  let authorId: string
  let instructorId: string
  let authorToken: string
  let instructorToken: string

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    jwt = e2eApp.jwt
    studentFactory = e2eApp.studentFactory

    const author = await studentFactory.makePrismaStudent({
      name: 'Question Author',
      email: `${randomUUID()}@example.com`,
    })
    const instructor = await studentFactory.makePrismaStudent({
      name: 'Instructor',
      email: `${randomUUID()}@example.com`,
    })

    authorId = author.id.toString()
    instructorId = instructor.id.toString()
    authorToken = jwt.sign({ sub: authorId })
    instructorToken = jwt.sign({ sub: instructorId })
  })

  afterAll(async () => {
    await prisma.notification.deleteMany({
      where: { recipientId: { in: [authorId, instructorId] } },
    })
    await prisma.answerComment.deleteMany({
      where: { authorId: { in: [authorId, instructorId] } },
    })
    await prisma.answer.deleteMany({
      where: { authorId: { in: [authorId, instructorId] } },
    })
    await prisma.question.deleteMany({
      where: { authorId: { in: [authorId, instructorId] } },
    })
    await prisma.user.deleteMany({
      where: { id: { in: [authorId, instructorId] } },
    })
    await app.close()
  })

  test('answer a question, choose it as the best answer, and notify the author', async () => {
    const title = `Question ${randomUUID()}`

    await request(app.getHttpServer())
      .post('/questions')
      .set('Authorization', `Bearer ${authorToken}`)
      .send({ title, content: 'Question content' })
      .expect(201)

    const question = await prisma.question.findFirstOrThrow({
      where: { authorId, title },
    })

    const answerResponse = await request(app.getHttpServer())
      .post(`/questions/${question.id}/answers`)
      .set('Authorization', `Bearer ${instructorToken}`)
      .send({ content: 'Here is the answer' })

    expect(answerResponse.status).toBe(201)

    const answerId = answerResponse.body.answer.id

    const chooseResponse = await request(app.getHttpServer())
      .patch(`/answers/${answerId}/choose-as-best`)
      .set('Authorization', `Bearer ${authorToken}`)

    expect(chooseResponse.status).toBe(200)

    const updatedQuestion = await prisma.question.findUniqueOrThrow({
      where: { id: question.id },
    })
    expect(updatedQuestion.bestAnswerId).toBe(answerId)

    const notification = await prisma.notification.findFirst({
      where: { recipientId: instructorId },
    })
    expect(notification).toBeTruthy()
  })
})
