"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerPresenter = void 0;
class AnswerPresenter {
    static toHTTP(answer) {
        return {
            id: answer.id.toString(),
            content: answer.content,
            authorId: answer.authorId.toString(),
            questionId: answer.questionId.toString(),
            attachmentIds: answer.attachments.map((attachment) => attachment.attachmentId.toString()),
            createdAt: answer.createdAt,
            updatedAt: answer.updatedAt ?? null,
        };
    }
}
exports.AnswerPresenter = AnswerPresenter;
//# sourceMappingURL=answer-presenter.js.map