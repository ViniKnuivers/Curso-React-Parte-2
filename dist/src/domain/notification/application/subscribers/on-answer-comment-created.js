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
exports.OnAnswerCommentCreated = void 0;
const common_1 = require("@nestjs/common");
const domain_events_1 = require("../../../../core/events/domain-events");
const answer_comment_created_event_1 = require("../../../forum/enterprise/events/answer-comment-created-event");
const answers_repository_1 = require("../../../forum/application/repositories/answers-repository");
const send_notification_1 = require("../use-cases/send-notification");
let OnAnswerCommentCreated = class OnAnswerCommentCreated {
    answerRepository;
    sendNotification;
    constructor(answerRepository, sendNotification) {
        this.answerRepository = answerRepository;
        this.sendNotification = sendNotification;
        this.setupSubscriptions();
    }
    setupSubscriptions() {
        domain_events_1.DomainEvents.register(this.sendAnswerCommentNotification.bind(this), answer_comment_created_event_1.AnswerCommentCreatedEvent.name);
    }
    async sendAnswerCommentNotification(event) {
        const { answerComment } = event;
        const answer = await this.answerRepository.findById(answerComment.answerId.toString());
        if (answer && !answer.authorId.equals(answerComment.authorId)) {
            await this.sendNotification.execute({
                recipientId: answer.authorId.toString(),
                title: 'Novo comentário em sua resposta',
                content: answerComment.content.substring(0, 120),
            });
        }
    }
};
exports.OnAnswerCommentCreated = OnAnswerCommentCreated;
exports.OnAnswerCommentCreated = OnAnswerCommentCreated = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [answers_repository_1.AnswerRepository,
        send_notification_1.SendNotificationUseCase])
], OnAnswerCommentCreated);
//# sourceMappingURL=on-answer-comment-created.js.map