import { type Either } from "../../../../core/either";
import type { Question } from "../../enterprise/entities/question";
import { AnswerRepository } from "../repositories/answers-repository";
import { QuestionRepository } from "../repositories/question-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface ChooseQuestionBestAnswerUseCaseRequest {
    answerId: string;
    authorId: string;
}
type ChooseQuestionBestAnswerUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, {
    question: Question;
}>;
export declare class ChooseQuestionBestAnswerUseCase {
    private answerRepository;
    private questionRepository;
    constructor(answerRepository: AnswerRepository, questionRepository: QuestionRepository);
    execute({ answerId, authorId, }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseResponse>;
}
export {};
