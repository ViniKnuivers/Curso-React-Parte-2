import { DomainEvents } from '@/core/events/domain-events'
import type { PaginationParams } from '@/core/repositories/pagination-params'
import type { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import type { Answer } from '@/domain/forum/enterprise/entities/answer'
import { AnswerDetails } from '@/domain/forum/enterprise/entities/value-objects/answer-details'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'

export class InMemoryAnswersRepository implements AnswerRepository {
  public items: Answer[] = []

  constructor(
    private studentsRepository: InMemoryStudentsRepository = new InMemoryStudentsRepository(),
    private attachmentsRepository: InMemoryAttachmentsRepository = new InMemoryAttachmentsRepository(),
  ) {}

  async create(answer: Answer) {
    this.items.push(answer)

    DomainEvents.dispatchEventsForAggregate(answer.id)
  }

  async delete(answer: Answer): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id)

    this.items.splice(itemIndex, 1)
  }

  async findById(id: string): Promise<Answer | null> {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async save(answer: Answer): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id)

    this.items[itemIndex] = answer

    DomainEvents.dispatchEventsForAggregate(answer.id)
  }

  async findManyByQuestionIdWithAuthor(
    questionId: string,
    { page }: PaginationParams,
  ): Promise<AnswerDetails[]> {
    const answers = this.items
      .filter((item) => item.questionId.toString() === questionId)
      .slice((page - 1) * 20, page * 20)

    return answers.map((answer) => {
      const author = this.studentsRepository.items.find((student) =>
        student.id.equals(answer.authorId),
      )

      if (!author) {
        throw new Error(
          `Author with ID "${answer.authorId.toString()}" does not exist.`,
        )
      }

      const attachments = answer.attachments.map((answerAttachment) => {
        const attachment = this.attachmentsRepository.items.find((item) =>
          item.id.equals(answerAttachment.attachmentId),
        )

        if (!attachment) {
          throw new Error(
            `Attachment with ID "${answerAttachment.attachmentId.toString()}" does not exist.`,
          )
        }

        return attachment
      })

      return AnswerDetails.create({
        answerId: answer.id,
        questionId: answer.questionId,
        authorId: answer.authorId,
        author: author.name,
        content: answer.content,
        attachments,
        createdAt: answer.createdAt,
        updatedAt: answer.updatedAt,
      })
    })
  }
}
