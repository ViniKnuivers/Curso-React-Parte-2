"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DomainExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const not_allowed_error_1 = require("../../../core/errors/not-allowed-error");
const resource_not_found_error_1 = require("../../../core/errors/resource-not-found-error");
const student_already_exists_error_1 = require("../../../domain/forum/application/use-cases/errors/student-already-exists-error");
const wrong_credentials_error_1 = require("../../../domain/forum/application/use-cases/errors/wrong-credentials-error");
const invalid_attachment_type_error_1 = require("../../../domain/forum/application/use-cases/errors/invalid-attachment-type-error");
let DomainExceptionFilter = DomainExceptionFilter_1 = class DomainExceptionFilter {
    catch(error, host) {
        const status = DomainExceptionFilter_1.statusFor(error);
        const response = host.switchToHttp().getResponse();
        response.status(status).json({
            statusCode: status,
            message: error.message,
        });
    }
    static statusFor(error) {
        if (error instanceof not_allowed_error_1.NotAllowedError)
            return 403;
        if (error instanceof student_already_exists_error_1.StudentAlreadyExistsError)
            return 409;
        if (error instanceof wrong_credentials_error_1.WrongCredentialsError)
            return 401;
        if (error instanceof invalid_attachment_type_error_1.InvalidAttachmentTypeError)
            return 400;
        return 404;
    }
};
exports.DomainExceptionFilter = DomainExceptionFilter;
exports.DomainExceptionFilter = DomainExceptionFilter = DomainExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(not_allowed_error_1.NotAllowedError, resource_not_found_error_1.ResourceNotFoundError, student_already_exists_error_1.StudentAlreadyExistsError, wrong_credentials_error_1.WrongCredentialsError, invalid_attachment_type_error_1.InvalidAttachmentTypeError)
], DomainExceptionFilter);
//# sourceMappingURL=domain-exception.filter.js.map