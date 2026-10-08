import type { Answer } from "../../../domain/forum/enterprise/entities/answer";
export declare class AnswerPresenter {
    static toHTTP(answer: Answer): {
        id: string;
        content: string;
        authorId: string;
        questionId: string;
        attachmentIds: string[];
        createdAt: Date;
        updatedAt: Date | null;
    };
}
