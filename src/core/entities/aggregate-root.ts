import { Entity } from '@/core/entities/entity'
import { DomainEvents } from '@/core/events/domain-events'
import type { DomainEvent } from '@/core/events/domain-event'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: DomainEvent[] = []

  get domainEvents(): DomainEvent[] {
    return this._domainEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent)
    this.markEventForDispatch()
  }

  private markEventForDispatch(): void {
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents(): void {
    this._domainEvents = []
  }
}
