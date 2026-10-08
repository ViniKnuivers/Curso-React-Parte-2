import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { NotAllowedError } from "../../../core/errors/not-allowed-error";
import { ResourceNotFoundError } from "../../../core/errors/resource-not-found-error";
import { StudentAlreadyExistsError } from "../../../domain/forum/application/use-cases/errors/student-already-exists-error";
import { WrongCredentialsError } from "../../../domain/forum/application/use-cases/errors/wrong-credentials-error";
import { InvalidAttachmentTypeError } from "../../../domain/forum/application/use-cases/errors/invalid-attachment-type-error";
type DomainError = NotAllowedError | ResourceNotFoundError | StudentAlreadyExistsError | WrongCredentialsError | InvalidAttachmentTypeError;
export declare class DomainExceptionFilter implements ExceptionFilter {
    catch(error: DomainError, host: ArgumentsHost): void;
    private static statusFor;
}
export {};
