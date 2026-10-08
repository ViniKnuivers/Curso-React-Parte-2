import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common'
import { z } from 'zod'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import type { UserPayload } from '@/infra/auth/jwt.strategy'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { AnswerPresenter } from '@/infra/http/presenters/answer-presenter'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'

const answerQuestionBodySchema = z.object({
  content: z.string(),
  attachments: z.array(z.uuid()).default([]),
})

type AnswerQuestionBody = z.infer<typeof answerQuestionBodySchema>

const bodyValidationPipe = new ZodValidationPipe(answerQuestionBodySchema)

@Controller('/questions/:questionId/answers')
@UseGuards(JwtAuthGuard)
export class AnswerQuestionController {
  constructor(private answerQuestion: AnswerQuestionUseCase) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: AnswerQuestionBody,
    @CurrentUser() user: UserPayload,
    @Param('questionId') questionId: string,
  ) {
    const result = await this.answerQuestion.execute({
      instructorId: user.sub,
      questionId,
      content: body.content,
      attachmentsIds: body.attachments,
    })

    if (result.isLeft()) {
      throw result.value
    }

    return { answer: AnswerPresenter.toHTTP(result.value.answer) }
  }
}
