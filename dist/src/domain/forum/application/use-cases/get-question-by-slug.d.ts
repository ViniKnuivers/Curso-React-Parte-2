import { type Either } from "../../../../core/either";
import type { QuestionDetails } from "../../enterprise/entities/value-objects/question-details";
import { QuestionRepository } from "../repositories/question-repository";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface GetQuestionBySlugUseCaseRequest {
    slug: string;
}
type GetQuestionBySlugUseCaseResponse = Either<ResourceNotFoundError, {
    question: QuestionDetails;
}>;
export declare class GetQuestionBySlugUseCase {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute({ slug, }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse>;
}
export {};
