import { PrismaService } from "../prisma.service";
import type { NotificationsRepository } from "../../../../domain/notification/application/repositories/notifications-repository";
import type { Notification } from "../../../../domain/notification/enterprise/entities/notification";
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<Notification | null>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}
