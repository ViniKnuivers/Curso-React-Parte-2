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
exports.R2Storage = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
let R2Storage = class R2Storage {
    client;
    bucketName;
    publicUrl;
    constructor(config) {
        const accountId = config.get('CLOUDFLARE_ACCOUNT_ID', { infer: true });
        this.client = new client_s3_1.S3Client({
            endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
            region: 'auto',
            credentials: {
                accessKeyId: config.get('AWS_ACCESS_KEY_ID', { infer: true }) ?? '',
                secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY', { infer: true }) ?? '',
            },
        });
        this.bucketName = config.get('AWS_BUCKET_NAME', { infer: true }) ?? '';
        this.publicUrl = config.get('CLOUDFLARE_PUBLIC_URL', { infer: true }) ?? '';
    }
    async upload({ fileName, fileType, body, }) {
        const uniqueFileName = `${(0, node_crypto_1.randomUUID)()}-${fileName}`;
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: uniqueFileName,
            Body: body,
            ContentType: fileType,
        }));
        return { url: new URL(uniqueFileName, this.publicUrl).toString() };
    }
};
exports.R2Storage = R2Storage;
exports.R2Storage = R2Storage = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], R2Storage);
//# sourceMappingURL=r2-storage.js.map