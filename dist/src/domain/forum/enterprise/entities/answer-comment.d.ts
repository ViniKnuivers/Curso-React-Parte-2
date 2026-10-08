import type { UniqueEntityID } from "../../../../core/entities/unique-entity-id";
import type { Optional } from "../../../../core/types/optional";
import { Comment, type CommentProps } from "./comment";
export interface AnswerCommentsProps extends CommentProps {
    answerId: UniqueEntityID;
}
export declare class AnswerComments extends Comment<AnswerCommentsProps> {
    get answerId(): UniqueEntityID;
    static create(props: Optional<AnswerCommentsProps, 'createdAt'>, id?: UniqueEntityID): AnswerComments;
}
