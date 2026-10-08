"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slug = void 0;
class Slug {
    value;
    constructor(text) {
        this.value = text;
    }
    static createFromText(text) {
        const slugtext = text
            .normalize('NFKD')
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/_/g, '-')
            .replace(/--+/g, '-')
            .replace(/-$/g, '');
        return new Slug(slugtext);
    }
}
exports.Slug = Slug;
//# sourceMappingURL=slug.js.map