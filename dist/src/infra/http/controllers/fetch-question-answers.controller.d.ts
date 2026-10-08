import { type PageQueryParam } from "../pipes/page-query-param.pipe";
import { FetchQuestionAnswersUseCase } from "../../../domain/forum/application/use-cases/fetch-question-answers";
export declare class FetchQuestionAnswersController {
    private fetchQuestionAnswers;
    constructor(fetchQuestionAnswers: FetchQuestionAnswersUseCase);
    handle(questionId: string, page: PageQueryParam): Promise<{
        answers: {
            id: string;
            content: string;
            authorId: string;
            author: string;
            questionId: string;
            attachments: {
                id: string;
                title: string;
                url: string;
            }[];
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
}
