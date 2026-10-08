import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import { Answer } from "../../enterprise/entities/answer";
import type { AnswerDetails } from "../../enterprise/entities/value-objects/answer-details";
export declare abstract class AnswerRepository {
    abstract findById(id: string): Promise<Answer | null>;
    abstract findManyByQuestionIdWithAuthor(questionId: string, params: PaginationParams): Promise<AnswerDetails[]>;
    abstract create(answer: Answer): Promise<void>;
    abstract delete(answer: Answer): Promise<void>;
    abstract save(answer: Answer): Promise<void>;
}
