"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvents = void 0;
class DomainEvents {
    static handlersMap = {};
    static markedAggregates = [];
    static markAggregateForDispatch(aggregate) {
        const aggregateFound = this.findMarkedAggregateByID(aggregate.id);
        if (!aggregateFound) {
            this.markedAggregates.push(aggregate);
        }
    }
    static async dispatchAggregateEvents(aggregate) {
        await Promise.all(aggregate.domainEvents.map((event) => this.dispatch(event)));
    }
    static removeAggregateFromMarkedDispatchList(aggregate) {
        const index = this.markedAggregates.findIndex((a) => a.id.equals(aggregate.id));
        if (index >= 0) {
            this.markedAggregates.splice(index, 1);
        }
    }
    static findMarkedAggregateByID(id) {
        return this.markedAggregates.find((aggregate) => aggregate.id.equals(id));
    }
    static async dispatchEventsForAggregate(id) {
        const aggregate = this.findMarkedAggregateByID(id);
        if (aggregate) {
            await this.dispatchAggregateEvents(aggregate);
            aggregate.clearEvents();
            this.removeAggregateFromMarkedDispatchList(aggregate);
        }
    }
    static register(callback, eventClassName) {
        const wasEventRegisteredBefore = eventClassName in this.handlersMap;
        if (!wasEventRegisteredBefore) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);
    }
    static clearHandlers() {
        this.handlersMap = {};
    }
    static clearMarkedAggregates() {
        this.markedAggregates = [];
    }
    static async dispatch(event) {
        const eventClassName = event.constructor.name;
        const isEventRegistered = eventClassName in this.handlersMap;
        if (isEventRegistered) {
            const handlers = this.handlersMap[eventClassName];
            await Promise.all(handlers.map((handler) => handler(event)));
        }
    }
}
exports.DomainEvents = DomainEvents;
//# sourceMappingURL=domain-events.js.map