"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsUploader = void 0;
const node_crypto_1 = require("node:crypto");
const node_path_1 = require("node:path");
const promises_1 = require("node:fs/promises");
const common_1 = require("@nestjs/common");
const UPLOADS_DIR = (0, node_path_1.resolve)(process.cwd(), 'uploads');
let FsUploader = class FsUploader {
    async upload({ fileName, body }) {
        await (0, promises_1.mkdir)(UPLOADS_DIR, { recursive: true });
        const uniqueFileName = `${(0, node_crypto_1.randomUUID)()}${(0, node_path_1.extname)(fileName)}`;
        await (0, promises_1.writeFile)((0, node_path_1.resolve)(UPLOADS_DIR, uniqueFileName), body);
        return { url: `/uploads/${uniqueFileName}` };
    }
};
exports.FsUploader = FsUploader;
exports.FsUploader = FsUploader = __decorate([
    (0, common_1.Injectable)()
], FsUploader);
//# sourceMappingURL=fs-uploader.js.map