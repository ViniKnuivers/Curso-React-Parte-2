import { PrismaService } from "../prisma.service";
import type { AttachmentsRepository } from "../../../../domain/forum/application/repositories/attachments-repository";
import type { Attachment } from "../../../../domain/forum/enterprise/entities/attachment";
export declare class PrismaAttachmentsRepository implements AttachmentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(attachment: Attachment): Promise<void>;
}
