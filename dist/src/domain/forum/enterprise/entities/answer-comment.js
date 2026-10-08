"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerComments = void 0;
const answer_comment_created_event_1 = require("../events/answer-comment-created-event");
const comment_1 = require("./comment");
class AnswerComments extends comment_1.Comment {
    get answerId() {
        return this.props.answerId;
    }
    static create(props, id) {
        const isNewAnswerComment = !id;
        const answerComments = new AnswerComments({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }, id);
        if (isNewAnswerComment) {
            answerComments.addDomainEvent(new answer_comment_created_event_1.AnswerCommentCreatedEvent(answerComments));
        }
        return answerComments;
    }
}
exports.AnswerComments = AnswerComments;
//# sourceMappingURL=answer-comment.js.map