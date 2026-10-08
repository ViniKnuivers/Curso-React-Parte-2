import type { AnswerDetails } from "../../../domain/forum/enterprise/entities/value-objects/answer-details";
export declare class AnswerDetailsPresenter {
    static toHTTP(answer: AnswerDetails): {
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
    };
}
