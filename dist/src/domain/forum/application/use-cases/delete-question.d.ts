import { type Either } from "../../../../core/either";
import type { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface DeleteQuestionUseCaseRequest {
    questionId: string;
    authorId: string;
}
type DeleteQuestionUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {
    question: Question;
}>;
export declare class DeleteQuestionUseCase {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute({ questionId, authorId, }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse>;
}
export {};
