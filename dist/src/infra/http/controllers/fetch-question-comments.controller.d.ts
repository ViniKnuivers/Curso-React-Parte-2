import { type PageQueryParam } from "../pipes/page-query-param.pipe";
import { FetchQuestionComments } from "../../../domain/forum/application/use-cases/fetch-question-comments";
export declare class FetchQuestionCommentsController {
    private fetchQuestionComments;
    constructor(fetchQuestionComments: FetchQuestionComments);
    handle(questionId: string, page: PageQueryParam): Promise<{
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
