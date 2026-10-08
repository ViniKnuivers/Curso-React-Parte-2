import { ConfigService } from '@nestjs/config';
import { Uploader, type UploadParams } from "../../domain/forum/application/storage/uploader";
import type { Env } from "../env";
export declare class R2Storage implements Uploader {
    private client;
    private bucketName;
    private publicUrl;
    constructor(config: ConfigService<Env, true>);
    upload({ fileName, fileType, body, }: UploadParams): Promise<{
        url: string;
    }>;
}
