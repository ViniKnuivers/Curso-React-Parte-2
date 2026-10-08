import type { Answer as PrismaAnswer, Attachment as PrismaAttachment, Prisma } from '../../../../../generated/prisma/client';
import { Answer } from "../../../../domain/forum/enterprise/entities/answer";
export type PrismaAnswerWithAttachments = PrismaAnswer & {
    attachments: PrismaAttachment[];
};
export declare class PrismaAnswerMapper {
    static toDomain(raw: PrismaAnswerWithAttachments): Answer;
    static toPrisma(answer: Answer): Prisma.AnswerUncheckedCreateInput;
}
