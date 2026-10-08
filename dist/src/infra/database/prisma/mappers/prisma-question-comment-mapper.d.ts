import type { QuestionComment as PrismaQuestionComment, Prisma } from '../../../../../generated/prisma/client';
import { QuestionComments } from "../../../../domain/forum/enterprise/entities/question-comment";
export declare class PrismaQuestionCommentMapper {
    static toDomain(raw: PrismaQuestionComment): QuestionComments;
    static toPrisma(questionComment: QuestionComments): Prisma.QuestionCommentUncheckedCreateInput;
}
