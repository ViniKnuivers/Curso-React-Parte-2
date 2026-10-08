import { randomUUID } from 'node:crypto'
import request from 'supertest'
import type { INestApplication } from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionFactory } from 'test/factories/make-question'

describe('DomainExceptionFilter (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory

  let ownerId: string
  let intruderId: string
  let ownerToken: string
  let intruderToken: string
  let questionId: string

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    jwt = e2eApp.jwt
    studentFactory = e2eApp.studentFactory
    questionFactory = e2eApp.questionFactory

    const owner = await studentFactory.makePrismaStudent({
      email: `${randomUUID()}@example.com`,
    })
    const intruder = await studentFactory.makePrismaStudent({
      email: `${randomUUID()}@example.com`,
    })

    ownerId = owner.id.toString()
    intruderId = intruder.id.toString()
    ownerToken = jwt.sign({ sub: ownerId })
    intruderToken = jwt.sign({ sub: intruderId })

    const question = await questionFactory.makePrismaQuestion({
      authorId: owner.id,
      title: 'Owned question',
    })
    questionId = question.id.toString()
  })

  afterAll(async () => {
    await prisma.question.deleteMany({ where: { authorId: ownerId } })
    await prisma.user.deleteMany({
      where: { id: { in: [ownerId, intruderId] } },
    })
    await app.close()
  })

  test('ResourceNotFoundError vira 404', async () => {
    const response = await request(app.getHttpServer())
      .get(`/questions/slug-that-does-not-exist-${randomUUID()}`)
      .set('Authorization', `Bearer ${ownerToken}`)

    expect(response.status).toBe(404)
    expect(response.body).toEqual({
      statusCode: 404,
      message: 'Resource not found',
    })
  })

  test('NotAllowedError vira 403', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/questions/${questionId}`)
      .set('Authorization', `Bearer ${intruderToken}`)

    expect(response.status).toBe(403)
    expect(response.body).toEqual({
      statusCode: 403,
      message: 'Not allowed',
    })
  })

  test('o dono ainda consegue deletar a própria pergunta', async () => {
    const response = await request(app.getHttpServer())
      .delete(`/questions/${questionId}`)
      .set('Authorization', `Bearer ${ownerToken}`)

    expect(response.status).toBe(200)
  })
})
