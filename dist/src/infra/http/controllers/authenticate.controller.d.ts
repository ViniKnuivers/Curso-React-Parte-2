import { JwtService } from '@nestjs/jwt';
import { z } from 'zod';
import { AuthenticateStudentUseCase } from "../../../domain/forum/application/use-cases/authenticate-student";
declare const authenticateBodySchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
type AuthenticateBody = z.infer<typeof authenticateBodySchema>;
export declare class AuthenticateController {
    private jwt;
    private authenticateStudent;
    constructor(jwt: JwtService, authenticateStudent: AuthenticateStudentUseCase);
    handle(body: AuthenticateBody): Promise<{
        access_token: string;
    }>;
}
export {};
