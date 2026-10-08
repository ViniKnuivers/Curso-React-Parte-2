import type { DomainEvent } from '@/core/events/domain-event'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'
import type { AnswerComments } from '@/domain/forum/enterprise/entities/answer-comment'

export class AnswerCommentCreatedEvent implements DomainEvent {
  public ocurredAt: Date
  public answerComment: AnswerComments

  constructor(answerComment: AnswerComments) {
    this.answerComment = answerComment
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.answerComment.id
  }
}
