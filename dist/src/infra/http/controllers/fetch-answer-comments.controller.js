"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAnswerCommentsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const comment_with_author_presenter_1 = require("../presenters/comment-with-author-presenter");
const page_query_param_pipe_1 = require("../pipes/page-query-param.pipe");
const fetch_answer_comments_1 = require("../../../domain/forum/application/use-cases/fetch-answer-comments");
let FetchAnswerCommentsController = class FetchAnswerCommentsController {
    fetchAnswerComments;
    constructor(fetchAnswerComments) {
        this.fetchAnswerComments = fetchAnswerComments;
    }
    async handle(answerId, page) {
        const result = await this.fetchAnswerComments.execute({ answerId, page });
        if (result.isLeft()) {
            throw result.value;
        }
        return {
            comments: result.value.answerComments.map(comment_with_author_presenter_1.CommentWithAuthorPresenter.toHTTP),
        };
    }
};
exports.FetchAnswerCommentsController = FetchAnswerCommentsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('answerId')),
    __param(1, (0, common_1.Query)('page', page_query_param_pipe_1.pageQueryParamPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], FetchAnswerCommentsController.prototype, "handle", null);
exports.FetchAnswerCommentsController = FetchAnswerCommentsController = __decorate([
    (0, common_1.Controller)('/answers/:answerId/comments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [fetch_answer_comments_1.FetchAnswerComments])
], FetchAnswerCommentsController);
//# sourceMappingURL=fetch-answer-comments.controller.js.map