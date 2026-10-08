import type { Notification } from "../../../domain/notification/enterprise/entities/notification";
export declare class NotificationPresenter {
    static toHTTP(notification: Notification): {
        id: string;
        recipientId: string;
        title: string;
        content: string;
        readAt: Date | null;
        createdAt: Date;
    };
}
