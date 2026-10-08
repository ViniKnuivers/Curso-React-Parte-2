import type { Notification as PrismaNotification, Prisma } from '../../../../../generated/prisma/client';
import { Notification } from "../../../../domain/notification/enterprise/entities/notification";
export declare class PrismaNotificationMapper {
    static toDomain(raw: PrismaNotification): Notification;
    static toPrisma(notification: Notification): Prisma.NotificationUncheckedCreateInput;
}
