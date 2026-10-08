import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaQuestionMapper } from '@/infra/database/prisma/mappers/prisma-question-mapper'
import { PrismaQuestionDetailsMapper } from '@/infra/database/prisma/mappers/prisma-question-details-mapper'
import { DomainEvents } from '@/core/events/domain-events'
import type { QuestionRepository } from '@/domain/forum/application/repositories/question-repository'
import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { Question } from '@/domain/forum/enterprise/entities/question'
import type { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'

@Injectable()
export class PrismaQuestionsRepository implements QuestionRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: { id },
      include: { attachments: true },
    })

    if (!question) return null

    return PrismaQuestionMapper.toDomain(question)
  }

  async findDetailsBySlug(slug: string): Promise<QuestionDetails | null> {
    const question = await this.prisma.question.findUnique({
      where: { slug },
      include: { author: true, attachments: true },
    })

    if (!question) return null

    return PrismaQuestionDetailsMapper.toDomain(question)
  }

  async findManyRecent({ page }: PaginationParams): Promise<Question[]> {
    const questions = await this.prisma.question.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
      skip: (page - 1) * 20,
      include: { attachments: true },
    })

    return questions.map(PrismaQuestionMapper.toDomain)
  }

  async create(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)

    await this.prisma.question.create({ data })

    await this.syncAttachments(question)

    await DomainEvents.dispatchEventsForAggregate(question.id)
  }

  async save(question: Question): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)

    await this.prisma.question.update({
      where: { id: data.id },
      data,
    })

    await this.syncAttachments(question)

    await DomainEvents.dispatchEventsForAggregate(question.id)
  }

  async delete(question: Question): Promise<void> {
    await this.prisma.question.delete({
      where: { id: question.id.toString() },
    })
  }

  private async syncAttachments(question: Question): Promise<void> {
    await this.prisma.attachment.updateMany({
      where: { questionId: question.id.toString() },
      data: { questionId: null },
    })

    const attachmentIds = question.attachments.map((attachment) =>
      attachment.attachmentId.toString(),
    )

    if (attachmentIds.length) {
      await this.prisma.attachment.updateMany({
        where: { id: { in: attachmentIds } },
        data: { questionId: question.id.toString() },
      })
    }
  }
}
