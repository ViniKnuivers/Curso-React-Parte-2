import type { UserPayload } from "../../auth/jwt.strategy";
import { ReadNotificationUseCase } from "../../../domain/notification/application/use-cases/read-notification";
export declare class ReadNotificationController {
    private readNotification;
    constructor(readNotification: ReadNotificationUseCase);
    handle(user: UserPayload, notificationId: string): Promise<{
        notification: {
            id: string;
            recipientId: string;
            title: string;
            content: string;
            readAt: Date | null;
            createdAt: Date;
        };
    }>;
}
