import { describe, expect, it, vi } from 'vitest'
import { ConfigService } from '@nestjs/config'
import { R2Storage } from '@/infra/storage/r2-storage'
import type { Env } from '@/infra/env'

const sendMock = vi.fn().mockResolvedValue({})

vi.mock('@aws-sdk/client-s3', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@aws-sdk/client-s3')>()

  return {
    ...actual,
    S3Client: vi.fn().mockImplementation(function (this: { send: typeof sendMock }) {
      this.send = sendMock
    }),
  }
})

describe('R2Storage', () => {
  it('Should upload a file to R2 and return its public url', async () => {
    const config = new ConfigService<Env, true>({
      CLOUDFLARE_ACCOUNT_ID: 'account-id',
      AWS_ACCESS_KEY_ID: 'access-key',
      AWS_SECRET_ACCESS_KEY: 'secret-key',
      AWS_BUCKET_NAME: 'attachments',
      CLOUDFLARE_PUBLIC_URL: 'https://public.example.com',
    })

    const r2Storage = new R2Storage(config)

    const { url } = await r2Storage.upload({
      fileName: 'profile.png',
      fileType: 'image/png',
      body: Buffer.from(''),
    })

    expect(sendMock).toHaveBeenCalledTimes(1)
    expect(url).toContain('https://public.example.com/')
    expect(url).toContain('profile.png')
  })
})
