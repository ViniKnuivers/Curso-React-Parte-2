"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationPresenter = void 0;
class NotificationPresenter {
    static toHTTP(notification) {
        return {
            id: notification.id.toString(),
            recipientId: notification.recipientId.toString(),
            title: notification.title,
            content: notification.content,
            readAt: notification.readAt ?? null,
            createdAt: notification.createdAt,
        };
    }
}
exports.NotificationPresenter = NotificationPresenter;
//# sourceMappingURL=notification-presenter.js.map