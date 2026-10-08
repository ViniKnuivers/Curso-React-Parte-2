import { z } from 'zod';
import type { UserPayload } from "../../auth/jwt.strategy";
import { EditAnswerUseCase } from "../../../domain/forum/application/use-cases/edit-answer";
declare const editAnswerBodySchema: z.ZodObject<{
    content: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodUUID>>;
}, z.core.$strip>;
type EditAnswerBody = z.infer<typeof editAnswerBodySchema>;
export declare class EditAnswerController {
    private editAnswer;
    constructor(editAnswer: EditAnswerUseCase);
    handle(body: EditAnswerBody, user: UserPayload, answerId: string): Promise<void>;
}
export {};
