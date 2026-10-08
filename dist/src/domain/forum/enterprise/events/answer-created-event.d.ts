import type { DomainEvent } from "../../../../core/events/domain-event";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Answer } from "../entities/answer";
export declare class AnswerCreatedEvent implements DomainEvent {
    ocurredAt: Date;
    answer: Answer;
    constructor(answer: Answer);
    getAggregateId(): UniqueEntityID;
}
