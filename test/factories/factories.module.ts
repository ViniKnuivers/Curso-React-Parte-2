import { Module } from '@nestjs/common'
import { DatabaseModule } from '@/infra/database/database.module'
import { StudentFactory } from 'test/factories/make-student'
import { QuestionFactory } from 'test/factories/make-question'
import { AttachmentFactory } from 'test/factories/make-attachment'

@Module({
  imports: [DatabaseModule],
  providers: [StudentFactory, QuestionFactory, AttachmentFactory],
  exports: [StudentFactory, QuestionFactory, AttachmentFactory],
})
export class TestFactoriesModule {}
