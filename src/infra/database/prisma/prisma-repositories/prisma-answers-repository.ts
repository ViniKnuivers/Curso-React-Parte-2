import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaAnswerMapper } from '@/infra/database/prisma/mappers/prisma-answer-mapper'
import { PrismaAnswerDetailsMapper } from '@/infra/database/prisma/mappers/prisma-answer-details-mapper'
import { DomainEvents } from '@/core/events/domain-events'
import type { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { Answer } from '@/domain/forum/enterprise/entities/answer'
import type { AnswerDetails } from '@/domain/forum/enterprise/entities/value-objects/answer-details'

@Injectable()
export class PrismaAnswersRepository implements AnswerRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Answer | null> {
    const answer = await this.prisma.answer.findUnique({
      where: { id },
      include: { attachments: true },
    })

    if (!answer) return null

    return PrismaAnswerMapper.toDomain(answer)
  }

  async findManyByQuestionIdWithAuthor(
    questionId: string,
    { page }: PaginationParams,
  ): Promise<AnswerDetails[]> {
    const answers = await this.prisma.answer.findMany({
      where: { questionId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      skip: (page - 1) * 20,
      include: { author: true, attachments: true },
    })

    return answers.map(PrismaAnswerDetailsMapper.toDomain)
  }

  async create(answer: Answer): Promise<void> {
    const data = PrismaAnswerMapper.toPrisma(answer)

    await this.prisma.answer.create({ data })

    await this.syncAttachments(answer)

    await DomainEvents.dispatchEventsForAggregate(answer.id)
  }

  async save(answer: Answer): Promise<void> {
    const data = PrismaAnswerMapper.toPrisma(answer)

    await this.prisma.answer.update({
      where: { id: data.id },
      data,
    })

    await this.syncAttachments(answer)

    await DomainEvents.dispatchEventsForAggregate(answer.id)
  }

  async delete(answer: Answer): Promise<void> {
    await this.prisma.answer.delete({
      where: { id: answer.id.toString() },
    })
  }

  private async syncAttachments(answer: Answer): Promise<void> {
    await this.prisma.attachment.updateMany({
      where: { answerId: answer.id.toString() },
      data: { answerId: null },
    })

    const attachmentIds = answer.attachments.map((attachment) =>
      attachment.attachmentId.toString(),
    )

    if (attachmentIds.length) {
      await this.prisma.attachment.updateMany({
        where: { id: { in: attachmentIds } },
        data: { answerId: answer.id.toString() },
      })
    }
  }
}
