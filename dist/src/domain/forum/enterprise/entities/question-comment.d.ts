import { AggregateRoot } from "../../../../core/entities/aggregate-root";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Optional } from "../../../../core/types/optional";
export interface QuestionCommentsProps {
    content: string;
    questionId: UniqueEntityID;
    authorId: UniqueEntityID;
    createdAt: Date;
    updatedAt?: Date;
}
export declare class QuestionComments extends AggregateRoot<QuestionCommentsProps> {
    get questionId(): UniqueEntityID;
    get content(): string;
    get authorId(): UniqueEntityID;
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    private touch;
    set content(content: string);
    static create(props: Optional<QuestionCommentsProps, 'createdAt'>, id?: UniqueEntityID): QuestionComments;
}
