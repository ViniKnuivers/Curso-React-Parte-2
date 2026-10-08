"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const question_repository_1 = require("../../domain/forum/application/repositories/question-repository");
const answers_repository_1 = require("../../domain/forum/application/repositories/answers-repository");
const question_comments_repository_1 = require("../../domain/forum/application/repositories/question-comments-repository");
const answer_comments_repository_1 = require("../../domain/forum/application/repositories/answer-comments-repository");
const notifications_repository_1 = require("../../domain/notification/application/repositories/notifications-repository");
const students_repository_1 = require("../../domain/forum/application/repositories/students-repository");
const attachments_repository_1 = require("../../domain/forum/application/repositories/attachments-repository");
const prisma_questions_repository_1 = require("./prisma/prisma-repositories/prisma-questions-repository");
const prisma_answers_repository_1 = require("./prisma/prisma-repositories/prisma-answers-repository");
const prisma_question_comments_repository_1 = require("./prisma/prisma-repositories/prisma-question-comments-repository");
const prisma_answer_comments_repository_1 = require("./prisma/prisma-repositories/prisma-answer-comments-repository");
const prisma_notifications_repository_1 = require("./prisma/prisma-repositories/prisma-notifications-repository");
const prisma_students_repository_1 = require("./prisma/prisma-repositories/prisma-students-repository");
const prisma_attachments_repository_1 = require("./prisma/prisma-repositories/prisma-attachments-repository");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            { provide: question_repository_1.QuestionRepository, useClass: prisma_questions_repository_1.PrismaQuestionsRepository },
            { provide: answers_repository_1.AnswerRepository, useClass: prisma_answers_repository_1.PrismaAnswersRepository },
            {
                provide: question_comments_repository_1.QuestionCommentsRepository,
                useClass: prisma_question_comments_repository_1.PrismaQuestionCommentsRepository,
            },
            {
                provide: answer_comments_repository_1.AnswerCommentsRepository,
                useClass: prisma_answer_comments_repository_1.PrismaAnswerCommentsRepository,
            },
            {
                provide: notifications_repository_1.NotificationsRepository,
                useClass: prisma_notifications_repository_1.PrismaNotificationsRepository,
            },
            { provide: students_repository_1.StudentsRepository, useClass: prisma_students_repository_1.PrismaStudentsRepository },
            { provide: attachments_repository_1.AttachmentsRepository, useClass: prisma_attachments_repository_1.PrismaAttachmentsRepository },
        ],
        exports: [
            prisma_service_1.PrismaService,
            question_repository_1.QuestionRepository,
            answers_repository_1.AnswerRepository,
            question_comments_repository_1.QuestionCommentsRepository,
            answer_comments_repository_1.AnswerCommentsRepository,
            notifications_repository_1.NotificationsRepository,
            students_repository_1.StudentsRepository,
            attachments_repository_1.AttachmentsRepository,
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map