import type {
  Attachment as PrismaAttachment,
  Prisma,
} from '../../../../../generated/prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

export class PrismaAttachmentMapper {
  static toDomain(raw: PrismaAttachment): Attachment {
    return Attachment.create(
      {
        title: raw.title,
        link: raw.link,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(attachment: Attachment): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: attachment.id.toString(),
      title: attachment.title,
      link: attachment.link,
    }
  }
}
