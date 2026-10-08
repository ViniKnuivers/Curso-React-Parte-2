"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerDetails = void 0;
const value_object_1 = require("../../../../../core/entities/value-object");
class AnswerDetails extends value_object_1.ValueObject {
    get answerId() {
        return this.props.answerId;
    }
    get questionId() {
        return this.props.questionId;
    }
    get authorId() {
        return this.props.authorId;
    }
    get author() {
        return this.props.author;
    }
    get content() {
        return this.props.content;
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
        return new AnswerDetails(props);
    }
}
exports.AnswerDetails = AnswerDetails;
//# sourceMappingURL=answer-details.js.map