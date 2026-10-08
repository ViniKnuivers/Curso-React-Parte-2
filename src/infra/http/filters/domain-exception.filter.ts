import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import type { Response } from 'express'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error'
import { StudentAlreadyExistsError } from '@/domain/forum/application/use-cases/errors/student-already-exists-error'
import { WrongCredentialsError } from '@/domain/forum/application/use-cases/errors/wrong-credentials-error'
import { InvalidAttachmentTypeError } from '@/domain/forum/application/use-cases/errors/invalid-attachment-type-error'

type DomainError =
  | NotAllowedError
  | ResourceNotFoundError
  | StudentAlreadyExistsError
  | WrongCredentialsError
  | InvalidAttachmentTypeError

@Catch(
  NotAllowedError,
  ResourceNotFoundError,
  StudentAlreadyExistsError,
  WrongCredentialsError,
  InvalidAttachmentTypeError,
)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(error: DomainError, host: ArgumentsHost) {
    const status = DomainExceptionFilter.statusFor(error)
    const response = host.switchToHttp().getResponse<Response>()

    response.status(status).json({
      statusCode: status,
      message: error.message,
    })
  }

  private static statusFor(error: DomainError): number {
    if (error instanceof NotAllowedError) return 403
    if (error instanceof StudentAlreadyExistsError) return 409
    if (error instanceof WrongCredentialsError) return 401
    if (error instanceof InvalidAttachmentTypeError) return 400

    return 404
  }
}
