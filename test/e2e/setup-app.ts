import { Test } from '@nestjs/testing'
import { JwtService } from '@nestjs/jwt'
import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { DomainExceptionFilter } from '@/infra/http/filters/domain-exception.filter'
import { TestFactoriesModule } from 'test/factories/factories.module'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionFactory } from 'test/factories/make-question'
import { AttachmentFactory } from 'test/factories/make-attachment'

export async function createE2EApp() {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule, TestFactoriesModule],
  }).compile()

  const app = moduleRef.createNestApplication()

  app.useGlobalFilters(new DomainExceptionFilter())

  await app.init()

  const prisma = moduleRef.get(PrismaService)
  const jwt = moduleRef.get(JwtService)
  const studentFactory = moduleRef.get(StudentFactory)
  const questionFactory = moduleRef.get(QuestionFactory)
  const attachmentFactory = moduleRef.get(AttachmentFactory)

  return {
    app,
    prisma,
    jwt,
    studentFactory,
    questionFactory,
    attachmentFactory,
  }
}
