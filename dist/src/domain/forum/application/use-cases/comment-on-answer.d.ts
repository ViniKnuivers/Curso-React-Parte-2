import { type Either } from "../../../../core/either";
import { AnswerComments } from "../../enterprise/entities/answer-comment";
import { AnswerCommentsRepository } from "../repositories/answer-comments-repository";
import { AnswerRepository } from "../repositories/answers-repository";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface CommentOnAnswerUseCaseRequest {
    authorId: string;
    answerId: string;
    content: string;
}
type CommentOnAnswerUseCaseResponse = Either<ResourceNotFoundError, {
    answerComment: AnswerComments;
}>;
export declare class CommentOnAnswerUseCase {
    private answerRepository;
    private answerCommentsRepository;
    constructor(answerRepository: AnswerRepository, answerCommentsRepository: AnswerCommentsRepository);
    execute({ authorId, answerId, content, }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse>;
}
export {};
