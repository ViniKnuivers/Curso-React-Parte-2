"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.url(),
    JWT_PRIVATE_KEY: zod_1.z.string(),
    JWT_PUBLIC_KEY: zod_1.z.string(),
    PORT: zod_1.z.coerce.number().optional().default(3333),
    CLOUDFLARE_ACCOUNT_ID: zod_1.z.string().optional(),
    AWS_ACCESS_KEY_ID: zod_1.z.string().optional(),
    AWS_SECRET_ACCESS_KEY: zod_1.z.string().optional(),
    AWS_BUCKET_NAME: zod_1.z.string().optional(),
    CLOUDFLARE_PUBLIC_URL: zod_1.z.url().optional(),
});
//# sourceMappingURL=env.js.map