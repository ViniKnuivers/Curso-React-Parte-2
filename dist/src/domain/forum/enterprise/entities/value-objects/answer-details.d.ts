import { UniqueEntityID } from "../../../../../core/entities/unique-entity-id";
import { ValueObject } from "../../../../../core/entities/value-object";
import type { Attachment } from "../attachment";
export interface AnswerDetailsProps {
    answerId: UniqueEntityID;
    questionId: UniqueEntityID;
    authorId: UniqueEntityID;
    author: string;
    content: string;
    attachments: Attachment[];
    createdAt: Date;
    updatedAt?: Date;
}
export declare class AnswerDetails extends ValueObject<AnswerDetailsProps> {
    get answerId(): UniqueEntityID;
    get questionId(): UniqueEntityID;
    get authorId(): UniqueEntityID;
    get author(): string;
    get content(): string;
    get attachments(): Attachment[];
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    static create(props: AnswerDetailsProps): AnswerDetails;
}
