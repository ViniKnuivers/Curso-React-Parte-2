import type { User as PrismaUser, Prisma } from '../../../../../generated/prisma/client';
import { Student } from "../../../../domain/forum/enterprise/entities/student";
export declare class PrismaStudentMapper {
    static toDomain(raw: PrismaUser): Student;
    static toPrisma(student: Student): Prisma.UserUncheckedCreateInput;
}
