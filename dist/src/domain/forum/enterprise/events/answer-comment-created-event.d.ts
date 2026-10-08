import type { DomainEvent } from "../../../../core/events/domain-event";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { AnswerComments } from "../entities/answer-comment";
export declare class AnswerCommentCreatedEvent implements DomainEvent {
    ocurredAt: Date;
    answerComment: AnswerComments;
    constructor(answerComment: AnswerComments);
    getAggregateId(): UniqueEntityID;
}
