import { type Either } from "../../../../core/either";
import { QuestionRepository } from "../repositories/question-repository";
import { NotAllowedError } from "../../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../../core/errors/resource-not-found-error";
interface EditQuestionUseCaseRequest {
    authorId: string;
    questionId: string;
    title: string;
    content: string;
    attachmentsIds: string[];
}
type EditQuestionUseCaseResponse = Either<ResourceNotFoundError | NotAllowedError, Record<string, never>>;
export declare class EditQuestionUseCase {
    private questionRepository;
    constructor(questionRepository: QuestionRepository);
    execute({ authorId, questionId, title, content, attachmentsIds, }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseResponse>;
}
export {};
