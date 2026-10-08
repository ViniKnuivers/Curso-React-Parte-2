import { randomUUID } from 'node:crypto'
import request from 'supertest'
import { hash } from 'bcryptjs'
import type { INestApplication } from '@nestjs/common'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { createE2EApp } from 'test/e2e/setup-app'
import { StudentFactory } from 'test/factories/make-student'

describe('Authenticate (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let studentFactory: StudentFactory

  const email = `${randomUUID()}@example.com`
  const password = '123456'

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
    studentFactory = e2eApp.studentFactory

    await studentFactory.makePrismaStudent({
      name: 'John Doe',
      email,
      password: await hash(password, 8),
    })
  })

  afterAll(async () => {
    await prisma.user.deleteMany({ where: { email } })
    await app.close()
  })

  test('[POST] /sessions authenticates with valid credentials', async () => {
    const response = await request(app.getHttpServer()).post('/sessions').send({
      name: 'irrelevant',
      email,
      password,
    })

    expect(response.status).toBe(201)
    expect(typeof response.body.access_token).toBe('string')
    expect(response.body.access_token.length).toBeGreaterThan(0)
  })

  test('[POST] /sessions returns 401 for wrong password', async () => {
    const response = await request(app.getHttpServer()).post('/sessions').send({
      name: 'irrelevant',
      email,
      password: 'wrong-password',
    })

    expect(response.status).toBe(401)
  })
})
