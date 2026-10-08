"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const uploader_1 = require("../../domain/forum/application/storage/uploader");
const fs_uploader_1 = require("./fs-uploader");
const r2_storage_1 = require("./r2-storage");
let StorageModule = class StorageModule {
};
exports.StorageModule = StorageModule;
exports.StorageModule = StorageModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: uploader_1.Uploader,
                useFactory: (config) => {
                    const hasR2Credentials = Boolean(config.get('CLOUDFLARE_ACCOUNT_ID', { infer: true }));
                    return hasR2Credentials ? new r2_storage_1.R2Storage(config) : new fs_uploader_1.FsUploader();
                },
                inject: [config_1.ConfigService],
            },
        ],
        exports: [uploader_1.Uploader],
    })
], StorageModule);
//# sourceMappingURL=storage.module.js.map