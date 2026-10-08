import type { AnswerDetails } from '@/domain/forum/enterprise/entities/value-objects/answer-details'

export class AnswerDetailsPresenter {
  static toHTTP(answer: AnswerDetails) {
    return {
      id: answer.answerId.toString(),
      content: answer.content,
      authorId: answer.authorId.toString(),
      author: answer.author,
      questionId: answer.questionId.toString(),
      attachments: answer.attachments.map((attachment) => ({
        id: attachment.id.toString(),
        title: attachment.title,
        url: attachment.link,
      })),
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt ?? null,
    }
  }
}
