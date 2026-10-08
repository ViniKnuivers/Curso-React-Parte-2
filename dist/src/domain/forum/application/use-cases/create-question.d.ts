import { type Either } from "../../../../core/either";
import { Question } from "../../enterprise/entities/question";
import { QuestionRepository } from "../repositories/question-repository";
interface CreateQuestionUseCaseRequest {
    authorId: string;
    title: string;
    content: string;
    attachmentsIds: string[];
}
type CreateQuestionUseCaseResponse = Either<null, {
    question: Question;
}>;
export declare class CreateQuestionUseCase {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute({ authorId, title, content, attachmentsIds, }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse>;
}
export {};
