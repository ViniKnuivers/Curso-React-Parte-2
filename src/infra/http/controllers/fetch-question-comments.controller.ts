import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { CommentWithAuthorPresenter } from '@/infra/http/presenters/comment-with-author-presenter'
import {
  pageQueryParamPipe,
  type PageQueryParam,
} from '@/infra/http/pipes/page-query-param.pipe'
import { FetchQuestionComments } from '@/domain/forum/application/use-cases/fetch-question-comments'

@Controller('/questions/:questionId/comments')
@UseGuards(JwtAuthGuard)
export class FetchQuestionCommentsController {
  constructor(private fetchQuestionComments: FetchQuestionComments) {}

  @Get()
  async handle(
    @Param('questionId') questionId: string,
    @Query('page', pageQueryParamPipe) page: PageQueryParam,
  ) {
    const result = await this.fetchQuestionComments.execute({
      questionId,
      page,
    })

    if (result.isLeft()) {
      throw result.value
    }

    return {
      comments: result.value.questionComments.map(
        CommentWithAuthorPresenter.toHTTP,
      ),
    }
  }
}
