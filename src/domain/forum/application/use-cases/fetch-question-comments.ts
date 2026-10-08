import { Injectable } from '@nestjs/common'
import { type Either, right } from '@/core/either'
import type { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'

interface FetchQuestionCommentsRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsResponse = Either<
  null,
  { questionComments: CommentWithAuthor[] }
>

@Injectable()
export class FetchQuestionComments {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsRequest): Promise<FetchQuestionCommentsResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(
        questionId,
        { page },
      )

    return right({
      questionComments,
    })
  }
}
