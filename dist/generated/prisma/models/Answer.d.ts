import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$AnswerPayload>;
export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
};
export type AnswerMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    questionId: string | null;
};
export type AnswerMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    questionId: string | null;
};
export type AnswerCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    questionId: number;
    _all: number;
};
export type AnswerMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    questionId?: true;
};
export type AnswerMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    questionId?: true;
};
export type AnswerCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    questionId?: true;
    _all?: true;
};
export type AnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput | Prisma.AnswerOrderByWithRelationInput[];
    cursor?: Prisma.AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnswerCountAggregateInputType;
    _min?: AnswerMinAggregateInputType;
    _max?: AnswerMaxAggregateInputType;
};
export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnswer[P]> : Prisma.GetScalarType<T[P], AggregateAnswer[P]>;
};
export type AnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithAggregationInput | Prisma.AnswerOrderByWithAggregationInput[];
    by: Prisma.AnswerScalarFieldEnum[] | Prisma.AnswerScalarFieldEnum;
    having?: Prisma.AnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnswerCountAggregateInputType | true;
    _min?: AnswerMinAggregateInputType;
    _max?: AnswerMaxAggregateInputType;
};
export type AnswerGroupByOutputType = {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    authorId: string;
    questionId: string;
    _count: AnswerCountAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
};
export type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnswerGroupByOutputType[P]>;
}>>;
export type AnswerWhereInput = {
    AND?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    OR?: Prisma.AnswerWhereInput[];
    NOT?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    id?: Prisma.StringFilter<"Answer"> | string;
    content?: Prisma.StringFilter<"Answer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Answer"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Answer"> | Date | string | null;
    authorId?: Prisma.StringFilter<"Answer"> | string;
    questionId?: Prisma.StringFilter<"Answer"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    bestAnswerOf?: Prisma.XOR<Prisma.QuestionNullableScalarRelationFilter, Prisma.QuestionWhereInput> | null;
    comments?: Prisma.AnswerCommentListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
};
export type AnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    question?: Prisma.QuestionOrderByWithRelationInput;
    bestAnswerOf?: Prisma.QuestionOrderByWithRelationInput;
    comments?: Prisma.AnswerCommentOrderByRelationAggregateInput;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
};
export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    OR?: Prisma.AnswerWhereInput[];
    NOT?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    content?: Prisma.StringFilter<"Answer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Answer"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Answer"> | Date | string | null;
    authorId?: Prisma.StringFilter<"Answer"> | string;
    questionId?: Prisma.StringFilter<"Answer"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    bestAnswerOf?: Prisma.XOR<Prisma.QuestionNullableScalarRelationFilter, Prisma.QuestionWhereInput> | null;
    comments?: Prisma.AnswerCommentListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
}, "id">;
export type AnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    _count?: Prisma.AnswerCountOrderByAggregateInput;
    _max?: Prisma.AnswerMaxOrderByAggregateInput;
    _min?: Prisma.AnswerMinOrderByAggregateInput;
};
export type AnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnswerScalarWhereWithAggregatesInput | Prisma.AnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnswerScalarWhereWithAggregatesInput | Prisma.AnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Answer"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Answer"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Answer"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Answer"> | Date | string | null;
    authorId?: Prisma.StringWithAggregatesFilter<"Answer"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"Answer"> | string;
};
export type AnswerCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
    bestAnswerOf?: Prisma.QuestionCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutAnswerInput;
};
export type AnswerUncheckedCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
    bestAnswerOf?: Prisma.QuestionUncheckedCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutAnswerInput;
};
export type AnswerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    bestAnswerOf?: Prisma.QuestionUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerOf?: Prisma.QuestionUncheckedUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type AnswerCreateManyInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
};
export type AnswerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AnswerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerListRelationFilter = {
    every?: Prisma.AnswerWhereInput;
    some?: Prisma.AnswerWhereInput;
    none?: Prisma.AnswerWhereInput;
};
export type AnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnswerNullableScalarRelationFilter = {
    is?: Prisma.AnswerWhereInput | null;
    isNot?: Prisma.AnswerWhereInput | null;
};
export type AnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type AnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type AnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type AnswerScalarRelationFilter = {
    is?: Prisma.AnswerWhereInput;
    isNot?: Prisma.AnswerWhereInput;
};
export type AnswerCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutAuthorInput, Prisma.AnswerUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCreateWithoutAuthorInput[] | Prisma.AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutAuthorInput | Prisma.AnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.AnswerCreateManyAuthorInputEnvelope;
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
};
export type AnswerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutAuthorInput, Prisma.AnswerUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCreateWithoutAuthorInput[] | Prisma.AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutAuthorInput | Prisma.AnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.AnswerCreateManyAuthorInputEnvelope;
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
};
export type AnswerUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutAuthorInput, Prisma.AnswerUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCreateWithoutAuthorInput[] | Prisma.AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutAuthorInput | Prisma.AnswerCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.AnswerUpsertWithWhereUniqueWithoutAuthorInput | Prisma.AnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.AnswerCreateManyAuthorInputEnvelope;
    set?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    disconnect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    delete?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    update?: Prisma.AnswerUpdateWithWhereUniqueWithoutAuthorInput | Prisma.AnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.AnswerUpdateManyWithWhereWithoutAuthorInput | Prisma.AnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
};
export type AnswerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutAuthorInput, Prisma.AnswerUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCreateWithoutAuthorInput[] | Prisma.AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutAuthorInput | Prisma.AnswerCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.AnswerUpsertWithWhereUniqueWithoutAuthorInput | Prisma.AnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.AnswerCreateManyAuthorInputEnvelope;
    set?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    disconnect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    delete?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    update?: Prisma.AnswerUpdateWithWhereUniqueWithoutAuthorInput | Prisma.AnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.AnswerUpdateManyWithWhereWithoutAuthorInput | Prisma.AnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
};
export type AnswerCreateNestedOneWithoutBestAnswerOfInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutBestAnswerOfInput, Prisma.AnswerUncheckedCreateWithoutBestAnswerOfInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutBestAnswerOfInput;
    connect?: Prisma.AnswerWhereUniqueInput;
};
export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
};
export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
};
export type AnswerUpdateOneWithoutBestAnswerOfNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutBestAnswerOfInput, Prisma.AnswerUncheckedCreateWithoutBestAnswerOfInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutBestAnswerOfInput;
    upsert?: Prisma.AnswerUpsertWithoutBestAnswerOfInput;
    disconnect?: Prisma.AnswerWhereInput | boolean;
    delete?: Prisma.AnswerWhereInput | boolean;
    connect?: Prisma.AnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnswerUpdateToOneWithWhereWithoutBestAnswerOfInput, Prisma.AnswerUpdateWithoutBestAnswerOfInput>, Prisma.AnswerUncheckedUpdateWithoutBestAnswerOfInput>;
};
export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    disconnect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    delete?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    update?: Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
};
export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    disconnect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    delete?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    update?: Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
};
export type AnswerCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutCommentsInput, Prisma.AnswerUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.AnswerWhereUniqueInput;
};
export type AnswerUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutCommentsInput, Prisma.AnswerUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.AnswerUpsertWithoutCommentsInput;
    connect?: Prisma.AnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnswerUpdateToOneWithWhereWithoutCommentsInput, Prisma.AnswerUpdateWithoutCommentsInput>, Prisma.AnswerUncheckedUpdateWithoutCommentsInput>;
};
export type AnswerCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutAttachmentsInput, Prisma.AnswerUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.AnswerWhereUniqueInput;
};
export type AnswerUpdateOneWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutAttachmentsInput, Prisma.AnswerUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.AnswerUpsertWithoutAttachmentsInput;
    disconnect?: Prisma.AnswerWhereInput | boolean;
    delete?: Prisma.AnswerWhereInput | boolean;
    connect?: Prisma.AnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnswerUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.AnswerUpdateWithoutAttachmentsInput>, Prisma.AnswerUncheckedUpdateWithoutAttachmentsInput>;
};
export type AnswerCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
    bestAnswerOf?: Prisma.QuestionCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutAnswerInput;
};
export type AnswerUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    questionId: string;
    bestAnswerOf?: Prisma.QuestionUncheckedCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutAnswerInput;
};
export type AnswerCreateOrConnectWithoutAuthorInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutAuthorInput, Prisma.AnswerUncheckedCreateWithoutAuthorInput>;
};
export type AnswerCreateManyAuthorInputEnvelope = {
    data: Prisma.AnswerCreateManyAuthorInput | Prisma.AnswerCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type AnswerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.AnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutAuthorInput, Prisma.AnswerUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutAuthorInput, Prisma.AnswerUncheckedCreateWithoutAuthorInput>;
};
export type AnswerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.AnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutAuthorInput, Prisma.AnswerUncheckedUpdateWithoutAuthorInput>;
};
export type AnswerUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.AnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyWithoutAuthorInput>;
};
export type AnswerScalarWhereInput = {
    AND?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
    OR?: Prisma.AnswerScalarWhereInput[];
    NOT?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
    id?: Prisma.StringFilter<"Answer"> | string;
    content?: Prisma.StringFilter<"Answer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Answer"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Answer"> | Date | string | null;
    authorId?: Prisma.StringFilter<"Answer"> | string;
    questionId?: Prisma.StringFilter<"Answer"> | string;
};
export type AnswerCreateWithoutBestAnswerOfInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
    comments?: Prisma.AnswerCommentCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutAnswerInput;
};
export type AnswerUncheckedCreateWithoutBestAnswerOfInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
    comments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutAnswerInput;
};
export type AnswerCreateOrConnectWithoutBestAnswerOfInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutBestAnswerOfInput, Prisma.AnswerUncheckedCreateWithoutBestAnswerOfInput>;
};
export type AnswerCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    bestAnswerOf?: Prisma.QuestionCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutAnswerInput;
};
export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    bestAnswerOf?: Prisma.QuestionUncheckedCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutAnswerInput;
};
export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput>;
};
export type AnswerCreateManyQuestionInputEnvelope = {
    data: Prisma.AnswerCreateManyQuestionInput | Prisma.AnswerCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type AnswerUpsertWithoutBestAnswerOfInput = {
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutBestAnswerOfInput, Prisma.AnswerUncheckedUpdateWithoutBestAnswerOfInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutBestAnswerOfInput, Prisma.AnswerUncheckedCreateWithoutBestAnswerOfInput>;
    where?: Prisma.AnswerWhereInput;
};
export type AnswerUpdateToOneWithWhereWithoutBestAnswerOfInput = {
    where?: Prisma.AnswerWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutBestAnswerOfInput, Prisma.AnswerUncheckedUpdateWithoutBestAnswerOfInput>;
};
export type AnswerUpdateWithoutBestAnswerOfInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    comments?: Prisma.AnswerCommentUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateWithoutBestAnswerOfInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    comments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.AnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutQuestionInput, Prisma.AnswerUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput>;
};
export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.AnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutQuestionInput, Prisma.AnswerUncheckedUpdateWithoutQuestionInput>;
};
export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.AnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyWithoutQuestionInput>;
};
export type AnswerCreateWithoutCommentsInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
    bestAnswerOf?: Prisma.QuestionCreateNestedOneWithoutBestAnswerInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutAnswerInput;
};
export type AnswerUncheckedCreateWithoutCommentsInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
    bestAnswerOf?: Prisma.QuestionUncheckedCreateNestedOneWithoutBestAnswerInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutAnswerInput;
};
export type AnswerCreateOrConnectWithoutCommentsInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutCommentsInput, Prisma.AnswerUncheckedCreateWithoutCommentsInput>;
};
export type AnswerUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutCommentsInput, Prisma.AnswerUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutCommentsInput, Prisma.AnswerUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.AnswerWhereInput;
};
export type AnswerUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.AnswerWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutCommentsInput, Prisma.AnswerUncheckedUpdateWithoutCommentsInput>;
};
export type AnswerUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    bestAnswerOf?: Prisma.QuestionUpdateOneWithoutBestAnswerNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerOf?: Prisma.QuestionUncheckedUpdateOneWithoutBestAnswerNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type AnswerCreateWithoutAttachmentsInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswersInput;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
    bestAnswerOf?: Prisma.QuestionCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentCreateNestedManyWithoutAnswerInput;
};
export type AnswerUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
    bestAnswerOf?: Prisma.QuestionUncheckedCreateNestedOneWithoutBestAnswerInput;
    comments?: Prisma.AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput;
};
export type AnswerCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutAttachmentsInput, Prisma.AnswerUncheckedCreateWithoutAttachmentsInput>;
};
export type AnswerUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutAttachmentsInput, Prisma.AnswerUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutAttachmentsInput, Prisma.AnswerUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.AnswerWhereInput;
};
export type AnswerUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.AnswerWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutAttachmentsInput, Prisma.AnswerUncheckedUpdateWithoutAttachmentsInput>;
};
export type AnswerUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    bestAnswerOf?: Prisma.QuestionUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerOf?: Prisma.QuestionUncheckedUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type AnswerCreateManyAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    questionId: string;
};
export type AnswerUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    bestAnswerOf?: Prisma.QuestionUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerOf?: Prisma.QuestionUncheckedUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCreateManyQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
};
export type AnswerUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswersNestedInput;
    bestAnswerOf?: Prisma.QuestionUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerOf?: Prisma.QuestionUncheckedUpdateOneWithoutBestAnswerNestedInput;
    comments?: Prisma.AnswerCommentUncheckedUpdateManyWithoutAnswerNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCountOutputType = {
    comments: number;
    attachments: number;
};
export type AnswerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | AnswerCountOutputTypeCountCommentsArgs;
    attachments?: boolean | AnswerCountOutputTypeCountAttachmentsArgs;
};
export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCountOutputTypeSelect<ExtArgs> | null;
};
export type AnswerCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerCommentWhereInput;
};
export type AnswerCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type AnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    bestAnswerOf?: boolean | Prisma.Answer$bestAnswerOfArgs<ExtArgs>;
    comments?: boolean | Prisma.Answer$commentsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Answer$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnswerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answer"]>;
