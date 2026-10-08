export declare class UniqueEntityID {
    private value;
    toString(): string;
    toValue(): string;
    equals(id: UniqueEntityID): boolean;
    constructor(value?: string);
}
