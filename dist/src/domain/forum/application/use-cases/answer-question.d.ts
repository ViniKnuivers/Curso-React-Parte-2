import { type Either } from "../../../../core/either";
import { Answer } from "../../enterprise/entities/answer";
import { AnswerRepository } from "../repositories/answers-repository";
interface AnswerQuestionUseCaseRequest {
    instructorId: string;
    questionId: string;
    content: string;
    attachmentsIds: string[];
}
type AnswerQuestionUseCaseResponse = Either<null, {
    answer: Answer;
}>;
export declare class AnswerQuestionUseCase {
    private answerRepository;
    constructor(answerRepository: AnswerRepository);
    execute({ instructorId, questionId, content, attachmentsIds, }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse>;
}
export {};
