import type { QuestionDetails } from "../../../domain/forum/enterprise/entities/value-objects/question-details";
export declare class QuestionDetailsPresenter {
    static toHTTP(question: QuestionDetails): {
        id: string;
        title: string;
        slug: string;
        content: string;
        authorId: string;
        author: string;
        bestAnswerId: string | null;
        attachments: {
            id: string;
            title: string;
            url: string;
        }[];
        createdAt: Date;
        updatedAt: Date | null;
    };
}
