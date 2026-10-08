import { Uploader, type UploadParams } from "../../domain/forum/application/storage/uploader";
export declare class FsUploader implements Uploader {
    upload({ fileName, body }: UploadParams): Promise<{
        url: string;
    }>;
}
