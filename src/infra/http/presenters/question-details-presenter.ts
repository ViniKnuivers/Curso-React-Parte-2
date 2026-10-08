import type { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'

export class QuestionDetailsPresenter {
  static toHTTP(question: QuestionDetails) {
    return {
      id: question.questionId.toString(),
      title: question.title,
      slug: question.slug.value,
      content: question.content,
      authorId: question.authorId.toString(),
      author: question.author,
      bestAnswerId: question.bestAnswerId?.toString() ?? null,
      attachments: question.attachments.map((attachment) => ({
        id: attachment.id.toString(),
        title: attachment.title,
        url: attachment.link,
      })),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt ?? null,
    }
  }
}
