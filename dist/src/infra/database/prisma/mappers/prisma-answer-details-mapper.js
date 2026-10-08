"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAnswerDetailsMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const answer_details_1 = require("../../../../domain/forum/enterprise/entities/value-objects/answer-details");
const prisma_attachment_mapper_1 = require("./prisma-attachment-mapper");
class PrismaAnswerDetailsMapper {
    static toDomain(raw) {
        return answer_details_1.AnswerDetails.create({
            answerId: new unique_entity_id_1.UniqueEntityID(raw.id),
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId),
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            author: raw.author.name,
            content: raw.content,
            attachments: raw.attachments.map(prisma_attachment_mapper_1.PrismaAttachmentMapper.toDomain),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt ?? undefined,
        });
    }
}
exports.PrismaAnswerDetailsMapper = PrismaAnswerDetailsMapper;
//# sourceMappingURL=prisma-answer-details-mapper.js.map