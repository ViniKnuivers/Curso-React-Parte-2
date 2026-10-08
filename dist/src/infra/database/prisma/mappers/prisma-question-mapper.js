"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaQuestionMapper = void 0;
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const question_1 = require("../../../../domain/forum/enterprise/entities/question");
const slug_1 = require("../../../../domain/forum/enterprise/entities/value-objects/slug");
const prisma_question_attachment_mapper_1 = require("./prisma-question-attachment-mapper");
class PrismaQuestionMapper {
    static toDomain(raw) {
        return question_1.Question.create({
            title: raw.title,
            slug: new slug_1.Slug(raw.slug),
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            bestAnswerId: raw.bestAnswerId
                ? new unique_entity_id_1.UniqueEntityID(raw.bestAnswerId)
                : undefined,
            attachments: raw.attachments.map(prisma_question_attachment_mapper_1.PrismaQuestionAttachmentMapper.toDomain),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt ?? undefined,
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    }
    static toPrisma(question) {
        return {
            id: question.id.toString(),
            title: question.title,
            slug: question.slug.value,
            content: question.content,
            authorId: question.authorId.toString(),
            bestAnswerId: question.bestAnswerId?.toString(),
            createdAt: question.createdAt,
            updatedAt: question.updatedAt,
        };
    }
}
exports.PrismaQuestionMapper = PrismaQuestionMapper;
//# sourceMappingURL=prisma-question-mapper.js.map