"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const cryptography_module_1 = require("../cryptography/cryptography.module");
const storage_module_1 = require("../storage/storage.module");
const controllers_1 = require("./controllers");
const use_cases_1 = require("../../domain/forum/application/use-cases");
const use_cases_2 = require("../../domain/notification/application/use-cases");
let HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule;
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, cryptography_module_1.CryptographyModule, storage_module_1.StorageModule],
        controllers: [
            controllers_1.AnswerQuestionController,
            controllers_1.AuthenticateController,
            controllers_1.ChooseQuestionBestAnswerController,
            controllers_1.CommentOnAnswerController,
            controllers_1.CommentOnQuestionController,
            controllers_1.CreateAccountController,
            controllers_1.CreateQuestionController,
            controllers_1.DeleteAnswerCommentController,
            controllers_1.DeleteAnswerController,
            controllers_1.DeleteQuestionCommentController,
            controllers_1.DeleteQuestionController,
            controllers_1.EditAnswerController,
            controllers_1.EditQuestionController,
            controllers_1.FetchAnswerCommentsController,
            controllers_1.FetchQuestionAnswersController,
            controllers_1.FetchQuestionCommentsController,
            controllers_1.FetchRecentQuestionsController,
            controllers_1.GetQuestionBySlugController,
            controllers_1.ReadNotificationController,
            controllers_1.UploadAttachmentController,
        ],
        providers: [
            use_cases_1.AnswerQuestionUseCase,
            use_cases_1.AuthenticateStudentUseCase,
            use_cases_1.ChooseQuestionBestAnswerUseCase,
            use_cases_1.CommentOnAnswerUseCase,
            use_cases_1.CommentOnQuestionUseCase,
            use_cases_1.CreateQuestionUseCase,
            use_cases_1.DeleteAnswerCommentUseCase,
            use_cases_1.DeleteAnswerUseCase,
            use_cases_1.DeleteQuestionCommentUseCase,
            use_cases_1.DeleteQuestionUseCase,
            use_cases_1.EditAnswerUseCase,
            use_cases_1.EditQuestionUseCase,
            use_cases_1.FetchAnswerComments,
            use_cases_1.FetchQuestionAnswersUseCase,
            use_cases_1.FetchQuestionComments,
            use_cases_1.FetchRecentQuestionsUseCase,
            use_cases_1.GetQuestionBySlugUseCase,
            use_cases_2.ReadNotificationUseCase,
            use_cases_1.RegisterStudentUseCase,
            use_cases_1.UploadAndCreateAttachmentUseCase,
        ],
    })
], HttpModule);
//# sourceMappingURL=http.module.js.map