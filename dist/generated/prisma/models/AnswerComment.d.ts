import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnswerCommentModel = runtime.Types.Result.DefaultSelection<Prisma.$AnswerCommentPayload>;
export type AggregateAnswerComment = {
    _count: AnswerCommentCountAggregateOutputType | null;
    _min: AnswerCommentMinAggregateOutputType | null;
    _max: AnswerCommentMaxAggregateOutputType | null;
};
export type AnswerCommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    answerId: string | null;
};
export type AnswerCommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    answerId: string | null;
};
export type AnswerCommentCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    answerId: number;
    _all: number;
};
export type AnswerCommentMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    answerId?: true;
};
export type AnswerCommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    answerId?: true;
};
export type AnswerCommentCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    answerId?: true;
    _all?: true;
};
export type AnswerCommentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerCommentWhereInput;
    orderBy?: Prisma.AnswerCommentOrderByWithRelationInput | Prisma.AnswerCommentOrderByWithRelationInput[];
    cursor?: Prisma.AnswerCommentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnswerCommentCountAggregateInputType;
    _min?: AnswerCommentMinAggregateInputType;
    _max?: AnswerCommentMaxAggregateInputType;
};
export type GetAnswerCommentAggregateType<T extends AnswerCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateAnswerComment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnswerComment[P]> : Prisma.GetScalarType<T[P], AggregateAnswerComment[P]>;
};
export type AnswerCommentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerCommentWhereInput;
    orderBy?: Prisma.AnswerCommentOrderByWithAggregationInput | Prisma.AnswerCommentOrderByWithAggregationInput[];
    by: Prisma.AnswerCommentScalarFieldEnum[] | Prisma.AnswerCommentScalarFieldEnum;
    having?: Prisma.AnswerCommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnswerCommentCountAggregateInputType | true;
    _min?: AnswerCommentMinAggregateInputType;
    _max?: AnswerCommentMaxAggregateInputType;
};
export type AnswerCommentGroupByOutputType = {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    authorId: string;
    answerId: string;
    _count: AnswerCommentCountAggregateOutputType | null;
    _min: AnswerCommentMinAggregateOutputType | null;
    _max: AnswerCommentMaxAggregateOutputType | null;
};
export type GetAnswerCommentGroupByPayload<T extends AnswerCommentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnswerCommentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnswerCommentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnswerCommentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnswerCommentGroupByOutputType[P]>;
}>>;
export type AnswerCommentWhereInput = {
    AND?: Prisma.AnswerCommentWhereInput | Prisma.AnswerCommentWhereInput[];
    OR?: Prisma.AnswerCommentWhereInput[];
    NOT?: Prisma.AnswerCommentWhereInput | Prisma.AnswerCommentWhereInput[];
    id?: Prisma.StringFilter<"AnswerComment"> | string;
    content?: Prisma.StringFilter<"AnswerComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"AnswerComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"AnswerComment"> | Date | string | null;
    authorId?: Prisma.StringFilter<"AnswerComment"> | string;
    answerId?: Prisma.StringFilter<"AnswerComment"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    answer?: Prisma.XOR<Prisma.AnswerScalarRelationFilter, Prisma.AnswerWhereInput>;
};
export type AnswerCommentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    answer?: Prisma.AnswerOrderByWithRelationInput;
};
export type AnswerCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnswerCommentWhereInput | Prisma.AnswerCommentWhereInput[];
    OR?: Prisma.AnswerCommentWhereInput[];
    NOT?: Prisma.AnswerCommentWhereInput | Prisma.AnswerCommentWhereInput[];
    content?: Prisma.StringFilter<"AnswerComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"AnswerComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"AnswerComment"> | Date | string | null;
    authorId?: Prisma.StringFilter<"AnswerComment"> | string;
    answerId?: Prisma.StringFilter<"AnswerComment"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    answer?: Prisma.XOR<Prisma.AnswerScalarRelationFilter, Prisma.AnswerWhereInput>;
}, "id">;
export type AnswerCommentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    _count?: Prisma.AnswerCommentCountOrderByAggregateInput;
    _max?: Prisma.AnswerCommentMaxOrderByAggregateInput;
    _min?: Prisma.AnswerCommentMinOrderByAggregateInput;
};
export type AnswerCommentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnswerCommentScalarWhereWithAggregatesInput | Prisma.AnswerCommentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnswerCommentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnswerCommentScalarWhereWithAggregatesInput | Prisma.AnswerCommentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AnswerComment"> | string;
    content?: Prisma.StringWithAggregatesFilter<"AnswerComment"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AnswerComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AnswerComment"> | Date | string | null;
    authorId?: Prisma.StringWithAggregatesFilter<"AnswerComment"> | string;
    answerId?: Prisma.StringWithAggregatesFilter<"AnswerComment"> | string;
};
export type AnswerCommentCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswerCommentsInput;
    answer: Prisma.AnswerCreateNestedOneWithoutCommentsInput;
};
export type AnswerCommentUncheckedCreateInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    answerId: string;
};
export type AnswerCommentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswerCommentsNestedInput;
    answer?: Prisma.AnswerUpdateOneRequiredWithoutCommentsNestedInput;
};
export type AnswerCommentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCommentCreateManyInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    answerId: string;
};
export type AnswerCommentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AnswerCommentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCommentListRelationFilter = {
    every?: Prisma.AnswerCommentWhereInput;
    some?: Prisma.AnswerCommentWhereInput;
    none?: Prisma.AnswerCommentWhereInput;
};
export type AnswerCommentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnswerCommentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
};
export type AnswerCommentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
};
export type AnswerCommentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
};
export type AnswerCommentCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAuthorInput, Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCommentCreateWithoutAuthorInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput | Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.AnswerCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
};
export type AnswerCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAuthorInput, Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCommentCreateWithoutAuthorInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput | Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.AnswerCommentCreateManyAuthorInputEnvelope;
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
};
export type AnswerCommentUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAuthorInput, Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCommentCreateWithoutAuthorInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput | Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.AnswerCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    disconnect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    delete?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    update?: Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.AnswerCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.AnswerCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.AnswerCommentScalarWhereInput | Prisma.AnswerCommentScalarWhereInput[];
};
export type AnswerCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAuthorInput, Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput> | Prisma.AnswerCommentCreateWithoutAuthorInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput | Prisma.AnswerCommentCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAuthorInput | Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.AnswerCommentCreateManyAuthorInputEnvelope;
    set?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    disconnect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    delete?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    update?: Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAuthorInput | Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.AnswerCommentUpdateManyWithWhereWithoutAuthorInput | Prisma.AnswerCommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.AnswerCommentScalarWhereInput | Prisma.AnswerCommentScalarWhereInput[];
};
export type AnswerCommentCreateNestedManyWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAnswerInput, Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput> | Prisma.AnswerCommentCreateWithoutAnswerInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput | Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput[];
    createMany?: Prisma.AnswerCommentCreateManyAnswerInputEnvelope;
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
};
export type AnswerCommentUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAnswerInput, Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput> | Prisma.AnswerCommentCreateWithoutAnswerInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput | Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput[];
    createMany?: Prisma.AnswerCommentCreateManyAnswerInputEnvelope;
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
};
export type AnswerCommentUpdateManyWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAnswerInput, Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput> | Prisma.AnswerCommentCreateWithoutAnswerInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput | Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput[];
    upsert?: Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput | Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: Prisma.AnswerCommentCreateManyAnswerInputEnvelope;
    set?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    disconnect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    delete?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    update?: Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput | Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?: Prisma.AnswerCommentUpdateManyWithWhereWithoutAnswerInput | Prisma.AnswerCommentUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: Prisma.AnswerCommentScalarWhereInput | Prisma.AnswerCommentScalarWhereInput[];
};
export type AnswerCommentUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAnswerInput, Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput> | Prisma.AnswerCommentCreateWithoutAnswerInput[] | Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput | Prisma.AnswerCommentCreateOrConnectWithoutAnswerInput[];
    upsert?: Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput | Prisma.AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: Prisma.AnswerCommentCreateManyAnswerInputEnvelope;
    set?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    disconnect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    delete?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    connect?: Prisma.AnswerCommentWhereUniqueInput | Prisma.AnswerCommentWhereUniqueInput[];
    update?: Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput | Prisma.AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?: Prisma.AnswerCommentUpdateManyWithWhereWithoutAnswerInput | Prisma.AnswerCommentUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: Prisma.AnswerCommentScalarWhereInput | Prisma.AnswerCommentScalarWhereInput[];
};
export type AnswerCommentCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    answer: Prisma.AnswerCreateNestedOneWithoutCommentsInput;
};
export type AnswerCommentUncheckedCreateWithoutAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    answerId: string;
};
export type AnswerCommentCreateOrConnectWithoutAuthorInput = {
    where: Prisma.AnswerCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAuthorInput, Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput>;
};
export type AnswerCommentCreateManyAuthorInputEnvelope = {
    data: Prisma.AnswerCommentCreateManyAuthorInput | Prisma.AnswerCommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type AnswerCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.AnswerCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnswerCommentUpdateWithoutAuthorInput, Prisma.AnswerCommentUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAuthorInput, Prisma.AnswerCommentUncheckedCreateWithoutAuthorInput>;
};
export type AnswerCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.AnswerCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnswerCommentUpdateWithoutAuthorInput, Prisma.AnswerCommentUncheckedUpdateWithoutAuthorInput>;
};
export type AnswerCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.AnswerCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.AnswerCommentUpdateManyMutationInput, Prisma.AnswerCommentUncheckedUpdateManyWithoutAuthorInput>;
};
export type AnswerCommentScalarWhereInput = {
    AND?: Prisma.AnswerCommentScalarWhereInput | Prisma.AnswerCommentScalarWhereInput[];
    OR?: Prisma.AnswerCommentScalarWhereInput[];
    NOT?: Prisma.AnswerCommentScalarWhereInput | Prisma.AnswerCommentScalarWhereInput[];
    id?: Prisma.StringFilter<"AnswerComment"> | string;
    content?: Prisma.StringFilter<"AnswerComment"> | string;
    createdAt?: Prisma.DateTimeFilter<"AnswerComment"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"AnswerComment"> | Date | string | null;
    authorId?: Prisma.StringFilter<"AnswerComment"> | string;
    answerId?: Prisma.StringFilter<"AnswerComment"> | string;
};
export type AnswerCommentCreateWithoutAnswerInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutAnswerCommentsInput;
};
export type AnswerCommentUncheckedCreateWithoutAnswerInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
};
export type AnswerCommentCreateOrConnectWithoutAnswerInput = {
    where: Prisma.AnswerCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAnswerInput, Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput>;
};
export type AnswerCommentCreateManyAnswerInputEnvelope = {
    data: Prisma.AnswerCommentCreateManyAnswerInput | Prisma.AnswerCommentCreateManyAnswerInput[];
    skipDuplicates?: boolean;
};
export type AnswerCommentUpsertWithWhereUniqueWithoutAnswerInput = {
    where: Prisma.AnswerCommentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnswerCommentUpdateWithoutAnswerInput, Prisma.AnswerCommentUncheckedUpdateWithoutAnswerInput>;
    create: Prisma.XOR<Prisma.AnswerCommentCreateWithoutAnswerInput, Prisma.AnswerCommentUncheckedCreateWithoutAnswerInput>;
};
export type AnswerCommentUpdateWithWhereUniqueWithoutAnswerInput = {
    where: Prisma.AnswerCommentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnswerCommentUpdateWithoutAnswerInput, Prisma.AnswerCommentUncheckedUpdateWithoutAnswerInput>;
};
export type AnswerCommentUpdateManyWithWhereWithoutAnswerInput = {
    where: Prisma.AnswerCommentScalarWhereInput;
    data: Prisma.XOR<Prisma.AnswerCommentUpdateManyMutationInput, Prisma.AnswerCommentUncheckedUpdateManyWithoutAnswerInput>;
};
export type AnswerCommentCreateManyAuthorInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    answerId: string;
};
export type AnswerCommentUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    answer?: Prisma.AnswerUpdateOneRequiredWithoutCommentsNestedInput;
};
export type AnswerCommentUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCommentCreateManyAnswerInput = {
    id?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
};
export type AnswerCommentUpdateWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutAnswerCommentsNestedInput;
};
export type AnswerCommentUncheckedUpdateWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCommentUncheckedUpdateManyWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AnswerCommentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    answerId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.AnswerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answerComment"]>;
export type AnswerCommentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    answerId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.AnswerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answerComment"]>;
export type AnswerCommentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    answerId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.AnswerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answerComment"]>;
export type AnswerCommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    answerId?: boolean;
};
export type AnswerCommentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "authorId" | "answerId", ExtArgs["result"]["answerComment"]>;
export type AnswerCommentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.AnswerDefaultArgs<ExtArgs>;
};
export type AnswerCommentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.AnswerDefaultArgs<ExtArgs>;
};
export type AnswerCommentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    answer?: boolean | Prisma.AnswerDefaultArgs<ExtArgs>;
};
export type $AnswerCommentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnswerComment";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        answer: Prisma.$AnswerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        content: string;
        createdAt: Date;
        updatedAt: Date | null;
        authorId: string;
        answerId: string;
    }, ExtArgs["result"]["answerComment"]>;
    composites: {};
};
export type AnswerCommentGetPayload<S extends boolean | null | undefined | AnswerCommentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload, S>;
export type AnswerCommentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnswerCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnswerCommentCountAggregateInputType | true;
};
export interface AnswerCommentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnswerComment'];
        meta: {
            name: 'AnswerComment';
        };
    };
    findUnique<T extends AnswerCommentFindUniqueArgs>(args: Prisma.SelectSubset<T, AnswerCommentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnswerCommentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnswerCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnswerCommentFindFirstArgs>(args?: Prisma.SelectSubset<T, AnswerCommentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnswerCommentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnswerCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnswerCommentFindManyArgs>(args?: Prisma.SelectSubset<T, AnswerCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnswerCommentCreateArgs>(args: Prisma.SelectSubset<T, AnswerCommentCreateArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnswerCommentCreateManyArgs>(args?: Prisma.SelectSubset<T, AnswerCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnswerCommentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnswerCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnswerCommentDeleteArgs>(args: Prisma.SelectSubset<T, AnswerCommentDeleteArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnswerCommentUpdateArgs>(args: Prisma.SelectSubset<T, AnswerCommentUpdateArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnswerCommentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnswerCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnswerCommentUpdateManyArgs>(args: Prisma.SelectSubset<T, AnswerCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnswerCommentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnswerCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnswerCommentUpsertArgs>(args: Prisma.SelectSubset<T, AnswerCommentUpsertArgs<ExtArgs>>): Prisma.Prisma__AnswerCommentClient<runtime.Types.Result.GetResult<Prisma.$AnswerCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnswerCommentCountArgs>(args?: Prisma.Subset<T, AnswerCommentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnswerCommentCountAggregateOutputType> : number>;
    aggregate<T extends AnswerCommentAggregateArgs>(args: Prisma.Subset<T, AnswerCommentAggregateArgs>): Prisma.PrismaPromise<GetAnswerCommentAggregateType<T>>;
    groupBy<T extends AnswerCommentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnswerCommentGroupByArgs['orderBy'];
    } : {
        orderBy?: AnswerCommentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnswerCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnswerCommentFieldRefs;
}
export interface Prisma__AnswerCommentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answer<T extends Prisma.AnswerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnswerDefaultArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnswerCommentFieldRefs {
    readonly id: Prisma.FieldRef<"AnswerComment", 'String'>;
    readonly content: Prisma.FieldRef<"AnswerComment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AnswerComment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AnswerComment", 'DateTime'>;
    readonly authorId: Prisma.FieldRef<"AnswerComment", 'String'>;
    readonly answerId: Prisma.FieldRef<"AnswerComment", 'String'>;
}
export type AnswerCommentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    where: Prisma.AnswerCommentWhereUniqueInput;
};
export type AnswerCommentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    where: Prisma.AnswerCommentWhereUniqueInput;
};
export type AnswerCommentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerCommentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerCommentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerCommentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerCommentCreateInput, Prisma.AnswerCommentUncheckedCreateInput>;
};
export type AnswerCommentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnswerCommentCreateManyInput | Prisma.AnswerCommentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnswerCommentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    data: Prisma.AnswerCommentCreateManyInput | Prisma.AnswerCommentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnswerCommentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnswerCommentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerCommentUpdateInput, Prisma.AnswerCommentUncheckedUpdateInput>;
    where: Prisma.AnswerCommentWhereUniqueInput;
};
export type AnswerCommentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnswerCommentUpdateManyMutationInput, Prisma.AnswerCommentUncheckedUpdateManyInput>;
    where?: Prisma.AnswerCommentWhereInput;
    limit?: number;
};
export type AnswerCommentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerCommentUpdateManyMutationInput, Prisma.AnswerCommentUncheckedUpdateManyInput>;
    where?: Prisma.AnswerCommentWhereInput;
    limit?: number;
    include?: Prisma.AnswerCommentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnswerCommentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    where: Prisma.AnswerCommentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCommentCreateInput, Prisma.AnswerCommentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnswerCommentUpdateInput, Prisma.AnswerCommentUncheckedUpdateInput>;
};
export type AnswerCommentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
    where: Prisma.AnswerCommentWhereUniqueInput;
};
export type AnswerCommentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerCommentWhereInput;
    limit?: number;
};
export type AnswerCommentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCommentSelect<ExtArgs> | null;
    omit?: Prisma.AnswerCommentOmit<ExtArgs> | null;
    include?: Prisma.AnswerCommentInclude<ExtArgs> | null;
};
