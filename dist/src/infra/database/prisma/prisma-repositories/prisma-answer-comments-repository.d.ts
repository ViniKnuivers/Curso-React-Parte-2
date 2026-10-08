import { PrismaService } from "../prisma.service";
import type { AnswerCommentsRepository } from "../../../../domain/forum/application/repositories/answer-comments-repository";
import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import type { AnswerComments } from "../../../../domain/forum/enterprise/entities/answer-comment";
import type { CommentWithAuthor } from "../../../../domain/forum/enterprise/entities/value-objects/comment-with-author";
export declare class PrismaAnswerCommentsRepository implements AnswerCommentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<AnswerComments | null>;
    findManyByAnswerIdWithAuthor(answerId: string, { page }: PaginationParams): Promise<CommentWithAuthor[]>;
    create(answerComment: AnswerComments): Promise<void>;
    delete(answerComment: AnswerComments): Promise<void>;
}
