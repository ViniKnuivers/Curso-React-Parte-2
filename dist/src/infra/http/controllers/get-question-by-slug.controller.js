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
exports.GetQuestionBySlugController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const question_details_presenter_1 = require("../presenters/question-details-presenter");
const get_question_by_slug_1 = require("../../../domain/forum/application/use-cases/get-question-by-slug");
let GetQuestionBySlugController = class GetQuestionBySlugController {
    getQuestionBySlug;
    constructor(getQuestionBySlug) {
        this.getQuestionBySlug = getQuestionBySlug;
    }
    async handle(slug) {
        const result = await this.getQuestionBySlug.execute({ slug });
        if (result.isLeft()) {
            throw result.value;
        }
        return { question: question_details_presenter_1.QuestionDetailsPresenter.toHTTP(result.value.question) };
    }
};
exports.GetQuestionBySlugController = GetQuestionBySlugController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GetQuestionBySlugController.prototype, "handle", null);
exports.GetQuestionBySlugController = GetQuestionBySlugController = __decorate([
    (0, common_1.Controller)('/questions/:slug'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [get_question_by_slug_1.GetQuestionBySlugUseCase])
], GetQuestionBySlugController);
//# sourceMappingURL=get-question-by-slug.controller.js.map