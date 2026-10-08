import { PrismaService } from "../prisma.service";
import type { QuestionCommentsRepository } from "../../../../domain/forum/application/repositories/question-comments-repository";
import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import type { QuestionComments } from "../../../../domain/forum/enterprise/entities/question-comment";
import type { CommentWithAuthor } from "../../../../domain/forum/enterprise/entities/value-objects/comment-with-author";
export declare class PrismaQuestionCommentsRepository implements QuestionCommentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<QuestionComments | null>;
    findManyByQuestionIdWithAuthor(questionId: string, { page }: PaginationParams): Promise<CommentWithAuthor[]>;
    create(questionComment: QuestionComments): Promise<void>;
    delete(questionComment: QuestionComments): Promise<void>;
}
