import { randomUUID } from 'node:crypto'
import request from 'supertest'
import type { INestApplication } from '@nestjs/common'
import type { JwtService } from '@nestjs/jwt'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionFactory } from 'test/factories/make-question'

describe('Fetch recent questions (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory

  let userId: string
  let token: string

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    jwt = e2eApp.jwt
    studentFactory = e2eApp.studentFactory
    questionFactory = e2eApp.questionFactory

    const user = await studentFactory.makePrismaStudent({
      email: `${randomUUID()}@example.com`,
    })
    userId = user.id.toString()
    token = jwt.sign({ sub: userId })

    await questionFactory.makePrismaQuestion({
      authorId: user.id,
      title: `Recent question ${randomUUID()}`,
    })
  })

  afterAll(async () => {
    await prisma.question.deleteMany({ where: { authorId: userId } })
    await prisma.user.deleteMany({ where: { id: userId } })
    await app.close()
  })

  test('[GET] /questions returns 401 without a token', async () => {
    const response = await request(app.getHttpServer()).get('/questions')

    expect(response.status).toBe(401)
  })

  test('[GET] /questions returns questions when authenticated', async () => {
    const response = await request(app.getHttpServer())
      .get('/questions')
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body.questions)).toBe(true)
  })
})
