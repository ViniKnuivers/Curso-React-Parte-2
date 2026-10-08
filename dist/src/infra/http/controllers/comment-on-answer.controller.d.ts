import { z } from 'zod';
import type { UserPayload } from "../../auth/jwt.strategy";
import { CommentOnAnswerUseCase } from "../../../domain/forum/application/use-cases/comment-on-answer";
declare const commentOnAnswerBodySchema: z.ZodObject<{
    content: z.ZodString;
}, z.core.$strip>;
type CommentOnAnswerBody = z.infer<typeof commentOnAnswerBodySchema>;
export declare class CommentOnAnswerController {
    private commentOnAnswer;
    constructor(commentOnAnswer: CommentOnAnswerUseCase);
    handle(body: CommentOnAnswerBody, user: UserPayload, answerId: string): Promise<{
        answerComment: {
            id: string;
            content: string;
            authorId: string;
            answerId: string;
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
}
export {};
