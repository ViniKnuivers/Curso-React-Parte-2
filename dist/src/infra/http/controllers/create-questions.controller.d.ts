import { z } from 'zod';
import type { UserPayload } from "../../auth/jwt.strategy";
import { CreateQuestionUseCase } from "../../../domain/forum/application/use-cases/create-question";
declare const createQuestionBodySchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodUUID>>;
}, z.core.$strip>;
type CreateQuestionBody = z.infer<typeof createQuestionBodySchema>;
export declare class CreateQuestionController {
    private createQuestion;
    constructor(createQuestion: CreateQuestionUseCase);
    handle(body: CreateQuestionBody, user: UserPayload): Promise<void>;
}
export {};
