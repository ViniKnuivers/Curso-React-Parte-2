import { z } from 'zod';
import { ZodValidationPipe } from "./zod-validation-pipe";
declare const pageQueryParamSchema: z.ZodPipe<z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodString>>, z.ZodTransform<number, string>>, z.ZodNumber>;
export type PageQueryParam = z.infer<typeof pageQueryParamSchema>;
export declare const pageQueryParamPipe: ZodValidationPipe;
export {};
