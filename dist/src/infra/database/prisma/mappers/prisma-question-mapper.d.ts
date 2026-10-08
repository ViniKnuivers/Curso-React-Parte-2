import type { Question as PrismaQuestion, Attachment as PrismaAttachment, Prisma } from '../../../../../generated/prisma/client';
import { Question } from "../../../../domain/forum/enterprise/entities/question";
export type PrismaQuestionWithAttachments = PrismaQuestion & {
    attachments: PrismaAttachment[];
};
export declare class PrismaQuestionMapper {
    static toDomain(raw: PrismaQuestionWithAttachments): Question;
    static toPrisma(question: Question): Prisma.QuestionUncheckedCreateInput;
}
