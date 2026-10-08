import type { EventHandler } from "../../../../core/events/event-handler";
import { AnswerRepository } from "../../../forum/application/repositories/answers-repository";
import { SendNotificationUseCase } from "../use-cases/send-notification";
export declare class OnAnswerCommentCreated implements EventHandler {
    private answerRepository;
    private sendNotification;
    constructor(answerRepository: AnswerRepository, sendNotification: SendNotificationUseCase);
    setupSubscriptions(): void;
    private sendAnswerCommentNotification;
}
