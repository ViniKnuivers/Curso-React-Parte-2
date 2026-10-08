import { type Either } from "../../../../core/either";
import { AnswerCommentsRepository } from "../repositories/answer-comments-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface DeleteAnswerCommentUseCaseRequest {
    authorId: string;
    answerCommentId: string;
}
type DeleteAnswerCommentUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, Record<string, never>>;
export declare class DeleteAnswerCommentUseCase {
    private answerCommentsRepository;
    constructor(answerCommentsRepository: AnswerCommentsRepository);
    execute({ authorId, answerCommentId, }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse>;
}
export {};
