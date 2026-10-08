import { AggregateRoot } from '@/core/entities/aggregate-root'
import type { UniqueEntityID } from '@/core/entities/unique-entity-id'
import type { Optional } from '@/core/types/optional'
import { QuestionCommentCreatedEvent } from '@/domain/forum/enterprise/events/question-comment-created-event'

export interface QuestionCommentsProps {
  content: string
  questionId: UniqueEntityID
  authorId: UniqueEntityID
  createdAt: Date
  updatedAt?: Date
}

export class QuestionComments extends AggregateRoot<QuestionCommentsProps> {
  get questionId() {
    return this.props.questionId
  }

  get content() {
    return this.props.content
  }

  get authorId() {
    return this.props.authorId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  static create(
    props: Optional<QuestionCommentsProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const isNewQuestionComment = !id

    const questionComments = new QuestionComments(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    if (isNewQuestionComment) {
      questionComments.addDomainEvent(
        new QuestionCommentCreatedEvent(questionComments),
      )
    }

    return questionComments
  }
}
