import { type Either } from "../../../../core/either";
import type { Answer } from "../../enterprise/entities/answer";
import { AnswerRepository } from "../repositories/answers-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface EditAnswerUseCaseRequest {
    authorId: string;
    answerId: string;
    content: string;
    attachmentsIds: string[];
}
type EditAnswerUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {
    answer: Answer;
}>;
export declare class EditAnswerUseCase {
    private answerRepository;
    constructor(answerRepository: AnswerRepository);
    execute({ authorId, answerId, content, attachmentsIds, }: EditAnswerUseCaseRequest): Promise<EditAnswerUseCaseResponse>;
}
export {};
