import type { DomainEvent } from "../../../../core/events/domain-event";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { QuestionComments } from "../entities/question-comment";
export declare class QuestionCommentCreatedEvent implements DomainEvent {
    ocurredAt: Date;
    questionComment: QuestionComments;
    constructor(questionComment: QuestionComments);
    getAggregateId(): UniqueEntityID;
}
