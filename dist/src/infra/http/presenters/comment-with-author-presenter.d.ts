import type { CommentWithAuthor } from "../../../domain/forum/enterprise/entities/value-objects/comment-with-author";
export declare class CommentWithAuthorPresenter {
    static toHTTP(comment: CommentWithAuthor): {
        id: string;
        content: string;
        authorId: string;
        author: string;
        createdAt: Date;
        updatedAt: Date | null;
    };
}
