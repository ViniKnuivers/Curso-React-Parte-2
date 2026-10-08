import { PrismaService } from "../prisma.service";
import type { AnswerRepository } from "../../../../domain/forum/application/repositories/answers-repository";
import type { PaginationParams } from "../../../../core/repositories/pagination-params";
import type { Answer } from "../../../../domain/forum/enterprise/entities/answer";
import type { AnswerDetails } from "../../../../domain/forum/enterprise/entities/value-objects/answer-details";
export declare class PrismaAnswersRepository implements AnswerRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<Answer | null>;
    findManyByQuestionIdWithAuthor(questionId: string, { page }: PaginationParams): Promise<AnswerDetails[]>;
    create(answer: Answer): Promise<void>;
    save(answer: Answer): Promise<void>;
    delete(answer: Answer): Promise<void>;
    private syncAttachments;
}
