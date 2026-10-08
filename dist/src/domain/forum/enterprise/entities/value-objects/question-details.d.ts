import { UniqueEntityID } from "../../../../../core/entities/unique-entity-id";
import { ValueObject } from "../../../../../core/entities/value-object";
import type { Attachment } from "../attachment";
import type { Slug } from "./slug";
export interface QuestionDetailsProps {
    questionId: UniqueEntityID;
    authorId: UniqueEntityID;
    author: string;
    title: string;
    slug: Slug;
    content: string;
    bestAnswerId?: UniqueEntityID;
    attachments: Attachment[];
    createdAt: Date;
    updatedAt?: Date;
}
export declare class QuestionDetails extends ValueObject<QuestionDetailsProps> {
    get questionId(): UniqueEntityID;
    get authorId(): UniqueEntityID;
    get author(): string;
    get title(): string;
    get slug(): Slug;
    get content(): string;
    get bestAnswerId(): UniqueEntityID | undefined;
    get attachments(): Attachment[];
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    static create(props: QuestionDetailsProps): QuestionDetails;
}
