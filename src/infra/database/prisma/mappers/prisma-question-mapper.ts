import type {
  Question as PrismaQuestion,
  Attachment as PrismaAttachment,
  Prisma,
} from '../../../../../generated/prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Question } from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { PrismaQuestionAttachmentMapper } from '@/infra/database/prisma/mappers/prisma-question-attachment-mapper'

export type PrismaQuestionWithAttachments = PrismaQuestion & {
  attachments: PrismaAttachment[]
}

export class PrismaQuestionMapper {
  static toDomain(raw: PrismaQuestionWithAttachments): Question {
    return Question.create(
      {
        title: raw.title,
        slug: new Slug(raw.slug),
        content: raw.content,
        authorId: new UniqueEntityID(raw.authorId),
        bestAnswerId: raw.bestAnswerId
          ? new UniqueEntityID(raw.bestAnswerId)
          : undefined,
        attachments: raw.attachments.map(PrismaQuestionAttachmentMapper.toDomain),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt ?? undefined,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(question: Question): Prisma.QuestionUncheckedCreateInput {
    return {
      id: question.id.toString(),
      title: question.title,
      slug: question.slug.value,
      content: question.content,
      authorId: question.authorId.toString(),
      bestAnswerId: question.bestAnswerId?.toString(),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    }
  }
}
