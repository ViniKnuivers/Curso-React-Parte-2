export declare abstract class HashComparator {
    abstract compare(plain: string, hash: string): Promise<boolean>;
}
