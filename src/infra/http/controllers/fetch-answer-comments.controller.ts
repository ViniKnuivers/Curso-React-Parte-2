import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import { CommentWithAuthorPresenter } from '@/infra/http/presenters/comment-with-author-presenter'
import {
  pageQueryParamPipe,
  type PageQueryParam,
} from '@/infra/http/pipes/page-query-param.pipe'
import { FetchAnswerComments } from '@/domain/forum/application/use-cases/fetch-answer-comments'

@Controller('/answers/:answerId/comments')
@UseGuards(JwtAuthGuard)
export class FetchAnswerCommentsController {
  constructor(private fetchAnswerComments: FetchAnswerComments) {}

  @Get()
  async handle(
    @Param('answerId') answerId: string,
    @Query('page', pageQueryParamPipe) page: PageQueryParam,
  ) {
    const result = await this.fetchAnswerComments.execute({ answerId, page })

    if (result.isLeft()) {
      throw result.value
    }

    return {
      comments: result.value.answerComments.map(
        CommentWithAuthorPresenter.toHTTP,
      ),
    }
  }
}
