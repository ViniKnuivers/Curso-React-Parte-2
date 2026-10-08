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
exports.ChooseQuestionBestAnswerController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../auth/current-user-decorator");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const choose_question_best_answer_1 = require("../../../domain/forum/application/use-cases/choose-question-best-answer");
let ChooseQuestionBestAnswerController = class ChooseQuestionBestAnswerController {
    chooseQuestionBestAnswer;
    constructor(chooseQuestionBestAnswer) {
        this.chooseQuestionBestAnswer = chooseQuestionBestAnswer;
    }
    async handle(user, answerId) {
        const result = await this.chooseQuestionBestAnswer.execute({
            authorId: user.sub,
            answerId,
        });
        if (result.isLeft()) {
            throw result.value;
        }
    }
};
exports.ChooseQuestionBestAnswerController = ChooseQuestionBestAnswerController;
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('answerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChooseQuestionBestAnswerController.prototype, "handle", null);
exports.ChooseQuestionBestAnswerController = ChooseQuestionBestAnswerController = __decorate([
    (0, common_1.Controller)('/answers/:answerId/choose-as-best'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [choose_question_best_answer_1.ChooseQuestionBestAnswerUseCase])
], ChooseQuestionBestAnswerController);
//# sourceMappingURL=choose-question-best-answer.controller.js.map