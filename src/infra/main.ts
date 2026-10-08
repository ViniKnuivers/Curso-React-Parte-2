import 'dotenv/config'
import { join } from 'node:path'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from '@/infra/app.module'
import { DomainExceptionFilter } from '@/infra/http/filters/domain-exception.filter'
import type { Env } from '@/infra/env'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: false,
  })

  app.useGlobalFilters(new DomainExceptionFilter())
  app.useStaticAssets(join(process.cwd(), 'uploads'), { prefix: '/uploads' })

  const configService: ConfigService<Env, true> = app.get(ConfigService)

  await app.listen(configService.get('PORT', { infer: true }))
}

bootstrap()
