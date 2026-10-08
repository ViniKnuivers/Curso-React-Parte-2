"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentPresenter = void 0;
class AttachmentPresenter {
    static toHTTP(attachment) {
        return {
            id: attachment.id.toString(),
            title: attachment.title,
            url: attachment.link,
        };
    }
}
exports.AttachmentPresenter = AttachmentPresenter;
//# sourceMappingURL=attachment-presenter.js.map