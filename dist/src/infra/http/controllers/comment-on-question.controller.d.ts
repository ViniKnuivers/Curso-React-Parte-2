import { z } from 'zod';
import type { UserPayload } from "../../auth/jwt.strategy";
import { CommentOnQuestionUseCase } from "../../../domain/forum/application/use-cases/comment-on-question";
declare const commentOnQuestionBodySchema: z.ZodObject<{
    content: z.ZodString;
}, z.core.$strip>;
type CommentOnQuestionBody = z.infer<typeof commentOnQuestionBodySchema>;
export declare class CommentOnQuestionController {
    private commentOnQuestion;
    constructor(commentOnQuestion: CommentOnQuestionUseCase);
    handle(body: CommentOnQuestionBody, user: UserPayload, questionId: string): Promise<{
        questionComment: {
            id: string;
            content: string;
            authorId: string;
            questionId: string;
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
}
export {};
