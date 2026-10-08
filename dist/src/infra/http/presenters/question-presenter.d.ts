import type { Question } from "../../../domain/forum/enterprise/entities/question";
export declare class QuestionPresenter {
    static toHTTP(question: Question): {
        id: string;
        title: string;
        slug: string;
        content: string;
        authorId: string;
        bestAnswerId: string | null;
        attachmentIds: string[];
        createdAt: Date;
        updatedAt: Date | null;
    };
}
