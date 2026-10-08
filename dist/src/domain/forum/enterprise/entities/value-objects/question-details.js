"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionDetails = void 0;
const value_object_1 = require("../../../../../core/entities/value-object");
class QuestionDetails extends value_object_1.ValueObject {
    get questionId() {
        return this.props.questionId;
    }
    get authorId() {
        return this.props.authorId;
    }
    get author() {
        return this.props.author;
    }
    get title() {
        return this.props.title;
    }
    get slug() {
        return this.props.slug;
    }
    get content() {
        return this.props.content;
    }
    get bestAnswerId() {
        return this.props.bestAnswerId;
    }
    get attachments() {
        return this.props.attachments;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    static create(props) {
        return new QuestionDetails(props);
    }
}
exports.QuestionDetails = QuestionDetails;
//# sourceMappingURL=question-details.js.map