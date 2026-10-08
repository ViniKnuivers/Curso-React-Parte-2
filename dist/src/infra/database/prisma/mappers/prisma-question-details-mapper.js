"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaQuestionDetailsMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const slug_1 = require("../../../../domain/forum/enterprise/entities/value-objects/slug");
const question_details_1 = require("../../../../domain/forum/enterprise/entities/value-objects/question-details");
const prisma_attachment_mapper_1 = require("./prisma-attachment-mapper");
class PrismaQuestionDetailsMapper {
    static toDomain(raw) {
        return question_details_1.QuestionDetails.create({
            questionId: new unique_entity_id_1.UniqueEntityID(raw.id),
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            author: raw.author.name,
            title: raw.title,
            slug: new slug_1.Slug(raw.slug),
            content: raw.content,
            bestAnswerId: raw.bestAnswerId
                ? new unique_entity_id_1.UniqueEntityID(raw.bestAnswerId)
                : undefined,
            attachments: raw.attachments.map(prisma_attachment_mapper_1.PrismaAttachmentMapper.toDomain),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt ?? undefined,
        });
    }
}
exports.PrismaQuestionDetailsMapper = PrismaQuestionDetailsMapper;
//# sourceMappingURL=prisma-question-details-mapper.js.map