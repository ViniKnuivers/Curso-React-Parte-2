import { UniqueEntityID } from "../../../../../core/entities/unique-entity-id";
import { ValueObject } from "../../../../../core/entities/value-object";
export interface CommentWithAuthorProps {
    commentId: UniqueEntityID;
    content: string;
    authorId: UniqueEntityID;
    author: string;
    createdAt: Date;
    updatedAt?: Date;
}
export declare class CommentWithAuthor extends ValueObject<CommentWithAuthorProps> {
    get commentId(): UniqueEntityID;
    get content(): string;
    get authorId(): UniqueEntityID;
    get author(): string;
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    static create(props: CommentWithAuthorProps): CommentWithAuthor;
}
