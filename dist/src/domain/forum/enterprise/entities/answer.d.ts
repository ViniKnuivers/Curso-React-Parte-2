import { AggregateRoot } from "../../../../core/entities/aggregate-root";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Optional } from "../../../../core/types/optional";
import type { AnswerAttachment } from "./answer-attachment";
export interface AnswerProps {
    content: string;
    authorId: UniqueEntityID;
    questionId: UniqueEntityID;
    attachments: AnswerAttachment[];
    createdAt: Date;
    updatedAt?: Date;
}
export declare class Answer extends AggregateRoot<AnswerProps> {
    get content(): string;
    get authorId(): UniqueEntityID;
    get questionId(): UniqueEntityID;
    get attachments(): AnswerAttachment[];
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    get excerpt(): string;
    private touch;
    set content(content: string);
    set attachments(attachments: AnswerAttachment[]);
    static create(props: Optional<AnswerProps, 'createdAt' | 'attachments'>, id?: UniqueEntityID): Answer;
}
