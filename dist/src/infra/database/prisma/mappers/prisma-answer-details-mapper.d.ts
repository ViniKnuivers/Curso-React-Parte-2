import type { Answer as PrismaAnswer, Attachment as PrismaAttachment, User as PrismaUser } from '../../../../../generated/prisma/client';
import { AnswerDetails } from "../../../../domain/forum/enterprise/entities/value-objects/answer-details";
type PrismaAnswerDetails = PrismaAnswer & {
    author: PrismaUser;
    attachments: PrismaAttachment[];
};
export declare class PrismaAnswerDetailsMapper {
    static toDomain(raw: PrismaAnswerDetails): AnswerDetails;
}
export {};
