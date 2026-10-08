import { type Either } from "../../../../core/either";
import { QuestionCommentsRepository } from "../repositories/question-comments-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface DeleteQuestionCommentUseCaseRequest {
    authorId: string;
    questionCommentId: string;
}
type DeleteQuestionCommentUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, Record<string, never>>;
export declare class DeleteQuestionCommentUseCase {
    private questionCommentsRepository;
    constructor(questionCommentsRepository: QuestionCommentsRepository);
    execute({ authorId, questionCommentId, }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse>;
}
export {};
