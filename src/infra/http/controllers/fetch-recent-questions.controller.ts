import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { QuestionPresenter } from '@/infra/http/presenters/question-presenter'
import {
  pageQueryParamPipe,
  type PageQueryParam,
} from '@/infra/http/pipes/page-query-param.pipe'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class FetchRecentQuestionsController {
  constructor(private fetchRecentQuestions: FetchRecentQuestionsUseCase) {}

  @Get()
  async handle(@Query('page', pageQueryParamPipe) page: PageQueryParam) {
    const result = await this.fetchRecentQuestions.execute({ page })

    if (result.isLeft()) {
      throw result.value
    }

    return { questions: result.value.questions.map(QuestionPresenter.toHTTP) }
  }
}
