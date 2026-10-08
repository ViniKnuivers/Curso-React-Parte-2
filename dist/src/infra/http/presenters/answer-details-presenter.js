"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerDetailsPresenter = void 0;
class AnswerDetailsPresenter {
    static toHTTP(answer) {
        return {
            id: answer.answerId.toString(),
            content: answer.content,
            authorId: answer.authorId.toString(),
            author: answer.author,
            questionId: answer.questionId.toString(),
            attachments: answer.attachments.map((attachment) => ({
                id: attachment.id.toString(),
                title: attachment.title,
                url: attachment.link,
            })),
            createdAt: answer.createdAt,
            updatedAt: answer.updatedAt ?? null,
        };
    }
}
exports.AnswerDetailsPresenter = AnswerDetailsPresenter;
//# sourceMappingURL=answer-details-presenter.js.map