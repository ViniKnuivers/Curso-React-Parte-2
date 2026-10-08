"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaQuestionCommentMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const question_comment_1 = require("../../../../domain/forum/enterprise/entities/question-comment");
class PrismaQuestionCommentMapper {
    static toDomain(raw) {
        return question_comment_1.QuestionComments.create({
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt ?? undefined,
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    }
    static toPrisma(questionComment) {
        return {
            id: questionComment.id.toString(),
            content: questionComment.content,
            authorId: questionComment.authorId.toString(),
            questionId: questionComment.questionId.toString(),
            createdAt: questionComment.createdAt,
            updatedAt: questionComment.updatedAt,
        };
    }
}
exports.PrismaQuestionCommentMapper = PrismaQuestionCommentMapper;
//# sourceMappingURL=prisma-question-comment-mapper.js.map