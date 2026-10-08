import { Controller, Param, Patch, UseGuards } from '@nestjs/common'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { JwtAuthGuard } from '@/infra/auth/jwt-auth.guard'
import type { UserPayload } from '@/infra/auth/jwt.strategy'
import { NotificationPresenter } from '@/infra/http/presenters/notification-presenter'
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification'

@Controller('/notifications/:id/read')
@UseGuards(JwtAuthGuard)
export class ReadNotificationController {
  constructor(private readNotification: ReadNotificationUseCase) {}

  @Patch()
  async handle(
    @CurrentUser() user: UserPayload,
    @Param('id') notificationId: string,
  ) {
    const result = await this.readNotification.execute({
      recipientId: user.sub,
      notificationId,
    })

    if (result.isLeft()) {
      throw result.value
    }

    return {
      notification: NotificationPresenter.toHTTP(result.value.notification),
    }
  }
}
