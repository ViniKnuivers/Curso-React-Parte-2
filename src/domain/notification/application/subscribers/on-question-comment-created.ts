import { Injectable } from '@nestjs/common'
import { DomainEvents } from '@/core/events/domain-events'
import type { DomainEvent } from '@/core/events/domain-event'
import type { EventHandler } from '@/core/events/event-handler'
import { QuestionCommentCreatedEvent } from '@/domain/forum/enterprise/events/question-comment-created-event'
import { QuestionRepository } from '@/domain/forum/application/repositories/question-repository'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'

@Injectable()
export class OnQuestionCommentCreated implements EventHandler {
  constructor(
    private questionRepository: QuestionRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendQuestionCommentNotification.bind(this),
      QuestionCommentCreatedEvent.name,
    )
  }

  private async sendQuestionCommentNotification(event: DomainEvent) {
    const { questionComment } = event as QuestionCommentCreatedEvent

    const question = await this.questionRepository.findById(
      questionComment.questionId.toString(),
    )

    if (question && !question.authorId.equals(questionComment.authorId)) {
      await this.sendNotification.execute({
        recipientId: question.authorId.toString(),
        title: 'Novo comentário em sua pergunta',
        content: questionComment.content.substring(0, 120),
      })
    }
  }
}
