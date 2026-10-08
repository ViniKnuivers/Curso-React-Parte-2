"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const aggregate_root_1 = require("../../../../core/entities/aggregate-root");
const question_best_answer_chosen_event_1 = require("../events/question-best-answer-chosen-event");
const slug_1 = require("./value-objects/slug");
class Question extends aggregate_root_1.AggregateRoot {
    get title() {
        return this.props.title;
    }
    get content() {
        return this.props.content;
    }
    get authorId() {
        return this.props.authorId;
    }
    get bestAnswerId() {
        return this.props.bestAnswerId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    get slug() {
        return this.props.slug;
    }
    get attachments() {
        return this.props.attachments;
    }
    get excerpt() {
        return this.content.substring(0, 120).trimEnd().concat('...');
    }
    touch() {
        this.props.updatedAt = new Date();
    }
    set content(content) {
        this.props.content = content;
        this.touch();
    }
    set title(title) {
        this.props.title = title;
        this.props.slug = slug_1.Slug.createFromText(title);
        this.touch();
    }
    set bestAnswerId(bestAnswerId) {
        if (bestAnswerId &&
            bestAnswerId.toString() !== this.props.bestAnswerId?.toString()) {
            this.addDomainEvent(new question_best_answer_chosen_event_1.QuestionBestAnswerChosenEvent(this, bestAnswerId));
        }
        this.props.bestAnswerId = bestAnswerId;
        this.touch();
    }
    set attachments(attachments) {
        this.props.attachments = attachments;
        this.touch();
    }
    static create(props, id) {
        const question = new Question({
            ...props,
            slug: props.slug ?? slug_1.Slug.createFromText(props.title),
            attachments: props.attachments ?? [],
            createdAt: props.createdAt ?? new Date(),
        }, id);
        return question;
    }
}
exports.Question = Question;
//# sourceMappingURL=question.js.map