export type AnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answer"]>;
export type AnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answer"]>;
export type AnswerSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
};
export type AnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "authorId" | "questionId", ExtArgs["result"]["answer"]>;
export type AnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    bestAnswerOf?: boolean | Prisma.Answer$bestAnswerOfArgs<ExtArgs>;
    comments?: boolean | Prisma.Answer$commentsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Answer$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnswerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $AnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Answer";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        question: Prisma.$QuestionPayload<ExtArgs>;
        bestAnswerOf: Prisma.$QuestionPayload<ExtArgs> | null;
        comments: Prisma.$AnswerCommentPayload<ExtArgs>[];
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        content: string;
        createdAt: Date;
        updatedAt: Date | null;
        authorId: string;
        questionId: string;
    }, ExtArgs["result"]["answer"]>;
    composites: {};
};
export type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnswerPayload, S>;
export type AnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnswerCountAggregateInputType | true;
};
export interface AnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Answer'];
        meta: {
            name: 'Answer';
        };
    };
    findUnique<T extends AnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnswerFindManyArgs>(args?: Prisma.SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnswerCreateArgs>(args: Prisma.SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnswerDeleteArgs>(args: Prisma.SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnswerUpdateArgs>(args: Prisma.SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnswerUpsertArgs>(args: Prisma.SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnswerCountArgs>(args?: Prisma.Subset<T, AnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnswerCountAggregateOutputType> : number>;
    aggregate<T extends AnswerAggregateArgs>(args: Prisma.Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>;
    groupBy<T extends AnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: AnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnswerFieldRefs;
}
export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bestAnswerOf<T extends Prisma.Answer$bestAnswerOfArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Answer$bestAnswerOfArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.Answer$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Answer$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attachments<T extends Prisma.Answer$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Answer$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnswerFieldRefs {
    readonly id: Prisma.FieldRef<"Answer", 'String'>;
    readonly content: Prisma.FieldRef<"Answer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Answer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Answer", 'DateTime'>;
    readonly authorId: Prisma.FieldRef<"Answer", 'String'>;
    readonly questionId: Prisma.FieldRef<"Answer", 'String'>;
}
export type AnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerCreateInput, Prisma.AnswerUncheckedCreateInput>;
};
export type AnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnswerCreateManyInput | Prisma.AnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    data: Prisma.AnswerCreateManyInput | Prisma.AnswerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerUpdateInput, Prisma.AnswerUncheckedUpdateInput>;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyInput>;
    where?: Prisma.AnswerWhereInput;
    limit?: number;
};
export type AnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyInput>;
    where?: Prisma.AnswerWhereInput;
    limit?: number;
    include?: Prisma.AnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateInput, Prisma.AnswerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnswerUpdateInput, Prisma.AnswerUncheckedUpdateInput>;
};
export type AnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
    limit?: number;
};
export type Answer$bestAnswerOfArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where?: Prisma.QuestionWhereInput;
};
export type Answer$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Answer$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
export type AnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
};
