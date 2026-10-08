import { Module } from '@nestjs/common'
import { DatabaseModule } from '@/infra/database/database.module'

import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { OnQuestionBestAnswerChosen } from '@/domain/notification/application/subscribers/on-question-best-answer-chosen'
import { OnAnswerCreated } from '@/domain/notification/application/subscribers/on-answer-created'
import { OnQuestionCommentCreated } from '@/domain/notification/application/subscribers/on-question-comment-created'
import { OnAnswerCommentCreated } from '@/domain/notification/application/subscribers/on-answer-comment-created'

@Module({
  imports: [DatabaseModule],
  providers: [
    SendNotificationUseCase,
    OnQuestionBestAnswerChosen,
    OnAnswerCreated,
    OnQuestionCommentCreated,
    OnAnswerCommentCreated,
  ],
})
export class EventsModule {}
