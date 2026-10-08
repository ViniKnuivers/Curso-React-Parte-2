import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { makeQuestion } from 'test/factories/make-question'
import { makeStudent } from 'test/factories/make-student'
import { makeAttachment } from 'test/factories/make-attachment'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryAttachmentsRepository: InMemoryAttachmentsRepository
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryAttachmentsRepository = new InMemoryAttachmentsRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryStudentsRepository,
      inMemoryAttachmentsRepository,
    )
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('Should be able to get a question by slug with author and attachments', async () => {
    const student = makeStudent({ name: 'John Doe' })
    inMemoryStudentsRepository.items.push(student)

    const newQuestion = makeQuestion({
      authorId: student.id,
      slug: Slug.createFromText('example-question'),
    })
    await inMemoryQuestionsRepository.create(newQuestion)

    const result = await sut.execute({
      slug: 'example-question',
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.question.questionId).toEqual(newQuestion.id)
      expect(result.value.question.author).toBe('John Doe')
      expect(result.value.question.attachments).toEqual([])
    }
  })

  it('Should be able to get a question by slug with its attachments', async () => {
    const student = makeStudent()
    inMemoryStudentsRepository.items.push(student)

    const attachment = makeAttachment({ title: 'some-file.png' })
    inMemoryAttachmentsRepository.items.push(attachment)

    const questionId = new UniqueEntityID()
    const newQuestion = makeQuestion(
      {
        authorId: student.id,
        slug: Slug.createFromText('question-with-attachment'),
        attachments: [
          QuestionAttachment.create({
            attachmentId: attachment.id,
            questionId,
          }),
        ],
      },
      questionId,
    )
    await inMemoryQuestionsRepository.create(newQuestion)

    const result = await sut.execute({
      slug: 'question-with-attachment',
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.question.attachments).toHaveLength(1)
      expect(result.value.question.attachments[0].title).toBe('some-file.png')
    }
  })

  it('Should throw if the question author does not exist', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.createFromText('orphan-question'),
    })
    await inMemoryQuestionsRepository.create(newQuestion)

    await expect(() =>
      sut.execute({ slug: 'orphan-question' }),
    ).rejects.toThrow()
  })
})
