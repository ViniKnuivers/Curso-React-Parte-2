"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerCommentCreatedEvent = void 0;
class AnswerCommentCreatedEvent {
    ocurredAt;
    answerComment;
    constructor(answerComment) {
        this.answerComment = answerComment;
        this.ocurredAt = new Date();
    }
    getAggregateId() {
        return this.answerComment.id;
    }
}
exports.AnswerCommentCreatedEvent = AnswerCommentCreatedEvent;
//# sourceMappingURL=answer-comment-created-event.js.map