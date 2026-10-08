import type { Attachment as PrismaAttachment, Prisma } from '../../../../../generated/prisma/client';
import { Attachment } from "../../../../domain/forum/enterprise/entities/attachment";
export declare class PrismaAttachmentMapper {
    static toDomain(raw: PrismaAttachment): Attachment;
    static toPrisma(attachment: Attachment): Prisma.AttachmentUncheckedCreateInput;
}
