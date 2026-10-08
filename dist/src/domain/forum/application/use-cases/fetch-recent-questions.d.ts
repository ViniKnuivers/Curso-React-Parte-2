import { type Either } from "../../../../core/either";
import { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repository";
interface FetchRecentQuestionsUseCaseRequest {
    page: number;
}
type FetchRecentQuestionsUseCaseResponse = Either<null, {
    questions: Question[];
}>;
export declare class FetchRecentQuestionsUseCase {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute({ page, }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse>;
}
export {};
