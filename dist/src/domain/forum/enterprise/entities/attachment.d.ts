import { Entity } from "../../../../core/entities/entity";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
export interface AttachmentProps {
    title: string;
    link: string;
}
export declare class Attachment extends Entity<AttachmentProps> {
    get title(): string;
    get link(): string;
    static create(props: AttachmentProps, id?: UniqueEntityID): Attachment;
}
