import { z } from 'zod';
import type { UserPayload } from "../../auth/jwt.strategy";
import { EditQuestionUseCase } from "../../../domain/forum/application/use-cases/edit-question";
declare const editQuestionBodySchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodUUID>>;
}, z.core.$strip>;
type EditQuestionBody = z.infer<typeof editQuestionBodySchema>;
export declare class EditQuestionController {
    private editQuestion;
    constructor(editQuestion: EditQuestionUseCase);
    handle(body: EditQuestionBody, user: UserPayload, questionId: string): Promise<void>;
}
export {};
