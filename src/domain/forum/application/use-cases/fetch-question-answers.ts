import { Injectable } from '@nestjs/common'
import { type Either, right } from '@/core/either'
import type { AnswerDetails } from '@/domain/forum/enterprise/entities/value-objects/answer-details'
import { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionAnswersUseCaseResponse = Either<
  null,
  { answers: AnswerDetails[] }
>

@Injectable()
export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswerRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionIdWithAuthor(
      questionId,
      { page },
    )

    return right({
      answers,
    })
  }
}
