import { AggregateRoot } from "../../../../core/entities/aggregate-root";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
export interface CommentProps {
    content: string;
    authorId: UniqueEntityID;
    createdAt: Date;
    updatedAt?: Date;
}
export declare abstract class Comment<Props extends CommentProps> extends AggregateRoot<Props> {
    get content(): string;
    get authorId(): UniqueEntityID;
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    private touch;
    set content(content: string);
}
