import { randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { Uploader, type UploadParams } from '@/domain/forum/application/storage/uploader'
import type { Env } from '@/infra/env'

@Injectable()
export class R2Storage implements Uploader {
  private client: S3Client
  private bucketName: string
  private publicUrl: string

  constructor(config: ConfigService<Env, true>) {
    const accountId = config.get('CLOUDFLARE_ACCOUNT_ID', { infer: true })

    this.client = new S3Client({
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      region: 'auto',
      credentials: {
        accessKeyId: config.get('AWS_ACCESS_KEY_ID', { infer: true }) ?? '',
        secretAccessKey:
          config.get('AWS_SECRET_ACCESS_KEY', { infer: true }) ?? '',
      },
    })

    this.bucketName = config.get('AWS_BUCKET_NAME', { infer: true }) ?? ''
    this.publicUrl = config.get('CLOUDFLARE_PUBLIC_URL', { infer: true }) ?? ''
  }

  async upload({
    fileName,
    fileType,
    body,
  }: UploadParams): Promise<{ url: string }> {
    const uniqueFileName = `${randomUUID()}-${fileName}`

    await this.client.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: uniqueFileName,
        Body: body,
        ContentType: fileType,
      }),
    )

    return { url: new URL(uniqueFileName, this.publicUrl).toString() }
  }
}
