"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionComments = void 0;
const aggregate_root_1 = require("../../../../core/entities/aggregate-root");
const question_comment_created_event_1 = require("../events/question-comment-created-event");
class QuestionComments extends aggregate_root_1.AggregateRoot {
    get questionId() {
        return this.props.questionId;
    }
    get content() {
        return this.props.content;
    }
    get authorId() {
        return this.props.authorId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    touch() {
        this.props.updatedAt = new Date();
    }
    set content(content) {
        this.props.content = content;
        this.touch();
    }
    static create(props, id) {
        const isNewQuestionComment = !id;
        const questionComments = new QuestionComments({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }, id);
        if (isNewQuestionComment) {
            questionComments.addDomainEvent(new question_comment_created_event_1.QuestionCommentCreatedEvent(questionComments));
        }
        return questionComments;
    }
}
exports.QuestionComments = QuestionComments;
//# sourceMappingURL=question-comment.js.map