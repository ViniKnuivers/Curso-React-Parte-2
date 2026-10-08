import { Module } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { QuestionRepository } from '@/domain/forum/application/repositories/question-repository'
import { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachments-repository'
import { PrismaQuestionsRepository } from '@/infra/database/prisma/prisma-repositories/prisma-questions-repository'
import { PrismaAnswersRepository } from '@/infra/database/prisma/prisma-repositories/prisma-answers-repository'
import { PrismaQuestionCommentsRepository } from '@/infra/database/prisma/prisma-repositories/prisma-question-comments-repository'
import { PrismaAnswerCommentsRepository } from '@/infra/database/prisma/prisma-repositories/prisma-answer-comments-repository'
import { PrismaNotificationsRepository } from '@/infra/database/prisma/prisma-repositories/prisma-notifications-repository'
import { PrismaStudentsRepository } from '@/infra/database/prisma/prisma-repositories/prisma-students-repository'
import { PrismaAttachmentsRepository } from '@/infra/database/prisma/prisma-repositories/prisma-attachments-repository'

@Module({
  providers: [
    PrismaService,
    { provide: QuestionRepository, useClass: PrismaQuestionsRepository },
    { provide: AnswerRepository, useClass: PrismaAnswersRepository },
    {
      provide: QuestionCommentsRepository,
      useClass: PrismaQuestionCommentsRepository,
    },
    {
      provide: AnswerCommentsRepository,
      useClass: PrismaAnswerCommentsRepository,
    },
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
    { provide: StudentsRepository, useClass: PrismaStudentsRepository },
    { provide: AttachmentsRepository, useClass: PrismaAttachmentsRepository },
  ],
  exports: [
    PrismaService,
    QuestionRepository,
    AnswerRepository,
    QuestionCommentsRepository,
    AnswerCommentsRepository,
    NotificationsRepository,
    StudentsRepository,
    AttachmentsRepository,
  ],
})
export class DatabaseModule {}
