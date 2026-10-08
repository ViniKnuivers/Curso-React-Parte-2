"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCommentWithAuthorMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const comment_with_author_1 = require("../../../../domain/forum/enterprise/entities/value-objects/comment-with-author");
class PrismaCommentWithAuthorMapper {
    static toDomain(raw) {
        return comment_with_author_1.CommentWithAuthor.create({
            commentId: new unique_entity_id_1.UniqueEntityID(raw.id),
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            author: raw.author.name,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt ?? undefined,
        });
    }
}
exports.PrismaCommentWithAuthorMapper = PrismaCommentWithAuthorMapper;
//# sourceMappingURL=prisma-comment-with-author-mapper.js.map