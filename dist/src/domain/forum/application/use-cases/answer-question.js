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
exports.AnswerQuestionUseCase = void 0;
const common_1 = require("@nestjs/common");
const either_1 = require("../../../../core/either");
const unique_entity_id_1 = require("../../../../core/entities/unique-entity-id");
const answer_attachment_1 = require("../../enterprise/entities/answer-attachment");
const answer_1 = require("../../enterprise/entities/answer");
const answers_repository_1 = require("../repositories/answers-repository");
let AnswerQuestionUseCase = class AnswerQuestionUseCase {
    answerRepository;
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }
    async execute({ instructorId, questionId, content, attachmentsIds, }) {
        const answer = answer_1.Answer.create({
            content,
            authorId: new unique_entity_id_1.UniqueEntityID(instructorId),
            questionId: new unique_entity_id_1.UniqueEntityID(questionId),
        });
        answer.attachments = attachmentsIds.map((attachmentId) => answer_attachment_1.AnswerAttachment.create({
            attachmentId: new unique_entity_id_1.UniqueEntityID(attachmentId),
            answerId: answer.id,
        }));
        await this.answerRepository.create(answer);
        return (0, either_1.right)({
            answer,
        });
    }
};
exports.AnswerQuestionUseCase = AnswerQuestionUseCase;
exports.AnswerQuestionUseCase = AnswerQuestionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answers_repository_1.AnswerRepository])
], AnswerQuestionUseCase);
//# sourceMappingURL=answer-question.js.map