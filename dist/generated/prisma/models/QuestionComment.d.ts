import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuestionCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionCommentPayload>;
export type AggregateQuestionComment = {
    _count: QuestionCommentCountAggregateOutputType | null;
    _min: QuestionCommentMinAggregateOutputType | null;
    _max: QuestionCommentMaxAggregateOutputType | null;
};
export type QuestionCommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    questionId: string | null;
};
export type QuestionCommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    questionId: string | null;
};
export type QuestionCommentCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    questionId: number;
    _all: number;
};
export type QuestionCommentMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    questionId?: true;
};
export type QuestionCommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    questionId?: true;
};
export type QuestionCommentCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    questionId?: true;
    _all?: true;
};
export type QuestionCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionCommentWhereInput;
    orderBy?: Prisma.QuestionCommentOrderByWithRelationInput | Prisma.QuestionCommentOrderByWithRelationInput[];
    cursor?: Prisma.QuestionCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuestionCommentCountAggregateInputType;
    _min?: QuestionCommentMinAggregateInputType;
    _max?: QuestionCommentMaxAggregateInputType;
};
export type GetQuestionCommentAggregateType<T extends QuestionCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestionComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestionComment[P]> : Prisma.GetScalarType<T[P], AggregateQuestionComment[P]>;
};
export type QuestionCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionCommentWhereInput;
    orderBy?: Prisma.QuestionCommentOrderByWithAggregationInput | Prisma.QuestionCommentOrderByWithAggregationInput[];
    by: Prisma.QuestionCommentScalarFieldEnum[] | Prisma.QuestionCommentScalarFieldEnum;
    having?: Prisma.QuestionCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCommentCountAggregateInputType | true;
    _min?: QuestionCommentMinAggregateInputType;
    _max?: QuestionCommentMaxAggregateInputType;
};
export type QuestionCommentGroupByOutputType = {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    authorId: string;
    questionId: string;
    _count: QuestionCommentCountAggregateOutputType | null;
    _min: QuestionCommentMinAggregateOutputType | null;
    _max: QuestionCommentMaxAggregateOutputType | null;
};
export type GetQuestionCommentGroupByPayload<T extends QuestionCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionCommentGroupByOutputType[P]>;
}>>;
export type QuestionCommentWhereInput = {
    AND?: Prisma.QuestionCommentWhereInput | Prisma.QuestionCommentWhereInput[];
    OR?: Prisma.QuestionCommentWhereInput[];
    NOT?: Prisma.QuestionCommentWhereInput | Prisma.QuestionCommentWhereInput[];
    id?: Prisma.StringFilter<"QuestionComment"> | string;
    content?: Prisma.StringFilter<"QuestionComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"QuestionComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"QuestionComment"> | Date | string | null;
    authorId?: Prisma.StringFilter<"QuestionComment"> | string;
    questionId?: Prisma.StringFilter<"QuestionComment"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
};
export type QuestionCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    question?: Prisma.QuestionOrderByWithRelationInput;
};
export type QuestionCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QuestionCommentWhereInput | Prisma.QuestionCommentWhereInput[];
    OR?: Prisma.QuestionCommentWhereInput[];
    NOT?: Prisma.QuestionCommentWhereInput | Prisma.QuestionCommentWhereInput[];
    content?: Prisma.StringFilter<"QuestionComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"QuestionComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"QuestionComment"> | Date | string | null;
    authorId?: Prisma.StringFilter<"QuestionComment"> | string;
    questionId?: Prisma.StringFilter<"QuestionComment"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
}, "id">;
export type QuestionCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    _count?: Prisma.QuestionCommentCountOrderByAggregateInput;
    _max?: Prisma.QuestionCommentMaxOrderByAggregateInput;
    _min?: Prisma.QuestionCommentMinOrderByAggregateInput;
};
export type QuestionCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionCommentScalarWhereWithAggregatesInput | Prisma.QuestionCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionCommentScalarWhereWithAggregatesInput | Prisma.QuestionCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QuestionComment"> | string;
    content?: Prisma.StringWithAggregatesFilter<"QuestionComment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"QuestionComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"QuestionComment"> | Date | string | null;
    authorId?: Prisma.StringWithAggregatesFilter<"QuestionComment"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"QuestionComment"> | string;
};
export type QuestionCommentCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionCommentsInput;
    question: Prisma.QuestionCreateNestedOneWithoutCommentsInput;
};
export type QuestionCommentUncheckedCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
};
export type QuestionCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionCommentsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutCommentsNestedInput;
};
export type QuestionCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuestionCommentCreateManyInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    questionId: string;
};
export type QuestionCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuestionCommentListRelationFilter = {
    every?: Prisma.QuestionCommentWhereInput;
    some?: Prisma.QuestionCommentWhereInput;
    none?: Prisma.QuestionCommentWhereInput;
};
export type QuestionCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuestionCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type QuestionCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type QuestionCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type QuestionCommentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutAuthorInput, Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCommentCreateWithoutAuthorInput[] | Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput | Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.QuestionCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
};
export type QuestionCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutAuthorInput, Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCommentCreateWithoutAuthorInput[] | Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput | Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.QuestionCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
};
export type QuestionCommentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutAuthorInput, Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCommentCreateWithoutAuthorInput[] | Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput | Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.QuestionCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.QuestionCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.QuestionCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    disconnect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    delete?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    update?: Prisma.QuestionCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.QuestionCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.QuestionCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.QuestionCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.QuestionCommentScalarWhereInput | Prisma.QuestionCommentScalarWhereInput[];
};
export type QuestionCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutAuthorInput, Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCommentCreateWithoutAuthorInput[] | Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput | Prisma.QuestionCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.QuestionCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.QuestionCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.QuestionCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    disconnect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    delete?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    update?: Prisma.QuestionCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.QuestionCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.QuestionCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.QuestionCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.QuestionCommentScalarWhereInput | Prisma.QuestionCommentScalarWhereInput[];
};
export type QuestionCommentCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutQuestionInput, Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput> | Prisma.QuestionCommentCreateWithoutQuestionInput[] | Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput | Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuestionCommentCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
};
export type QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutQuestionInput, Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput> | Prisma.QuestionCommentCreateWithoutQuestionInput[] | Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput | Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.QuestionCommentCreateManyQuestionInputEnvelope;
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
};
export type QuestionCommentUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutQuestionInput, Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput> | Prisma.QuestionCommentCreateWithoutQuestionInput[] | Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput | Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuestionCommentCreateManyQuestionInputEnvelope;
    set?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    disconnect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    delete?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    update?: Prisma.QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuestionCommentUpdateManyWithWhereWithoutQuestionInput | Prisma.QuestionCommentUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuestionCommentScalarWhereInput | Prisma.QuestionCommentScalarWhereInput[];
};
export type QuestionCommentUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCommentCreateWithoutQuestionInput, Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput> | Prisma.QuestionCommentCreateWithoutQuestionInput[] | Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput | Prisma.QuestionCommentCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput | Prisma.QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.QuestionCommentCreateManyQuestionInputEnvelope;
    set?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    disconnect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    delete?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    connect?: Prisma.QuestionCommentWhereUniqueInput | Prisma.QuestionCommentWhereUniqueInput[];
    update?: Prisma.QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput | Prisma.QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.QuestionCommentUpdateManyWithWhereWithoutQuestionInput | Prisma.QuestionCommentUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.QuestionCommentScalarWhereInput | Prisma.QuestionCommentScalarWhereInput[];
};
export type QuestionCommentCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    question: Prisma.QuestionCreateNestedOneWithoutCommentsInput;
};
export type QuestionCommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    questionId: string;
};
export type QuestionCommentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.QuestionCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCommentCreateWithoutAuthorInput, Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput>;
};
export type QuestionCommentCreateManyAuthorInputEnvelope = {
    data: Prisma.QuestionCommentCreateManyAuthorInput | Prisma.QuestionCommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type QuestionCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.QuestionCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionCommentUpdateWithoutAuthorInput, Prisma.QuestionCommentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.QuestionCommentCreateWithoutAuthorInput, Prisma.QuestionCommentUncheckedCreateWithoutAuthorInput>;
};
export type QuestionCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.QuestionCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionCommentUpdateWithoutAuthorInput, Prisma.QuestionCommentUncheckedUpdateWithoutAuthorInput>;
};
export type QuestionCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.QuestionCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionCommentUpdateManyMutationInput, Prisma.QuestionCommentUncheckedUpdateManyWithoutAuthorInput>;
};
export type QuestionCommentScalarWhereInput = {
    AND?: Prisma.QuestionCommentScalarWhereInput | Prisma.QuestionCommentScalarWhereInput[];
    OR?: Prisma.QuestionCommentScalarWhereInput[];
    NOT?: Prisma.QuestionCommentScalarWhereInput | Prisma.QuestionCommentScalarWhereInput[];
    id?: Prisma.StringFilter<"QuestionComment"> | string;
    content?: Prisma.StringFilter<"QuestionComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"QuestionComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"QuestionComment"> | Date | string | null;
    authorId?: Prisma.StringFilter<"QuestionComment"> | string;
    questionId?: Prisma.StringFilter<"QuestionComment"> | string;
};
export type QuestionCommentCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionCommentsInput;
};
export type QuestionCommentUncheckedCreateWithoutQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
};
export type QuestionCommentCreateOrConnectWithoutQuestionInput = {
    where: Prisma.QuestionCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCommentCreateWithoutQuestionInput, Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput>;
};
export type QuestionCommentCreateManyQuestionInputEnvelope = {
    data: Prisma.QuestionCommentCreateManyQuestionInput | Prisma.QuestionCommentCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type QuestionCommentUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuestionCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionCommentUpdateWithoutQuestionInput, Prisma.QuestionCommentUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.QuestionCommentCreateWithoutQuestionInput, Prisma.QuestionCommentUncheckedCreateWithoutQuestionInput>;
};
export type QuestionCommentUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.QuestionCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionCommentUpdateWithoutQuestionInput, Prisma.QuestionCommentUncheckedUpdateWithoutQuestionInput>;
};
export type QuestionCommentUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.QuestionCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionCommentUpdateManyMutationInput, Prisma.QuestionCommentUncheckedUpdateManyWithoutQuestionInput>;
};
export type QuestionCommentCreateManyAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    questionId: string;
};
export type QuestionCommentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    question?: Prisma.QuestionUpdateOneRequiredWithoutCommentsNestedInput;
};
export type QuestionCommentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuestionCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuestionCommentCreateManyQuestionInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
};
export type QuestionCommentUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionCommentsNestedInput;
};
export type QuestionCommentUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuestionCommentUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type QuestionCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["questionComment"]>;
export type QuestionCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["questionComment"]>;
export type QuestionCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["questionComment"]>;
export type QuestionCommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    questionId?: boolean;
};
export type QuestionCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "authorId" | "questionId", ExtArgs["result"]["questionComment"]>;
export type QuestionCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type QuestionCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type QuestionCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $QuestionCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QuestionComment";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        question: Prisma.$QuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        content: string;
        createdAt: Date;
        updatedAt: Date | null;
        authorId: string;
        questionId: string;
    }, ExtArgs["result"]["questionComment"]>;
    composites: {};
};
export type QuestionCommentGetPayload<S extends boolean | null | undefined | QuestionCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload, S>;
export type QuestionCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionCommentCountAggregateInputType | true;
};
export interface QuestionCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QuestionComment'];
        meta: {
            name: 'QuestionComment';
        };
    };
    findUnique<T extends QuestionCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuestionCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuestionCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuestionCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuestionCommentFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuestionCommentCreateArgs>(args: Prisma.SelectSubset<T, QuestionCommentCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuestionCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuestionCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuestionCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuestionCommentDeleteArgs>(args: Prisma.SelectSubset<T, QuestionCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuestionCommentUpdateArgs>(args: Prisma.SelectSubset<T, QuestionCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuestionCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuestionCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuestionCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuestionCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuestionCommentUpsertArgs>(args: Prisma.SelectSubset<T, QuestionCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionCommentClient<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuestionCommentCountArgs>(args?: Prisma.Subset<T, QuestionCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionCommentCountAggregateOutputType> : number>;
    aggregate<T extends QuestionCommentAggregateArgs>(args: Prisma.Subset<T, QuestionCommentAggregateArgs>): Prisma.PrismaPromise<GetQuestionCommentAggregateType<T>>;
    groupBy<T extends QuestionCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuestionCommentFieldRefs;
}
export interface Prisma__QuestionCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuestionCommentFieldRefs {
    readonly id: Prisma.FieldRef<"QuestionComment", 'String'>;
    readonly content: Prisma.FieldRef<"QuestionComment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"QuestionComment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"QuestionComment", 'DateTime'>;
    readonly authorId: Prisma.FieldRef<"QuestionComment", 'String'>;
    readonly questionId: Prisma.FieldRef<"QuestionComment", 'String'>;
}
export type QuestionCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    where: Prisma.QuestionCommentWhereUniqueInput;
};
export type QuestionCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    where: Prisma.QuestionCommentWhereUniqueInput;
};
export type QuestionCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionCommentCreateInput, Prisma.QuestionCommentUncheckedCreateInput>;
};
export type QuestionCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuestionCommentCreateManyInput | Prisma.QuestionCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuestionCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    data: Prisma.QuestionCommentCreateManyInput | Prisma.QuestionCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuestionCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuestionCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionCommentUpdateInput, Prisma.QuestionCommentUncheckedUpdateInput>;
    where: Prisma.QuestionCommentWhereUniqueInput;
};
export type QuestionCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuestionCommentUpdateManyMutationInput, Prisma.QuestionCommentUncheckedUpdateManyInput>;
    where?: Prisma.QuestionCommentWhereInput;
    limit?: number;
};
export type QuestionCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionCommentUpdateManyMutationInput, Prisma.QuestionCommentUncheckedUpdateManyInput>;
    where?: Prisma.QuestionCommentWhereInput;
    limit?: number;
    include?: Prisma.QuestionCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuestionCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    where: Prisma.QuestionCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCommentCreateInput, Prisma.QuestionCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuestionCommentUpdateInput, Prisma.QuestionCommentUncheckedUpdateInput>;
};
export type QuestionCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
    where: Prisma.QuestionCommentWhereUniqueInput;
};
export type QuestionCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionCommentWhereInput;
    limit?: number;
};
export type QuestionCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCommentSelect<ExtArgs> | null;
    omit?: Prisma.QuestionCommentOmit<ExtArgs> | null;
    include?: Prisma.QuestionCommentInclude<ExtArgs> | null;
};
