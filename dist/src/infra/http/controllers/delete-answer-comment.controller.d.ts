import type { UserPayload } from "../../auth/jwt.strategy";
import { DeleteAnswerCommentUseCase } from "../../../domain/forum/application/use-cases/delete-answer-comment";
export declare class DeleteAnswerCommentController {
    private deleteAnswerComment;
    constructor(deleteAnswerComment: DeleteAnswerCommentUseCase);
    handle(user: UserPayload, answerCommentId: string): Promise<void>;
}
