"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionDetailsPresenter = void 0;
class QuestionDetailsPresenter {
    static toHTTP(question) {
        return {
            id: question.questionId.toString(),
            title: question.title,
            slug: question.slug.value,
            content: question.content,
            authorId: question.authorId.toString(),
            author: question.author,
            bestAnswerId: question.bestAnswerId?.toString() ?? null,
            attachments: question.attachments.map((attachment) => ({
                id: attachment.id.toString(),
                title: attachment.title,
                url: attachment.link,
            })),
            createdAt: question.createdAt,
            updatedAt: question.updatedAt ?? null,
        };
    }
}
exports.QuestionDetailsPresenter = QuestionDetailsPresenter;
//# sourceMappingURL=question-details-presenter.js.map