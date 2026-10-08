import type { UserPayload } from "../../auth/jwt.strategy";
import { DeleteQuestionUseCase } from "../../../domain/forum/application/use-cases/delete-question";
export declare class DeleteQuestionController {
    private deleteQuestion;
    constructor(deleteQuestion: DeleteQuestionUseCase);
    handle(user: UserPayload, questionId: string): Promise<void>;
}
