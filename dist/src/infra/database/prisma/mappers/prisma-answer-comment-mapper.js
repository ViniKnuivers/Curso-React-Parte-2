"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAnswerCommentMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const answer_comment_1 = require("../../../../domain/forum/enterprise/entities/answer-comment");
class PrismaAnswerCommentMapper {
    static toDomain(raw) {
        return answer_comment_1.AnswerComments.create({
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            answerId: new unique_entity_id_1.UniqueEntityID(raw.answerId),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt ?? undefined,
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    }
    static toPrisma(answerComment) {
        return {
            id: answerComment.id.toString(),
            content: answerComment.content,
            authorId: answerComment.authorId.toString(),
            answerId: answerComment.answerId.toString(),
            createdAt: answerComment.createdAt,
            updatedAt: answerComment.updatedAt,
        };
    }
}
exports.PrismaAnswerCommentMapper = PrismaAnswerCommentMapper;
//# sourceMappingURL=prisma-answer-comment-mapper.js.map