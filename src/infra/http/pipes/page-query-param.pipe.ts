import { z } from 'zod'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'

const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

export type PageQueryParam = z.infer<typeof pageQueryParamSchema>

export const pageQueryParamPipe = new ZodValidationPipe(pageQueryParamSchema)
