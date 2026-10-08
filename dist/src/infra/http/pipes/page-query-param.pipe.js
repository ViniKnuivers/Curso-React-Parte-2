"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQueryParamPipe = void 0;
const zod_1 = require("zod");
const zod_validation_pipe_1 = require("./zod-validation-pipe");
const pageQueryParamSchema = zod_1.z
    .string()
    .optional()
    .default('1')
    .transform(Number)
    .pipe(zod_1.z.number().min(1));
exports.pageQueryParamPipe = new zod_validation_pipe_1.ZodValidationPipe(pageQueryParamSchema);
//# sourceMappingURL=page-query-param.pipe.js.map