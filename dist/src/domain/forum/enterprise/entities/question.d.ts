import { AggregateRoot } from "../../../../core/entities/aggregate-root";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Optional } from "../../../../core/types/optional";
import type { QuestionAttachment } from "./question-attachment";
import { Slug } from "./value-objects/slug";
export interface QuestionProps {
    title: string;
    content: string;
    authorId: UniqueEntityID;
    bestAnswerId?: UniqueEntityID | undefined;
    attachments: QuestionAttachment[];
    createdAt: Date;
    updatedAt?: Date;
    slug: Slug;
}
export declare class Question extends AggregateRoot<QuestionProps> {
    get title(): string;
    get content(): string;
    get authorId(): UniqueEntityID;
    get bestAnswerId(): UniqueEntityID | undefined;
    get createdAt(): Date;
    get updatedAt(): Date | undefined;
    get slug(): Slug;
    get attachments(): QuestionAttachment[];
    get excerpt(): string;
    private touch;
    set content(content: string);
    set title(title: string);
    set bestAnswerId(bestAnswerId: UniqueEntityID | undefined);
    set attachments(attachments: QuestionAttachment[]);
    static create(props: Optional<QuestionProps, 'createdAt' | 'slug' | 'attachments'>, id?: UniqueEntityID): Question;
}
