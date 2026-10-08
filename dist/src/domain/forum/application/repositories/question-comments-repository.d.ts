import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import type { QuestionComments } from "../../enterprise/entities/question-comment";
import type { CommentWithAuthor } from "../../enterprise/entities/value-objects/comment-with-author";
export declare abstract class QuestionCommentsRepository {
    abstract create(questionComment: QuestionComments): Promise<void>;
    abstract findById(id: string): Promise<QuestionComments | null>;
    abstract delete(questionComment: QuestionComments): Promise<void>;
    abstract findManyByQuestionIdWithAuthor(questionId: string, params: PaginationParams): Promise<CommentWithAuthor[]>;
}
