import type { Attachment as PrismaAttachment } from '../../../../../generated/prisma/client';
import { AnswerAttachment } from "../../../../domain/forum/enterprise/entities/answer-attachment";
export declare class PrismaAnswerAttachmentMapper {
    static toDomain(raw: PrismaAttachment): AnswerAttachment;
}
