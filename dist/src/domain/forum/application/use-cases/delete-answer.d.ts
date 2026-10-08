import { type Either } from "../../../../core/either";
import { AnswerRepository } from "../repositories/answers-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface DeleteAnswerUseCaseRequest {
    answerId: string;
    authorId: string;
}
type DeleteAnswerUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, Record<string, never>>;
export declare class DeleteAnswerUseCase {
    private answerRepository;
    constructor(answerRepository: AnswerRepository);
    execute({ answerId, authorId, }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse>;
}
export {};
