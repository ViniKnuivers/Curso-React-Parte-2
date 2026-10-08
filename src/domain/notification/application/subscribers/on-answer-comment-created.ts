import { Injectable } from '@nestjs/common'
import { DomainEvents } from '@/core/events/domain-events'
import type { DomainEvent } from '@/core/events/domain-event'
import type { EventHandler } from '@/core/events/event-handler'
import { AnswerCommentCreatedEvent } from '@/domain/forum/enterprise/events/answer-comment-created-event'
import { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'

@Injectable()
export class OnAnswerCommentCreated implements EventHandler {
  constructor(
    private answerRepository: AnswerRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendAnswerCommentNotification.bind(this),
      AnswerCommentCreatedEvent.name,
    )
  }

  private async sendAnswerCommentNotification(event: DomainEvent) {
    const { answerComment } = event as AnswerCommentCreatedEvent

    const answer = await this.answerRepository.findById(
      answerComment.answerId.toString(),
    )

    if (answer && !answer.authorId.equals(answerComment.authorId)) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: 'Novo comentário em sua resposta',
        content: answerComment.content.substring(0, 120),
      })
    }
  }
}
