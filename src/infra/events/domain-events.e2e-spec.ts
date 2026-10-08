import { randomUUID } from 'node:crypto'
import request from 'supertest'
import type { INestApplication } from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionFactory } from 'test/factories/make-question'

describe('Domain events (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory

  const createdUserIds: string[] = []

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    jwt = e2eApp.jwt
    studentFactory = e2eApp.studentFactory
    questionFactory = e2eApp.questionFactory
  })

  afterAll(async () => {
    await prisma.notification.deleteMany({
      where: { recipientId: { in: createdUserIds } },
    })
    await prisma.answerComment.deleteMany({
      where: { authorId: { in: createdUserIds } },
    })
    await prisma.questionComment.deleteMany({
      where: { authorId: { in: createdUserIds } },
    })
    await prisma.answer.deleteMany({
      where: { authorId: { in: createdUserIds } },
    })
    await prisma.question.deleteMany({
      where: { authorId: { in: createdUserIds } },
    })
    await prisma.user.deleteMany({ where: { id: { in: createdUserIds } } })
    await app.close()
  })

  async function createAuthenticatedStudent() {
    const student = await studentFactory.makePrismaStudent({
      email: `${randomUUID()}@example.com`,
    })
    const id = student.id.toString()
    createdUserIds.push(id)

    return { id, token: jwt.sign({ sub: id }) }
  }

  test('OnAnswerCreated notifies the question author', async () => {
    const author = await createAuthenticatedStudent()
    const instructor = await createAuthenticatedStudent()

    const question = await questionFactory.makePrismaQuestion({
      authorId: new UniqueEntityID(author.id),
    })

    await request(app.getHttpServer())
      .post(`/questions/${question.id.toString()}/answers`)
      .set('Authorization', `Bearer ${instructor.token}`)
      .send({ content: 'Here is an answer' })
      .expect(201)

    const notification = await prisma.notification.findFirst({
      where: { recipientId: author.id },
    })

    expect(notification).toBeTruthy()
  })

  test('OnQuestionCommentCreated notifies the question author, but not the author commenting on their own question', async () => {
    const author = await createAuthenticatedStudent()
    const commenter = await createAuthenticatedStudent()

    const question = await questionFactory.makePrismaQuestion({
      authorId: new UniqueEntityID(author.id),
    })

    await request(app.getHttpServer())
      .post(`/questions/${question.id.toString()}/comments`)
      .set('Authorization', `Bearer ${commenter.token}`)
      .send({ content: 'Nice question!' })
      .expect(201)

    const notificationFromCommenter = await prisma.notification.findFirst({
      where: { recipientId: author.id },
    })
    expect(notificationFromCommenter).toBeTruthy()

    await request(app.getHttpServer())
      .post(`/questions/${question.id.toString()}/comments`)
      .set('Authorization', `Bearer ${author.token}`)
      .send({ content: 'Commenting on my own question' })
      .expect(201)

    const notificationsCount = await prisma.notification.count({
      where: { recipientId: author.id },
    })
    expect(notificationsCount).toBe(1)
  })

  test('OnAnswerCommentCreated notifies the answer author, but not the author commenting on their own answer', async () => {
    const questionAuthor = await createAuthenticatedStudent()
    const answerAuthor = await createAuthenticatedStudent()

    const question = await questionFactory.makePrismaQuestion({
      authorId: new UniqueEntityID(questionAuthor.id),
    })

    const answerResponse = await request(app.getHttpServer())
      .post(`/questions/${question.id.toString()}/answers`)
      .set('Authorization', `Bearer ${answerAuthor.token}`)
      .send({ content: 'Here is an answer' })

    const answerId = answerResponse.body.answer.id

    await prisma.notification.deleteMany({
      where: { recipientId: answerAuthor.id },
    })

    await request(app.getHttpServer())
      .post(`/answers/${answerId}/comments`)
      .set('Authorization', `Bearer ${questionAuthor.token}`)
      .send({ content: 'Nice answer!' })
      .expect(201)

    const notificationFromQuestionAuthor = await prisma.notification.findFirst(
      {
        where: { recipientId: answerAuthor.id },
      },
    )
    expect(notificationFromQuestionAuthor).toBeTruthy()

    await request(app.getHttpServer())
      .post(`/answers/${answerId}/comments`)
      .set('Authorization', `Bearer ${answerAuthor.token}`)
      .send({ content: 'Commenting on my own answer' })
      .expect(201)

    const notificationsCount = await prisma.notification.count({
      where: { recipientId: answerAuthor.id },
    })
    expect(notificationsCount).toBe(1)
  })

  test('OnQuestionBestAnswerChosen notifies the chosen answer author', async () => {
    const author = await createAuthenticatedStudent()
    const instructor = await createAuthenticatedStudent()

    const question = await questionFactory.makePrismaQuestion({
      authorId: new UniqueEntityID(author.id),
    })

    const answerResponse = await request(app.getHttpServer())
      .post(`/questions/${question.id.toString()}/answers`)
      .set('Authorization', `Bearer ${instructor.token}`)
      .send({ content: 'Here is an answer' })

    const answerId = answerResponse.body.answer.id

    await prisma.notification.deleteMany({
      where: { recipientId: instructor.id },
    })

    await request(app.getHttpServer())
      .patch(`/answers/${answerId}/choose-as-best`)
      .set('Authorization', `Bearer ${author.token}`)
      .expect(200)

    const notification = await prisma.notification.findFirst({
      where: { recipientId: instructor.id },
    })

    expect(notification).toBeTruthy()
  })
})
