import { randomUUID } from 'node:crypto'
import request from 'supertest'
import { compare } from 'bcryptjs'
import type { INestApplication } from '@nestjs/common'
import type { PrismaService } from '@/infra/database/prisma/prisma.service'
import { createE2EApp } from 'test/e2e/setup-app'

describe('Create account (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService

  beforeAll(async () => {
    const e2eApp = await createE2EApp()
    app = e2eApp.app
    prisma = e2eApp.prisma
  })

  afterAll(async () => {
    await prisma.user.deleteMany({ where: { email: { in: [emailA, emailB] } } })
    await app.close()
  })

  const emailA = `${randomUUID()}@example.com`
  const emailB = `${randomUUID()}@example.com`

  test('[POST] /accounts creates a user and hashes the password', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'John Doe',
      email: emailA,
      password: '123456',
    })

    expect(response.status).toBe(201)

    const userOnDatabase = await prisma.user.findUnique({
      where: { email: emailA },
    })

    expect(userOnDatabase).toBeTruthy()
    expect(userOnDatabase?.name).toBe('John Doe')
    expect(userOnDatabase?.password).not.toBe('123456')
    await expect(compare('123456', userOnDatabase!.password)).resolves.toBe(
      true,
    )
  })

  test('[POST] /accounts returns 409 when the email is already in use', async () => {
    await request(app.getHttpServer()).post('/accounts').send({
      name: 'Jane Doe',
      email: emailB,
      password: '123456',
    })

    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'Jane Doe',
      email: emailB,
      password: '123456',
    })

    expect(response.status).toBe(409)
  })
})
