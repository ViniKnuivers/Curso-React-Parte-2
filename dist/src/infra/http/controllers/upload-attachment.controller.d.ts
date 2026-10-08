import { UploadAndCreateAttachmentUseCase } from "../../../domain/forum/application/use-cases/upload-and-create-attachment";
export declare class UploadAttachmentController {
    private uploadAndCreateAttachment;
    constructor(uploadAndCreateAttachment: UploadAndCreateAttachmentUseCase);
    handle(file: Express.Multer.File): Promise<{
        attachment: {
            id: string;
            title: string;
            url: string;
        };
    }>;
}
