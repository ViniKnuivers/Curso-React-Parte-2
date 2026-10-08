"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const aggregate_root_1 = require("../../../../core/entities/aggregate-root");
class Comment extends aggregate_root_1.AggregateRoot {
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
}
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map