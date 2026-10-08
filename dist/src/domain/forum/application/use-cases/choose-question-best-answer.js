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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseQuestionBestAnswerUseCase = void 0;
const common_1 = require("@nestjs/common");
const either_1 = require("../../../../core/either");
const answers_repository_1 = require("../repositories/answers-repository");
const question_repository_1 = require("../repositories/question-repository");
const not_allowed_error_1 = require("../../../../core/errors/not-allowed-error");
const resource_not_found_error_1 = require("../../../../core/errors/resource-not-found-error");
let ChooseQuestionBestAnswerUseCase = class ChooseQuestionBestAnswerUseCase {
    answerRepository;
    questionRepository;
    constructor(answerRepository, questionRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
    }
    async execute({ answerId, authorId, }) {
        const answer = await this.answerRepository.findById(answerId);
        if (!answer) {
            return (0, either_1.left)(new resource_not_found_error_1.ResourceNotFoundError());
        }
        const question = await this.questionRepository.findById(answer.questionId.toString());
        if (!question) {
            return (0, either_1.left)(new resource_not_found_error_1.ResourceNotFoundError());
        }
        if (authorId !== question.authorId.toString()) {
            return (0, either_1.left)(new not_allowed_error_1.NotAllowedError());
        }
        question.bestAnswerId = answer.id;
        await this.questionRepository.save(question);
        return (0, either_1.right)({
            question,
        });
    }
};
exports.ChooseQuestionBestAnswerUseCase = ChooseQuestionBestAnswerUseCase;
exports.ChooseQuestionBestAnswerUseCase = ChooseQuestionBestAnswerUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answers_repository_1.AnswerRepository,
        question_repository_1.QuestionRepository])
], ChooseQuestionBestAnswerUseCase);
//# sourceMappingURL=choose-question-best-answer.js.map