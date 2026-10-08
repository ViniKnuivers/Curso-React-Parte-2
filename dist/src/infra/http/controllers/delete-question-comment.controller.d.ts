import type { UserPayload } from "../../auth/jwt.strategy";
import { DeleteQuestionCommentUseCase } from "../../../domain/forum/application/use-cases/delete-question-comment";
export declare class DeleteQuestionCommentController {
    private deleteQuestionComment;
    constructor(deleteQuestionComment: DeleteQuestionCommentUseCase);
    handle(user: UserPayload, questionCommentId: string): Promise<void>;
}
