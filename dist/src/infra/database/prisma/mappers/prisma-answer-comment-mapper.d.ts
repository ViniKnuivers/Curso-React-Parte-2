import type { AnswerComment as PrismaAnswerComment, Prisma } from '../../../../../generated/prisma/client';
import { AnswerComments } from "../../../../domain/forum/enterprise/entities/answer-comment";
export declare class PrismaAnswerCommentMapper {
    static toDomain(raw: PrismaAnswerComment): AnswerComments;
    static toPrisma(answerComment: AnswerComments): Prisma.AnswerCommentUncheckedCreateInput;
}
