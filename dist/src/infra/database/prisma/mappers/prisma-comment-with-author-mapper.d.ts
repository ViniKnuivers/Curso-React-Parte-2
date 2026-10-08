import type { User as PrismaUser } from '../../../../../generated/prisma/client';
import { CommentWithAuthor } from "../../../../domain/forum/enterprise/entities/value-objects/comment-with-author";
interface PrismaCommentWithAuthor {
    id: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date | null;
    author: PrismaUser;
}
export declare class PrismaCommentWithAuthorMapper {
    static toDomain(raw: PrismaCommentWithAuthor): CommentWithAuthor;
}
export {};
