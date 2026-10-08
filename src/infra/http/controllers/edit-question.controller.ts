import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common'
import { z } from 'zod'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import type { UserPayload } from '@/infra/auth/jwt.strategy'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'

const editQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
  attachments: z.array(z.uuid()).default([]),
})

type EditQuestionBody = z.infer<typeof editQuestionBodySchema>

const bodyValidationPipe = new ZodValidationPipe(editQuestionBodySchema)

@Controller('/questions/:id')
@UseGuards(JwtAuthGuard)
export class EditQuestionController {
  constructor(private editQuestion: EditQuestionUseCase) {}

  @Put()
  async handle(
    @Body(bodyValidationPipe) body: EditQuestionBody,
    @CurrentUser() user: UserPayload,
    @Param('id') questionId: string,
  ) {
    const result = await this.editQuestion.execute({
      authorId: user.sub,
      questionId,
      title: body.title,
      content: body.content,
      attachmentsIds: body.attachments,
    })

    if (result.isLeft()) {
      throw result.value
    }
  }
}
