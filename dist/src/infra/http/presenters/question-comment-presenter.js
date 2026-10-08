"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCommentPresenter = void 0;
class QuestionCommentPresenter {
    static toHTTP(questionComment) {
        return {
            id: questionComment.id.toString(),
            content: questionComment.content,
            authorId: questionComment.authorId.toString(),
            questionId: questionComment.questionId.toString(),
            createdAt: questionComment.createdAt,
            updatedAt: questionComment.updatedAt ?? null,
        };
    }
}
exports.QuestionCommentPresenter = QuestionCommentPresenter;
//# sourceMappingURL=question-comment-presenter.js.map