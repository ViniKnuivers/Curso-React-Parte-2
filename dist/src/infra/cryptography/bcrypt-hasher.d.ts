import { HashGenerator } from "../../domain/forum/application/cryptography/hash-generator";
import { HashComparator } from "../../domain/forum/application/cryptography/hash-comparator";
export declare class BcryptHasher implements HashGenerator, HashComparator {
    hash(plain: string): Promise<string>;
    compare(plain: string, hashed: string): Promise<boolean>;
}
