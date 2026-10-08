import { type Either } from "../../../../core/either";
import type { AnswerDetails } from "../../enterprise/entities/value-objects/answer-details";
import { AnswerRepository } from "../repositories/answers-repository";
interface FetchQuestionAnswersUseCaseRequest {
    questionId: string;
    page: number;
}
type FetchQuestionAnswersUseCaseResponse = Either<null, {
    answers: AnswerDetails[];
}>;
export declare class FetchQuestionAnswersUseCase {
    private answersRepository;
    constructor(answersRepository: AnswerRepository);
    execute({ questionId, page, }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse>;
}
export {};
