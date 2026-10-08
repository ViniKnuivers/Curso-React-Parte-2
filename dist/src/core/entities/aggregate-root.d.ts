import { Entity } from "./entity";
import type { DomainEvent } from "../events/domain-event";
export declare abstract class AggregateRoot<Props> extends Entity<Props> {
    private _domainEvents;
    get domainEvents(): DomainEvent[];
    protected addDomainEvent(domainEvent: DomainEvent): void;
    private markEventForDispatch;
    clearEvents(): void;
}
