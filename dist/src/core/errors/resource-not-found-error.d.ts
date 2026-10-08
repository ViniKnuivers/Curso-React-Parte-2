import type { UseCaseError } from "./use-case-error";
export declare class ResourceNotFoundError extends Error implements UseCaseError {
    constructor();
}
