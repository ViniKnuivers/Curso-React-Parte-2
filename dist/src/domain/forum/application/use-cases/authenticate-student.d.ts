import { type Either } from "../../../../core/either";
import { Student } from "../../enterprise/entities/student";
import { StudentsRepository } from "../repositories/students-repository";
import { HashComparator } from "../cryptography/hash-comparator";
import { WrongCredentialsError } from "./errors/wrong-credentials-error";
interface AuthenticateStudentUseCaseRequest {
    email: string;
    password: string;
}
type AuthenticateStudentUseCaseResponse = Either<WrongCredentialsError, {
    student: Student;
}>;
export declare class AuthenticateStudentUseCase {
    private studentsRepository;
    private hashComparator;
    constructor(studentsRepository: StudentsRepository, hashComparator: HashComparator);
    execute({ email, password, }: AuthenticateStudentUseCaseRequest): Promise<AuthenticateStudentUseCaseResponse>;
}
export {};
