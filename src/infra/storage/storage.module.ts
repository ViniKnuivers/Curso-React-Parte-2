import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Uploader } from '@/domain/forum/application/storage/uploader'
import { FsUploader } from '@/infra/storage/fs-uploader'
import { R2Storage } from '@/infra/storage/r2-storage'
import type { Env } from '@/infra/env'

@Module({
  providers: [
    {
      provide: Uploader,
      useFactory: (config: ConfigService<Env, true>) => {
        const hasR2Credentials = Boolean(
          config.get('CLOUDFLARE_ACCOUNT_ID', { infer: true }),
        )

        return hasR2Credentials ? new R2Storage(config) : new FsUploader()
      },
      inject: [ConfigService],
    },
  ],
  exports: [Uploader],
})
export class StorageModule {}
