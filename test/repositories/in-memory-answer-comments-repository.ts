import { DomainEvents } from '@/core/events/domain-events'
import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import type { AnswerComments } from '@/domain/forum/enterprise/entities/answer-comment'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'

export class InMemoryAnswersCommentsRepository implements AnswerCommentsRepository {
  public items: AnswerComments[] = []

  constructor(
    private studentsRepository: InMemoryStudentsRepository = new InMemoryStudentsRepository(),
  ) {}

  async create(answerComments: AnswerComments) {
    this.items.push(answerComments)

    DomainEvents.dispatchEventsForAggregate(answerComments.id)
  }

  async findManyByAnswerIdWithAuthor(
    answerId: string,
    { page }: PaginationParams,
  ): Promise<CommentWithAuthor[]> {
    const answerComments = this.items
      .filter((item) => item.answerId.toString() === answerId)
      .slice((page - 1) * 20, page * 20)

    return answerComments.map((answerComment) => {
      const author = this.studentsRepository.items.find((student) =>
        student.id.equals(answerComment.authorId),
      )

      if (!author) {
        throw new Error(
          `Author with ID "${answerComment.authorId.toString()}" does not exist.`,
        )
      }

      return CommentWithAuthor.create({
        commentId: answerComment.id,
        content: answerComment.content,
        authorId: answerComment.authorId,
        author: author.name,
        createdAt: answerComment.createdAt,
        updatedAt: answerComment.updatedAt,
      })
    })
  }

  async delete(answerComments: AnswerComments) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === answerComments.id,
    )

    this.items.splice(itemIndex, 1)
  }

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }
}
