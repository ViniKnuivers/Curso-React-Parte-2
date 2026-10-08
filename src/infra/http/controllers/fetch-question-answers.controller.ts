import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { AnswerDetailsPresenter } from '@/infra/http/presenters/answer-details-presenter'
import {
  pageQueryParamPipe,
  type PageQueryParam,
} from '@/infra/http/pipes/page-query-param.pipe'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'

@Controller('/questions/:questionId/answers')
@UseGuards(JwtAuthGuard)
export class FetchQuestionAnswersController {
  constructor(private fetchQuestionAnswers: FetchQuestionAnswersUseCase) {}

  @Get()
  async handle(
    @Param('questionId') questionId: string,
    @Query('page', pageQueryParamPipe) page: PageQueryParam,
  ) {
    const result = await this.fetchQuestionAnswers.execute({ questionId, page })

    if (result.isLeft()) {
      throw result.value
    }

    return { answers: result.value.answers.map(AnswerDetailsPresenter.toHTTP) }
  }
}
