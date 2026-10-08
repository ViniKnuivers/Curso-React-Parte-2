import { Injectable } from '@nestjs/common'
import { type Either, right } from '@/core/either'
import type { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'

interface FetchAnswerCommentsRequest {
  answerId: string
  page: number
}

type FetchAnswerCommentsResponse = Either<
  null,
  { answerComments: CommentWithAuthor[] }
>

@Injectable()
export class FetchAnswerComments {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswerCommentsRequest): Promise<FetchAnswerCommentsResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerIdWithAuthor(
        answerId,
        { page },
      )

    return right({
      answerComments,
    })
  }
}
