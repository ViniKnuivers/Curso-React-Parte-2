import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import type { Question } from "../../enterprise/entities/question";
import type { QuestionDetails } from "../../enterprise/entities/value-objects/question-details";
export declare abstract class QuestionRepository {
    abstract findById(id: string): Promise<Question | null>;
    abstract findDetailsBySlug(slug: string): Promise<QuestionDetails | null>;
    abstract create(question: Question): Promise<void>;
    abstract delete(question: Question): Promise<void>;
    abstract save(question: Question): Promise<void>;
    abstract findManyRecent(params: PaginationParams): Promise<Question[]>;
}
