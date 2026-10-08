import type { Attachment as PrismaAttachment } from '../../../../../generated/prisma/client';
import { QuestionAttachment } from "../../../../domain/forum/enterprise/entities/question-attachment";
export declare class PrismaQuestionAttachmentMapper {
    static toDomain(raw: PrismaAttachment): QuestionAttachment;
}
