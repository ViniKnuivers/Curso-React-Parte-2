import type { UserPayload } from "../../auth/jwt.strategy";
import { DeleteAnswerUseCase } from "../../../domain/forum/application/use-cases/delete-answer";
export declare class DeleteAnswerController {
    private deleteAnswer;
    constructor(deleteAnswer: DeleteAnswerUseCase);
    handle(user: UserPayload, answerId: string): Promise<void>;
}
