import { type PageQueryParam } from "../pipes/page-query-param.pipe";
import { FetchAnswerComments } from "../../../domain/forum/application/use-cases/fetch-answer-comments";
export declare class FetchAnswerCommentsController {
    private fetchAnswerComments;
    constructor(fetchAnswerComments: FetchAnswerComments);
    handle(answerId: string, page: PageQueryParam): Promise<{
        comments: {
            id: string;
            content: string;
            authorId: string;
            author: string;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
}
