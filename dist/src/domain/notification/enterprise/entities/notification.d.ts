import { Entity } from "../../../../core/entities/entity";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Optional } from "../../../../core/types/optional";
export interface NotificationProps {
    recipientId: UniqueEntityID;
    title: string;
    content: string;
    readAt?: Date | undefined;
    createdAt: Date;
}
export declare class Notification extends Entity<NotificationProps> {
    get recipientId(): UniqueEntityID;
    get title(): string;
    get content(): string;
    get readAt(): Date | undefined;
    get createdAt(): Date;
    set readAt(readAt: Date | undefined);
    static create(props: Optional<NotificationProps, 'createdAt'>, id?: UniqueEntityID): Notification;
}
