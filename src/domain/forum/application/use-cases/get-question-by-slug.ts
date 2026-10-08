import { Injectable } from '@nestjs/common'
import { type Either, left, right } from '@/core/either'
import type { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { QuestionRepository } from '@/domain/forum/application/repositories/question-repository'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<
  ResourceNotFoundError,
  { question: QuestionDetails }
>

@Injectable()
export class GetQuestionBySlugUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionRepository.findDetailsBySlug(slug)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    return right({
      question,
    })
  }
}
