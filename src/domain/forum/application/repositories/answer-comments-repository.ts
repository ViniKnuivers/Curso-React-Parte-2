import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { AnswerComments } from '@/domain/forum/enterprise/entities/answer-comment'
import type { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'

export abstract class AnswerCommentsRepository {
  abstract create(answerComment: AnswerComments): Promise<void>
  abstract findById(id: string): Promise<AnswerComments | null>
  abstract delete(answerComment: AnswerComments): Promise<void>
  abstract findManyByAnswerIdWithAuthor(
    answerId: string,
    params: PaginationParams,
  ): Promise<CommentWithAuthor[]>
}
