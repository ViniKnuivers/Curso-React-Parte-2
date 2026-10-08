"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerCommentPresenter = void 0;
class AnswerCommentPresenter {
    static toHTTP(answerComment) {
        return {
            id: answerComment.id.toString(),
            content: answerComment.content,
            authorId: answerComment.authorId.toString(),
            answerId: answerComment.answerId.toString(),
            createdAt: answerComment.createdAt,
            updatedAt: answerComment.updatedAt ?? null,
        };
    }
}
exports.AnswerCommentPresenter = AnswerCommentPresenter;
//# sourceMappingURL=answer-comment-presenter.js.map