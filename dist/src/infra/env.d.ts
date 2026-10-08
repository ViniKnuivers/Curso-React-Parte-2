import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodURL;
    JWT_PRIVATE_KEY: z.ZodString;
    JWT_PUBLIC_KEY: z.ZodString;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    CLOUDFLARE_ACCOUNT_ID: z.ZodOptional<z.ZodString>;
    AWS_ACCESS_KEY_ID: z.ZodOptional<z.ZodString>;
    AWS_SECRET_ACCESS_KEY: z.ZodOptional<z.ZodString>;
    AWS_BUCKET_NAME: z.ZodOptional<z.ZodString>;
    CLOUDFLARE_PUBLIC_URL: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export type Env = z.infer<typeof envSchema>;
