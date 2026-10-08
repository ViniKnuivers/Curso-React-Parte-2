import { beforeEach, describe, expect, it } from 'vitest'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let createQuestion: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      new InMemoryStudentsRepository(),
      new InMemoryAttachmentsRepository(),
    )
    createQuestion = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('Should be able to create a question', async () => {
    const result = await createQuestion.execute({
      authorId: '1',
      title: 'New question',
      content: 'Content page',
      attachmentsIds: [],
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.question.id).toBeTruthy()
    }
  })

  it('Should be able to create a question with attachments', async () => {
    const result = await createQuestion.execute({
      authorId: '1',
      title: 'New question',
      content: 'Content page',
      attachmentsIds: ['1', '2'],
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.question.attachments).toHaveLength(2)
      expect(result.value.question.attachments).toEqual([
        expect.objectContaining({
          attachmentId: expect.objectContaining({ value: '1' }),
        }),
        expect.objectContaining({
          attachmentId: expect.objectContaining({ value: '2' }),
        }),
      ])
    }
  })
})
