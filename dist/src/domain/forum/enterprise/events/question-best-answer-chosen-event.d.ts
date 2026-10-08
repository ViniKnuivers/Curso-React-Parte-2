import type { DomainEvent } from "../../../../core/events/domain-event";
import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Question } from "../entities/question";
export declare class QuestionBestAnswerChosenEvent implements DomainEvent {
    ocurredAt: Date;
    question: Question;
    bestAnswerId: UniqueEntityID;
    constructor(question: Question, bestAnswerId: UniqueEntityID);
    getAggregateId(): UniqueEntityID;
}
