import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common'
import { z } from 'zod'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import type { UserPayload } from '@/infra/auth/jwt.strategy'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { QuestionCommentPresenter } from '@/infra/http/presenters/question-comment-presenter'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'

const commentOnQuestionBodySchema = z.object({
  content: z.string(),
})

type CommentOnQuestionBody = z.infer<typeof commentOnQuestionBodySchema>

const bodyValidationPipe = new ZodValidationPipe(commentOnQuestionBodySchema)

@Controller('/questions/:questionId/comments')
@UseGuards(JwtAuthGuard)
export class CommentOnQuestionController {
  constructor(private commentOnQuestion: CommentOnQuestionUseCase) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CommentOnQuestionBody,
    @CurrentUser() user: UserPayload,
    @Param('questionId') questionId: string,
  ) {
    const result = await this.commentOnQuestion.execute({
      authorId: user.sub,
      questionId,
      content: body.content,
    })

    if (result.isLeft()) {
      throw result.value
    }

    return {
      questionComment: QuestionCommentPresenter.toHTTP(
        result.value.questionComment,
      ),
    }
  }
}
