"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWithAuthorPresenter = void 0;
class CommentWithAuthorPresenter {
    static toHTTP(comment) {
        return {
            id: comment.commentId.toString(),
            content: comment.content,
            authorId: comment.authorId.toString(),
            author: comment.author,
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt ?? null,
        };
    }
}
exports.CommentWithAuthorPresenter = CommentWithAuthorPresenter;
//# sourceMappingURL=comment-with-author-presenter.js.map