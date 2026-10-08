"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionCommentCreatedEvent = void 0;
class QuestionCommentCreatedEvent {
    ocurredAt;
    questionComment;
    constructor(questionComment) {
        this.questionComment = questionComment;
        this.ocurredAt = new Date();
    }
    getAggregateId() {
        return this.questionComment.id;
    }
}
exports.QuestionCommentCreatedEvent = QuestionCommentCreatedEvent;
//# sourceMappingURL=question-comment-created-event.js.map