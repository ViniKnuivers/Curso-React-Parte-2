import { PrismaService } from "../prisma.service";
import type { QuestionRepository } from "../../../../domain/forum/application/repositories/question-repository";
import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import type { Question } from "../../../../domain/forum/enterprise/entities/question";
import type { QuestionDetails } from "../../../../domain/forum/enterprise/entities/value-objects/question-details";
export declare class PrismaQuestionsRepository implements QuestionRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<Question | null>;
    findDetailsBySlug(slug: string): Promise<QuestionDetails | null>;
    findManyRecent({ page }: PaginationParams): Promise<Question[]>;
    create(question: Question): Promise<void>;
    save(question: Question): Promise<void>;
    delete(question: Question): Promise<void>;
    private syncAttachments;
}
