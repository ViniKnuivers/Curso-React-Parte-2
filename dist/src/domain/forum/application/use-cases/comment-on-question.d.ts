import { type Either } from "../../../../core/either";
import { QuestionComments } from "../../enterprise/entities/question-comment";
import { QuestionCommentsRepository } from "../repositories/question-comments-repository";
import { QuestionRepository } from "../repositories/question-repository";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface CommentOnQuestionUseCaseRequest {
    authorId: string;
    questionId: string;
    content: string;
}
type CommentOnQuestionUseCaseResponse = Either<ResourceNotFoundError, {
    questionComment: QuestionComments;
}>;
export declare class CommentOnQuestionUseCase {
    private questionRepository;
    private questionCommentsRepository;
    constructor(questionRepository: QuestionRepository, questionCommentsRepository: QuestionCommentsRepository);
    execute({ authorId, questionId, content, }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse>;
}
export {};
