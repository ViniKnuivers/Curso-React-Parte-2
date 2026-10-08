import type { UniqueEntityID } from '@/core/entities/unique-entity-id'
import type { Optional } from '@/core/types/optional'
import { AnswerCommentCreatedEvent } from '@/domain/forum/enterprise/events/answer-comment-created-event'
import {
  Comment,
  type CommentProps,
} from '@/domain/forum/enterprise/entities/comment'

export interface AnswerCommentsProps extends CommentProps {
  answerId: UniqueEntityID
}
export class AnswerComments extends Comment<AnswerCommentsProps> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<AnswerCommentsProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const isNewAnswerComment = !id

    const answerComments = new AnswerComments(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    if (isNewAnswerComment) {
      answerComments.addDomainEvent(
        new AnswerCommentCreatedEvent(answerComments),
      )
    }

    return answerComments
  }
}
