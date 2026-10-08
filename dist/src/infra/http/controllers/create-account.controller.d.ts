import { z } from 'zod';
import { RegisterStudentUseCase } from "../../../domain/forum/application/use-cases/register-student";
declare const createAccountBodySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
type CreateAccountBody = z.infer<typeof createAccountBodySchema>;
export declare class CreateAccountController {
    private registerStudent;
    constructor(registerStudent: RegisterStudentUseCase);
    handle(body: CreateAccountBody): Promise<void>;
}
export {};
