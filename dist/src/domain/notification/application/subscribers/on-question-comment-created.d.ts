import type { EventHandler } from "../../../../core/events/event-handler";
import { QuestionRepository } from "../../../forum/application/repositories/question-repository";
import { SendNotificationUseCase } from "../use-cases/send-notification";
export declare class OnQuestionCommentCreated implements EventHandler {
    private questionRepository;
    private sendNotification;
    constructor(questionRepository: QuestionRepository, sendNotification: SendNotificationUseCase);
    setupSubscriptions(): void;
    private sendQuestionCommentNotification;
}
