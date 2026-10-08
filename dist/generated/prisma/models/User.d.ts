import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    questions?: Prisma.QuestionListRelationFilter;
    answers?: Prisma.AnswerListRelationFilter;
    questionComments?: Prisma.QuestionCommentListRelationFilter;
    answerComments?: Prisma.AnswerCommentListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    questions?: Prisma.QuestionOrderByRelationAggregateInput;
    answers?: Prisma.AnswerOrderByRelationAggregateInput;
    questionComments?: Prisma.QuestionCommentOrderByRelationAggregateInput;
    answerComments?: Prisma.AnswerCommentOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    questions?: Prisma.QuestionListRelationFilter;
    answers?: Prisma.AnswerListRelationFilter;
    questionComments?: Prisma.QuestionCommentListRelationFilter;
    answerComments?: Prisma.AnswerCommentListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.UserUpsertWithoutQuestionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutQuestionsInput, Prisma.UserUpdateWithoutQuestionsInput>, Prisma.UserUncheckedUpdateWithoutQuestionsInput>;
};
export type UserCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.UserUpsertWithoutAnswersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAnswersInput, Prisma.UserUpdateWithoutAnswersInput>, Prisma.UserUncheckedUpdateWithoutAnswersInput>;
};
export type UserCreateNestedOneWithoutQuestionCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionCommentsInput, Prisma.UserUncheckedCreateWithoutQuestionCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutQuestionCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutQuestionCommentsInput, Prisma.UserUncheckedCreateWithoutQuestionCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutQuestionCommentsInput;
    upsert?: Prisma.UserUpsertWithoutQuestionCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutQuestionCommentsInput, Prisma.UserUpdateWithoutQuestionCommentsInput>, Prisma.UserUncheckedUpdateWithoutQuestionCommentsInput>;
};
export type UserCreateNestedOneWithoutAnswerCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswerCommentsInput, Prisma.UserUncheckedCreateWithoutAnswerCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswerCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAnswerCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnswerCommentsInput, Prisma.UserUncheckedCreateWithoutAnswerCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnswerCommentsInput;
    upsert?: Prisma.UserUpsertWithoutAnswerCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAnswerCommentsInput, Prisma.UserUpdateWithoutAnswerCommentsInput>, Prisma.UserUncheckedUpdateWithoutAnswerCommentsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    answers?: Prisma.AnswerCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
};
export type UserUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutQuestionsInput, Prisma.UserUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionsInput, Prisma.UserUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutQuestionsInput, Prisma.UserUncheckedUpdateWithoutQuestionsInput>;
};
export type UserUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.AnswerUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutAnswersInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutAnswersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
};
export type UserUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAnswersInput, Prisma.UserUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswersInput, Prisma.UserUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAnswersInput, Prisma.UserUncheckedUpdateWithoutAnswersInput>;
};
export type UserUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutQuestionCommentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutQuestionCommentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutQuestionCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionCommentsInput, Prisma.UserUncheckedCreateWithoutQuestionCommentsInput>;
};
export type UserUpsertWithoutQuestionCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutQuestionCommentsInput, Prisma.UserUncheckedUpdateWithoutQuestionCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutQuestionCommentsInput, Prisma.UserUncheckedCreateWithoutQuestionCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutQuestionCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutQuestionCommentsInput, Prisma.UserUncheckedUpdateWithoutQuestionCommentsInput>;
};
export type UserUpdateWithoutQuestionCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutQuestionCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutAnswerCommentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
};
export type UserUncheckedCreateWithoutAnswerCommentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutAuthorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
};
export type UserCreateOrConnectWithoutAnswerCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswerCommentsInput, Prisma.UserUncheckedCreateWithoutAnswerCommentsInput>;
};
export type UserUpsertWithoutAnswerCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAnswerCommentsInput, Prisma.UserUncheckedUpdateWithoutAnswerCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnswerCommentsInput, Prisma.UserUncheckedCreateWithoutAnswerCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAnswerCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAnswerCommentsInput, Prisma.UserUncheckedUpdateWithoutAnswerCommentsInput>;
};
export type UserUpdateWithoutAnswerCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
};
export type UserUncheckedUpdateWithoutAnswerCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentCreateNestedManyWithoutAuthorInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    questionComments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutAuthorInput;
    answerComments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAuthorInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUpdateManyWithoutAuthorNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    questionComments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutAuthorNestedInput;
    answerComments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type UserCountOutputType = {
    questions: number;
    answers: number;
    questionComments: number;
    answerComments: number;
    notifications: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs;
    answers?: boolean | UserCountOutputTypeCountAnswersArgs;
    questionComments?: boolean | UserCountOutputTypeCountQuestionCommentsArgs;
    answerComments?: boolean | UserCountOutputTypeCountAnswerCommentsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
};
export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
};
export type UserCountOutputTypeCountQuestionCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionCommentWhereInput;
};
export type UserCountOutputTypeCountAnswerCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerCommentWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    questions?: boolean | Prisma.User$questionsArgs<ExtArgs>;
    answers?: boolean | Prisma.User$answersArgs<ExtArgs>;
    questionComments?: boolean | Prisma.User$questionCommentsArgs<ExtArgs>;
    answerComments?: boolean | Prisma.User$answerCommentsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | Prisma.User$questionsArgs<ExtArgs>;
    answers?: boolean | Prisma.User$answersArgs<ExtArgs>;
    questionComments?: boolean | Prisma.User$questionCommentsArgs<ExtArgs>;
    answerComments?: boolean | Prisma.User$answerCommentsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        questions: Prisma.$QuestionPayload<ExtArgs>[];
        answers: Prisma.$AnswerPayload<ExtArgs>[];
        questionComments: Prisma.$QuestionCommentPayload<ExtArgs>[];
        answerComments: Prisma.$AnswerCommentPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    questions<T extends Prisma.User$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    answers<T extends Prisma.User$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    questionComments<T extends Prisma.User$questionCommentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$questionCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    answerComments<T extends Prisma.User$answerCommentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$answerCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
export type User$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput | Prisma.AnswerOrderByWithRelationInput[];
    cursor?: Prisma.AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnswerScalarFieldEnum | Prisma.AnswerScalarFieldEnum[];
};
export type User$questionCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    where?: Prisma.QuestionCommentWhereInput;
    orderBy?: Prisma.QuestionCommentOrderByWithRelationInput | Prisma.QuestionCommentOrderByWithRelationInput[];
    cursor?: Prisma.QuestionCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionCommentScalarFieldEnum | Prisma.QuestionCommentScalarFieldEnum[];
};
export type User$answerCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    where?: Prisma.AnswerCommentWhereInput;
    orderBy?: Prisma.AnswerCommentOrderByWithRelationInput | Prisma.AnswerCommentOrderByWithRelationInput[];
    cursor?: Prisma.AnswerCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnswerCommentScalarFieldEnum | Prisma.AnswerCommentScalarFieldEnum[];
};
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
