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
exports.OnQuestionCommentCreated = void 0;
const common_1 = require("@nestjs/common");
const domain_events_1 = require("../../../../core/events/domain-events");
const question_comment_created_event_1 = require("../../../forum/enterprise/events/question-comment-created-event");
const question_repository_1 = require("../../../forum/application/repositories/question-repository");
const send_notification_1 = require("../use-cases/send-notification");
let OnQuestionCommentCreated = class OnQuestionCommentCreated {
    questionRepository;
    sendNotification;
    constructor(questionRepository, sendNotification) {
        this.questionRepository = questionRepository;
        this.sendNotification = sendNotification;
        this.setupSubscriptions();
    }
    setupSubscriptions() {
        domain_events_1.DomainEvents.register(this.sendQuestionCommentNotification.bind(this), question_comment_created_event_1.QuestionCommentCreatedEvent.name);
    }
    async sendQuestionCommentNotification(event) {
        const { questionComment } = event;
        const question = await this.questionRepository.findById(questionComment.questionId.toString());
        if (question && !question.authorId.equals(questionComment.authorId)) {
            await this.sendNotification.execute({
                recipientId: question.authorId.toString(),
                title: 'Novo comentário em sua pergunta',
                content: questionComment.content.substring(0, 120),
            });
        }
    }
};
exports.OnQuestionCommentCreated = OnQuestionCommentCreated;
exports.OnQuestionCommentCreated = OnQuestionCommentCreated = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [question_repository_1.QuestionRepository,
        send_notification_1.SendNotificationUseCase])
], OnQuestionCommentCreated);
//# sourceMappingURL=on-question-comment-created.js.map