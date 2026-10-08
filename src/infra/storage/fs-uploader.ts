import { randomUUID } from 'node:crypto'
import { extname, resolve } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'
import { Injectable } from '@nestjs/common'
import { Uploader, type UploadParams } from '@/domain/forum/application/storage/uploader'

const UPLOADS_DIR = resolve(process.cwd(), 'uploads')

@Injectable()
export class FsUploader implements Uploader {
  async upload({ fileName, body }: UploadParams): Promise<{ url: string }> {
    await mkdir(UPLOADS_DIR, { recursive: true })

    const uniqueFileName = `${randomUUID()}${extname(fileName)}`

    await writeFile(resolve(UPLOADS_DIR, uniqueFileName), body)

    return { url: `/uploads/${uniqueFileName}` }
  }
}
