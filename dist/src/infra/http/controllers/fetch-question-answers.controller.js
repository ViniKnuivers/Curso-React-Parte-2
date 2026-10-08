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
exports.FetchQuestionAnswersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const answer_details_presenter_1 = require("../presenters/answer-details-presenter");
const page_query_param_pipe_1 = require("../pipes/page-query-param.pipe");
const fetch_question_answers_1 = require("../../../domain/forum/application/use-cases/fetch-question-answers");
let FetchQuestionAnswersController = class FetchQuestionAnswersController {
    fetchQuestionAnswers;
    constructor(fetchQuestionAnswers) {
        this.fetchQuestionAnswers = fetchQuestionAnswers;
    }
    async handle(questionId, page) {
        const result = await this.fetchQuestionAnswers.execute({ questionId, page });
        if (result.isLeft()) {
            throw result.value;
        }
        return { answers: result.value.answers.map(answer_details_presenter_1.AnswerDetailsPresenter.toHTTP) };
    }
};
exports.FetchQuestionAnswersController = FetchQuestionAnswersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('questionId')),
    __param(1, (0, common_1.Query)('page', page_query_param_pipe_1.pageQueryParamPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], FetchQuestionAnswersController.prototype, "handle", null);
exports.FetchQuestionAnswersController = FetchQuestionAnswersController = __decorate([
    (0, common_1.Controller)('/questions/:questionId/answers'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [fetch_question_answers_1.FetchQuestionAnswersUseCase])
], FetchQuestionAnswersController);
//# sourceMappingURL=fetch-question-answers.controller.js.map