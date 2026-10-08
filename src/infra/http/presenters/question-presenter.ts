import type { Question } from '@/domain/forum/enterprise/entities/question'

export class QuestionPresenter {
  static toHTTP(question: Question) {
    return {
      id: question.id.toString(),
      title: question.title,
      slug: question.slug.value,
      content: question.content,
      authorId: question.authorId.toString(),
      bestAnswerId: question.bestAnswerId?.toString() ?? null,
      attachmentIds: question.attachments.map((attachment) =>
        attachment.attachmentId.toString(),
      ),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt ?? null,
    }
  }
}
