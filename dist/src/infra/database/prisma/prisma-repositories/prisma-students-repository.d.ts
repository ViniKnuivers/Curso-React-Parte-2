import { PrismaService } from "../prisma.service";
import type { StudentsRepository } from "../../../../domain/forum/application/repositories/students-repository";
import type { Student } from "../../../../domain/forum/enterprise/entities/student";
export declare class PrismaStudentsRepository implements StudentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<Student | null>;
    create(student: Student): Promise<void>;
}
