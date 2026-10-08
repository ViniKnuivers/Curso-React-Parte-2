import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionPayload>;
export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
};
export type QuestionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    bestAnswerId: string | null;
};
export type QuestionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    authorId: string | null;
    bestAnswerId: string | null;
};
export type QuestionCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    authorId: number;
    bestAnswerId: number;
    _all: number;
};
export type QuestionMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    bestAnswerId?: true;
};
export type QuestionMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    bestAnswerId?: true;
};
export type QuestionCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    authorId?: true;
    bestAnswerId?: true;
    _all?: true;
};
export type QuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuestionCountAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
};
export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestion[P]> : Prisma.GetScalarType<T[P], AggregateQuestion[P]>;
};
export type QuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithAggregationInput | Prisma.QuestionOrderByWithAggregationInput[];
    by: Prisma.QuestionScalarFieldEnum[] | Prisma.QuestionScalarFieldEnum;
    having?: Prisma.QuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCountAggregateInputType | true;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
};
export type QuestionGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    authorId: string;
    bestAnswerId: string | null;
    _count: QuestionCountAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
};
export type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionGroupByOutputType[P]>;
}>>;
export type QuestionWhereInput = {
    AND?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    OR?: Prisma.QuestionWhereInput[];
    NOT?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    id?: Prisma.StringFilter<"Question"> | string;
    title?: Prisma.StringFilter<"Question"> | string;
    slug?: Prisma.StringFilter<"Question"> | string;
    content?: Prisma.StringFilter<"Question"> | string;
    createdAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Question"> | Date | string | null;
    authorId?: Prisma.StringFilter<"Question"> | string;
    bestAnswerId?: Prisma.StringNullableFilter<"Question"> | string | null;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bestAnswer?: Prisma.XOR<Prisma.AnswerNullableScalarRelationFilter, Prisma.AnswerWhereInput> | null;
    answers?: Prisma.AnswerListRelationFilter;
    comments?: Prisma.QuestionCommentListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
};
export type QuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    bestAnswerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    author?: Prisma.UserOrderByWithRelationInput;
    bestAnswer?: Prisma.AnswerOrderByWithRelationInput;
    answers?: Prisma.AnswerOrderByRelationAggregateInput;
    comments?: Prisma.QuestionCommentOrderByRelationAggregateInput;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
};
export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    bestAnswerId?: string;
    AND?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    OR?: Prisma.QuestionWhereInput[];
    NOT?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    title?: Prisma.StringFilter<"Question"> | string;
    content?: Prisma.StringFilter<"Question"> | string;
    createdAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Question"> | Date | string | null;
    authorId?: Prisma.StringFilter<"Question"> | string;
    author?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    bestAnswer?: Prisma.XOR<Prisma.AnswerNullableScalarRelationFilter, Prisma.AnswerWhereInput> | null;
    answers?: Prisma.AnswerListRelationFilter;
    comments?: Prisma.QuestionCommentListRelationFilter;
    attachments?: Prisma.AttachmentListRelationFilter;
}, "id" | "slug" | "bestAnswerId">;
export type QuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    bestAnswerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuestionCountOrderByAggregateInput;
    _max?: Prisma.QuestionMaxOrderByAggregateInput;
    _min?: Prisma.QuestionMinOrderByAggregateInput;
};
export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionScalarWhereWithAggregatesInput | Prisma.QuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionScalarWhereWithAggregatesInput | Prisma.QuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Question"> | Date | string | null;
    authorId?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    bestAnswerId?: Prisma.StringNullableWithAggregatesFilter<"Question"> | string | null;
};
export type QuestionCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    bestAnswer?: Prisma.AnswerCreateNestedOneWithoutBestAnswerOfInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    bestAnswerId?: string | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    bestAnswer?: Prisma.AnswerUpdateOneWithoutBestAnswerOfNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    bestAnswerId?: string | null;
};
export type QuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuestionListRelationFilter = {
    every?: Prisma.QuestionWhereInput;
    some?: Prisma.QuestionWhereInput;
    none?: Prisma.QuestionWhereInput;
};
export type QuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    bestAnswerId?: Prisma.SortOrder;
};
export type QuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    bestAnswerId?: Prisma.SortOrder;
};
export type QuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    bestAnswerId?: Prisma.SortOrder;
};
export type QuestionScalarRelationFilter = {
    is?: Prisma.QuestionWhereInput;
    isNot?: Prisma.QuestionWhereInput;
};
export type QuestionNullableScalarRelationFilter = {
    is?: Prisma.QuestionWhereInput | null;
    isNot?: Prisma.QuestionWhereInput | null;
};
export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput | Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput> | Prisma.QuestionCreateWithoutAuthorInput[] | Prisma.QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAuthorInput | Prisma.QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.QuestionCreateManyAuthorInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput | Prisma.QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput | Prisma.QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionCreateNestedOneWithoutBestAnswerInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutBestAnswerInput, Prisma.QuestionUncheckedCreateWithoutBestAnswerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutBestAnswerInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUncheckedCreateNestedOneWithoutBestAnswerInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutBestAnswerInput, Prisma.QuestionUncheckedCreateWithoutBestAnswerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutBestAnswerInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.QuestionUpsertWithoutAnswersInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutAnswersInput, Prisma.QuestionUpdateWithoutAnswersInput>, Prisma.QuestionUncheckedUpdateWithoutAnswersInput>;
};
export type QuestionUpdateOneWithoutBestAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutBestAnswerInput, Prisma.QuestionUncheckedCreateWithoutBestAnswerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutBestAnswerInput;
    upsert?: Prisma.QuestionUpsertWithoutBestAnswerInput;
    disconnect?: Prisma.QuestionWhereInput | boolean;
    delete?: Prisma.QuestionWhereInput | boolean;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutBestAnswerInput, Prisma.QuestionUpdateWithoutBestAnswerInput>, Prisma.QuestionUncheckedUpdateWithoutBestAnswerInput>;
};
export type QuestionUncheckedUpdateOneWithoutBestAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutBestAnswerInput, Prisma.QuestionUncheckedCreateWithoutBestAnswerInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutBestAnswerInput;
    upsert?: Prisma.QuestionUpsertWithoutBestAnswerInput;
    disconnect?: Prisma.QuestionWhereInput | boolean;
    delete?: Prisma.QuestionWhereInput | boolean;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutBestAnswerInput, Prisma.QuestionUpdateWithoutBestAnswerInput>, Prisma.QuestionUncheckedUpdateWithoutBestAnswerInput>;
};
export type QuestionCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutCommentsInput, Prisma.QuestionUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutCommentsInput, Prisma.QuestionUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.QuestionUpsertWithoutCommentsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutCommentsInput, Prisma.QuestionUpdateWithoutCommentsInput>, Prisma.QuestionUncheckedUpdateWithoutCommentsInput>;
};
export type QuestionCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAttachmentsInput, Prisma.QuestionUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAttachmentsInput, Prisma.QuestionUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.QuestionUpsertWithoutAttachmentsInput;
    disconnect?: Prisma.QuestionWhereInput | boolean;
    delete?: Prisma.QuestionWhereInput | boolean;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.QuestionUpdateWithoutAttachmentsInput>, Prisma.QuestionUncheckedUpdateWithoutAttachmentsInput>;
};
export type QuestionCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    bestAnswer?: Prisma.AnswerCreateNestedOneWithoutBestAnswerOfInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    bestAnswerId?: string | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput>;
};
export type QuestionCreateManyAuthorInputEnvelope = {
    data: Prisma.QuestionCreateManyAuthorInput | Prisma.QuestionCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.QuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAuthorInput, Prisma.QuestionUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAuthorInput, Prisma.QuestionUncheckedCreateWithoutAuthorInput>;
};
export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAuthorInput, Prisma.QuestionUncheckedUpdateWithoutAuthorInput>;
};
export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.QuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyWithoutAuthorInput>;
};
export type QuestionScalarWhereInput = {
    AND?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
    OR?: Prisma.QuestionScalarWhereInput[];
    NOT?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"Question"> | string;
    title?: Prisma.StringFilter<"Question"> | string;
    slug?: Prisma.StringFilter<"Question"> | string;
    content?: Prisma.StringFilter<"Question"> | string;
    createdAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"Question"> | Date | string | null;
    authorId?: Prisma.StringFilter<"Question"> | string;
    bestAnswerId?: Prisma.StringNullableFilter<"Question"> | string | null;
};
export type QuestionCreateWithoutAnswersInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    bestAnswer?: Prisma.AnswerCreateNestedOneWithoutBestAnswerOfInput;
    comments?: Prisma.QuestionCommentCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    bestAnswerId?: string | null;
    comments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
};
export type QuestionCreateWithoutBestAnswerInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutBestAnswerInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutBestAnswerInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutBestAnswerInput, Prisma.QuestionUncheckedCreateWithoutBestAnswerInput>;
};
export type QuestionUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAnswersInput, Prisma.QuestionUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAnswersInput, Prisma.QuestionUncheckedUpdateWithoutAnswersInput>;
};
export type QuestionUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    bestAnswer?: Prisma.AnswerUpdateOneWithoutBestAnswerOfNestedInput;
    comments?: Prisma.QuestionCommentUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUpsertWithoutBestAnswerInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutBestAnswerInput, Prisma.QuestionUncheckedUpdateWithoutBestAnswerInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutBestAnswerInput, Prisma.QuestionUncheckedCreateWithoutBestAnswerInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutBestAnswerInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutBestAnswerInput, Prisma.QuestionUncheckedUpdateWithoutBestAnswerInput>;
};
export type QuestionUpdateWithoutBestAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutBestAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    bestAnswer?: Prisma.AnswerCreateNestedOneWithoutBestAnswerOfInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutCommentsInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    bestAnswerId?: string | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutCommentsInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutCommentsInput, Prisma.QuestionUncheckedCreateWithoutCommentsInput>;
};
export type QuestionUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutCommentsInput, Prisma.QuestionUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutCommentsInput, Prisma.QuestionUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutCommentsInput, Prisma.QuestionUncheckedUpdateWithoutCommentsInput>;
};
export type QuestionUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    bestAnswer?: Prisma.AnswerUpdateOneWithoutBestAnswerOfNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutAttachmentsInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    author: Prisma.UserCreateNestedOneWithoutQuestionsInput;
    bestAnswer?: Prisma.AnswerCreateNestedOneWithoutBestAnswerOfInput;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    authorId: string;
    bestAnswerId?: string | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    comments?: Prisma.QuestionCommentUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAttachmentsInput, Prisma.QuestionUncheckedCreateWithoutAttachmentsInput>;
};
export type QuestionUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAttachmentsInput, Prisma.QuestionUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAttachmentsInput, Prisma.QuestionUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAttachmentsInput, Prisma.QuestionUncheckedUpdateWithoutAttachmentsInput>;
};
export type QuestionUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    author?: Prisma.UserUpdateOneRequiredWithoutQuestionsNestedInput;
    bestAnswer?: Prisma.AnswerUpdateOneWithoutBestAnswerOfNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateManyAuthorInput = {
    id?: string;
    title: string;
    slug: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    bestAnswerId?: string | null;
};
export type QuestionUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bestAnswer?: Prisma.AnswerUpdateOneWithoutBestAnswerOfNestedInput;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    comments?: Prisma.QuestionCommentUncheckedUpdateManyWithoutQuestionNestedInput;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bestAnswerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type QuestionCountOutputType = {
    answers: number;
    comments: number;
    attachments: number;
};
export type QuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs;
    comments?: boolean | QuestionCountOutputTypeCountCommentsArgs;
    attachments?: boolean | QuestionCountOutputTypeCountAttachmentsArgs;
};
export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCountOutputTypeSelect<ExtArgs> | null;
};
export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
};
export type QuestionCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionCommentWhereInput;
};
export type QuestionCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type QuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    bestAnswerId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bestAnswer?: boolean | Prisma.Question$bestAnswerArgs<ExtArgs>;
    answers?: boolean | Prisma.Question$answersArgs<ExtArgs>;
    comments?: boolean | Prisma.Question$commentsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Question$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.QuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    bestAnswerId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bestAnswer?: boolean | Prisma.Question$bestAnswerArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    bestAnswerId?: boolean;
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bestAnswer?: boolean | Prisma.Question$bestAnswerArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorId?: boolean;
    bestAnswerId?: boolean;
};
export type QuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "content" | "createdAt" | "updatedAt" | "authorId" | "bestAnswerId", ExtArgs["result"]["question"]>;
export type QuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bestAnswer?: boolean | Prisma.Question$bestAnswerArgs<ExtArgs>;
    answers?: boolean | Prisma.Question$answersArgs<ExtArgs>;
    comments?: boolean | Prisma.Question$commentsArgs<ExtArgs>;
    attachments?: boolean | Prisma.Question$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.QuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bestAnswer?: boolean | Prisma.Question$bestAnswerArgs<ExtArgs>;
};
export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    bestAnswer?: boolean | Prisma.Question$bestAnswerArgs<ExtArgs>;
};
export type $QuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Question";
    objects: {
        author: Prisma.$UserPayload<ExtArgs>;
        bestAnswer: Prisma.$AnswerPayload<ExtArgs> | null;
        answers: Prisma.$AnswerPayload<ExtArgs>[];
        comments: Prisma.$QuestionCommentPayload<ExtArgs>[];
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        content: string;
        createdAt: Date;
        updatedAt: Date | null;
        authorId: string;
        bestAnswerId: string | null;
    }, ExtArgs["result"]["question"]>;
    composites: {};
};
export type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionPayload, S>;
export type QuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionCountAggregateInputType | true;
};
export interface QuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Question'];
        meta: {
            name: 'Question';
        };
    };
    findUnique<T extends QuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuestionFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuestionCreateArgs>(args: Prisma.SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuestionDeleteArgs>(args: Prisma.SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuestionUpdateArgs>(args: Prisma.SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuestionUpsertArgs>(args: Prisma.SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuestionCountArgs>(args?: Prisma.Subset<T, QuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionCountAggregateOutputType> : number>;
    aggregate<T extends QuestionAggregateArgs>(args: Prisma.Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>;
    groupBy<T extends QuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuestionFieldRefs;
}
export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bestAnswer<T extends Prisma.Question$bestAnswerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$bestAnswerArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.Question$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.Question$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    attachments<T extends Prisma.Question$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuestionFieldRefs {
    readonly id: Prisma.FieldRef<"Question", 'String'>;
    readonly title: Prisma.FieldRef<"Question", 'String'>;
    readonly slug: Prisma.FieldRef<"Question", 'String'>;
    readonly content: Prisma.FieldRef<"Question", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Question", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Question", 'DateTime'>;
    readonly authorId: Prisma.FieldRef<"Question", 'String'>;
    readonly bestAnswerId: Prisma.FieldRef<"Question", 'String'>;
}
export type QuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionCreateInput, Prisma.QuestionUncheckedCreateInput>;
};
export type QuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuestionCreateManyInput | Prisma.QuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    data: Prisma.QuestionCreateManyInput | Prisma.QuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionUpdateInput, Prisma.QuestionUncheckedUpdateInput>;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuestionWhereInput;
    limit?: number;
};
export type QuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuestionWhereInput;
    limit?: number;
    include?: Prisma.QuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateInput, Prisma.QuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuestionUpdateInput, Prisma.QuestionUncheckedUpdateInput>;
};
export type QuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    limit?: number;
};
export type Question$bestAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where?: Prisma.AnswerWhereInput;
};
export type Question$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Question$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Question$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type QuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
};
