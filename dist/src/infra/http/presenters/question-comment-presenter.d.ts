import type { QuestionComments } from "../../../domain/forum/enterprise/entities/question-comment";
export declare class QuestionCommentPresenter {
    static toHTTP(questionComment: QuestionComments): {
        id: string;
        content: string;
        authorId: string;
        questionId: string;
        createdAt: Date;
        updatedAt: Date | null;
    };
}
