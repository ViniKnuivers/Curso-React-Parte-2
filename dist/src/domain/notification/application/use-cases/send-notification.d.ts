import { type Either } from "../../../../core/either";
import { Notification } from "../../enterprise/entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";
interface SendNotificationUseCaseRequest {
    recipientId: string;
    title: string;
    content: string;
}
type SendNotificationUseCaseResponse = Either<null, {
    notification: Notification;
}>;
export declare class SendNotificationUseCase {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute({ recipientId, title, content, }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse>;
}
export {};
