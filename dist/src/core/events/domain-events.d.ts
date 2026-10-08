import type { AggregateRoot } from "../entities/aggregate-root";
import type { UniqueEntityID } from "../entities/unique-entity-id";
import type { DomainEvent } from "./domain-event";
type DomainEventCallback = (event: DomainEvent) => void | Promise<void>;
export declare class DomainEvents {
    private static handlersMap;
    private static markedAggregates;
    static markAggregateForDispatch(aggregate: AggregateRoot<unknown>): void;
    private static dispatchAggregateEvents;
    private static removeAggregateFromMarkedDispatchList;
    private static findMarkedAggregateByID;
    static dispatchEventsForAggregate(id: UniqueEntityID): Promise<void>;
    static register(callback: DomainEventCallback, eventClassName: string): void;
    static clearHandlers(): void;
    static clearMarkedAggregates(): void;
    private static dispatch;
}
export {};
