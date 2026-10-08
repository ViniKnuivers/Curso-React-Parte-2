import { type Either } from "../../../../core/either";
import { Attachment } from "../../enterprise/entities/attachment";
import { AttachmentsRepository } from "../repositories/attachments-repository";
import { Uploader } from "../storage/uploader";
import { InvalidAttachmentTypeError } from "./errors/invalid-attachment-type-error";
interface UploadAndCreateAttachmentUseCaseRequest {
    fileName: string;
    fileType: string;
    body: Buffer;
}
type UploadAndCreateAttachmentUseCaseResponse = Either<InvalidAttachmentTypeError, {
    attachment: Attachment;
}>;
export declare class UploadAndCreateAttachmentUseCase {
    private attachmentsRepository;
    private uploader;
    constructor(attachmentsRepository: AttachmentsRepository, uploader: Uploader);
    execute({ fileName, fileType, body, }: UploadAndCreateAttachmentUseCaseRequest): Promise<UploadAndCreateAttachmentUseCaseResponse>;
}
export {};
