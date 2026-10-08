"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_path_1 = require("node:path");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
const domain_exception_filter_1 = require("./http/filters/domain-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: false,
    });
    app.useGlobalFilters(new domain_exception_filter_1.DomainExceptionFilter());
    app.useStaticAssets((0, node_path_1.join)(process.cwd(), 'uploads'), { prefix: '/uploads' });
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('PORT', { infer: true }));
}
bootstrap();
//# sourceMappingURL=main.js.map