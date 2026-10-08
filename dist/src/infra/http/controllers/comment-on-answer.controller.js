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
exports.CommentOnAnswerController = void 0;
const common_1 = require("@nestjs/common");
const zod_1 = require("zod");
const current_user_decorator_1 = require("../../auth/current-user-decorator");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const zod_validation_pipe_1 = require("../pipes/zod-validation-pipe");
const answer_comment_presenter_1 = require("../presenters/answer-comment-presenter");
const comment_on_answer_1 = require("../../../domain/forum/application/use-cases/comment-on-answer");
const commentOnAnswerBodySchema = zod_1.z.object({
    content: zod_1.z.string(),
});
const bodyValidationPipe = new zod_validation_pipe_1.ZodValidationPipe(commentOnAnswerBodySchema);
let CommentOnAnswerController = class CommentOnAnswerController {
    commentOnAnswer;
    constructor(commentOnAnswer) {
        this.commentOnAnswer = commentOnAnswer;
    }
    async handle(body, user, answerId) {
        const result = await this.commentOnAnswer.execute({
            authorId: user.sub,
            answerId,
            content: body.content,
        });
        if (result.isLeft()) {
            throw result.value;
        }
        return {
            answerComment: answer_comment_presenter_1.AnswerCommentPresenter.toHTTP(result.value.answerComment),
        };
    }
};
exports.CommentOnAnswerController = CommentOnAnswerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(bodyValidationPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Param)('answerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], CommentOnAnswerController.prototype, "handle", null);
exports.CommentOnAnswerController = CommentOnAnswerController = __decorate([
    (0, common_1.Controller)('/answers/:answerId/comments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [comment_on_answer_1.CommentOnAnswerUseCase])
], CommentOnAnswerController);
//# sourceMappingURL=comment-on-answer.controller.js.map