import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { z } from 'zod';
import type { Env } from "../env";
declare const tokenPayloadSchema: z.ZodObject<{
    sub: z.ZodUUID;
}, z.core.$strip>;
export type UserPayload = z.infer<typeof tokenPayloadSchema>;
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(config: ConfigService<Env, true>);
    validate(payload: UserPayload): Promise<{
        sub: string;
    }>;
}
export {};
