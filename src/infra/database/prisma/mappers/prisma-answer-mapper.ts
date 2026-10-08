import type {
  Answer as PrismaAnswer,
  Attachment as PrismaAttachment,
  Prisma,
} from '../../../../../generated/prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { PrismaAnswerAttachmentMapper } from '@/infra/database/prisma/mappers/prisma-answer-attachment-mapper'

export type PrismaAnswerWithAttachments = PrismaAnswer & {
  attachments: PrismaAttachment[]
}

export class PrismaAnswerMapper {
  static toDomain(raw: PrismaAnswerWithAttachments): Answer {
    return Answer.create(
      {
        content: raw.content,
        authorId: new UniqueEntityID(raw.authorId),
        questionId: new UniqueEntityID(raw.questionId),
        attachments: raw.attachments.map(PrismaAnswerAttachmentMapper.toDomain),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt ?? undefined,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(answer: Answer): Prisma.AnswerUncheckedCreateInput {
    return {
      id: answer.id.toString(),
      content: answer.content,
      authorId: answer.authorId.toString(),
      questionId: answer.questionId.toString(),
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
    }
  }
}
