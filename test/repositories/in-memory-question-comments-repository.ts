import { DomainEvents } from '@/core/events/domain-events'
import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComments } from '@/domain/forum/enterprise/entities/question-comment'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'

export class InMemoryQuestionsCommentsRepository implements QuestionCommentsRepository {
  public items: QuestionComments[] = []

  constructor(
    private studentsRepository: InMemoryStudentsRepository = new InMemoryStudentsRepository(),
  ) {}

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)

    if (!question) {
      return null
    }

    return question
  }

  async findManyByQuestionId(
    questionId: string,
    { page }: PaginationParams,
  ): Promise<CommentWithAuthor[]> {
    const questionComments = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)

    return questionComments.map((questionComment) => {
      const author = this.studentsRepository.items.find((student) =>
        student.id.equals(questionComment.authorId),
      )

      if (!author) {
        throw new Error(
          `Author with ID "${questionComment.authorId.toString()}" does not exist.`,
        )
      }

      return CommentWithAuthor.create({
        commentId: questionComment.id,
        content: questionComment.content,
        authorId: questionComment.authorId,
        author: author.name,
        createdAt: questionComment.createdAt,
        updatedAt: questionComment.updatedAt,
      })
    })
  }

  async create(questionComments: QuestionComments) {
    this.items.push(questionComments)

    DomainEvents.dispatchEventsForAggregate(questionComments.id)
  }

  async delete(questionComments: QuestionComments) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === questionComments.id,
    )

    this.items.splice(itemIndex, 1)
  }
}
