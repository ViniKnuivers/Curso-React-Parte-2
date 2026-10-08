import { type PageQueryParam } from "../pipes/page-query-param.pipe";
import { FetchRecentQuestionsUseCase } from "../../../domain/forum/application/use-cases/fetch-recent-questions";
export declare class FetchRecentQuestionsController {
    private fetchRecentQuestions;
    constructor(fetchRecentQuestions: FetchRecentQuestionsUseCase);
    handle(page: PageQueryParam): Promise<{
        questions: {
            id: string;
            title: string;
            slug: string;
            content: string;
            authorId: string;
            bestAnswerId: string | null;
            attachmentIds: string[];
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
}
