import { type Either } from "../../../../core/either";
import type { CommentWithAuthor } from "../../enterprise/entities/value-objects/comment-with-author";
import { QuestionCommentsRepository } from "../repositories/question-comments-repository";
interface FetchQuestionCommentsRequest {
    questionId: string;
    page: number;
}
type FetchQuestionCommentsResponse = Either<null, {
    questionComments: CommentWithAuthor[];
}>;
export declare class FetchQuestionComments {
    private questionCommentsRepository;
    constructor(questionCommentsRepository: QuestionCommentsRepository);
    execute({ questionId, page, }: FetchQuestionCommentsRequest): Promise<FetchQuestionCommentsResponse>;
}
export {};
