import type { AnswerComments } from "../../../domain/forum/enterprise/entities/answer-comment";
export declare class AnswerCommentPresenter {
    static toHTTP(answerComment: AnswerComments): {
        id: string;
        content: string;
        authorId: string;
        answerId: string;
        createdAt: Date;
        updatedAt: Date | null;
    };
}
