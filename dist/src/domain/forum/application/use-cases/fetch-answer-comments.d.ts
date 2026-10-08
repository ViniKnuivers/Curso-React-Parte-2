import { type Either } from "../../../../core/either";
import type { CommentWithAuthor } from "../../enterprise/entities/value-objects/comment-with-author";
import { AnswerCommentsRepository } from "../repositories/answer-comments-repository";
interface FetchAnswerCommentsRequest {
    answerId: string;
    page: number;
}
type FetchAnswerCommentsResponse = Either<null, {
    answerComments: CommentWithAuthor[];
}>;
export declare class FetchAnswerComments {
    private answerCommentsRepository;
    constructor(answerCommentsRepository: AnswerCommentsRepository);
    execute({ answerId, page, }: FetchAnswerCommentsRequest): Promise<FetchAnswerCommentsResponse>;
}
export {};
