import { GetQuestionBySlugUseCase } from "../../../domain/forum/application/use-cases/get-question-by-slug";
export declare class GetQuestionBySlugController {
    private getQuestionBySlug;
    constructor(getQuestionBySlug: GetQuestionBySlugUseCase);
    handle(slug: string): Promise<{
        question: {
            id: string;
            title: string;
            slug: string;
            content: string;
            authorId: string;
            author: string;
            bestAnswerId: string | null;
            attachments: {
                id: string;
                title: string;
                url: string;
            }[];
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
}
