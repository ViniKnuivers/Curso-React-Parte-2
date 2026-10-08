import type { UserPayload } from "../../auth/jwt.strategy";
import { ChooseQuestionBestAnswerUseCase } from "../../../domain/forum/application/use-cases/choose-question-best-answer";
export declare class ChooseQuestionBestAnswerController {
    private chooseQuestionBestAnswer;
    constructor(chooseQuestionBestAnswer: ChooseQuestionBestAnswerUseCase);
    handle(user: UserPayload, answerId: string): Promise<void>;
}
