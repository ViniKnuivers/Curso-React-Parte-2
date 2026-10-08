import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { QuestionComments } from '@/domain/forum/enterprise/entities/question-comment'
import type { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'

export abstract class QuestionCommentsRepository {
  abstract create(questionComment: QuestionComments): Promise<void>
  abstract findById(id: string): Promise<QuestionComments | null>
  abstract delete(questionComment: QuestionComments): Promise<void>
  abstract findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<CommentWithAuthor[]>
}
