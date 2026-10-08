import type { Question as PrismaQuestion, Attachment as PrismaAttachment, User as PrismaUser } from '../../../../../generated/prisma/client';
import { QuestionDetails } from "../../../../domain/forum/enterprise/entities/value-objects/question-details";
type PrismaQuestionDetails = PrismaQuestion & {
    author: PrismaUser;
    attachments: PrismaAttachment[];
};
export declare class PrismaQuestionDetailsMapper {
    static toDomain(raw: PrismaQuestionDetails): QuestionDetails;
}
export {};
