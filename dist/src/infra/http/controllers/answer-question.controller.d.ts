import { z } from 'zod';
import type { UserPayload } from "../../auth/jwt.strategy";
import { AnswerQuestionUseCase } from "../../../domain/forum/application/use-cases/answer-question";
declare const answerQuestionBodySchema: z.ZodObject<{
    content: z.ZodString;
    attachments: z.ZodDefault<z.ZodArray<z.ZodUUID>>;
}, z.core.$strip>;
type AnswerQuestionBody = z.infer<typeof answerQuestionBodySchema>;
export declare class AnswerQuestionController {
    private answerQuestion;
    constructor(answerQuestion: AnswerQuestionUseCase);
    handle(body: AnswerQuestionBody, user: UserPayload, questionId: string): Promise<{
        answer: {
            id: string;
            content: string;
            authorId: string;
            questionId: string;
            attachmentIds: string[];
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
}
export {};
