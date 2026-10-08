"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionPresenter = void 0;
class QuestionPresenter {
    static toHTTP(question) {
        return {
            id: question.id.toString(),
            title: question.title,
            slug: question.slug.value,
            content: question.content,
            authorId: question.authorId.toString(),
            bestAnswerId: question.bestAnswerId?.toString() ?? null,
            attachmentIds: question.attachments.map((attachment) => attachment.attachmentId.toString()),
            createdAt: question.createdAt,
            updatedAt: question.updatedAt ?? null,
        };
    }
}
exports.QuestionPresenter = QuestionPresenter;
//# sourceMappingURL=question-presenter.js.map