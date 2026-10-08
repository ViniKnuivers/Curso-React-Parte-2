import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import type { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'

const fakeAnswerRepository: AnswerRepository = {
  create: async () => {},
  findById: async () => null,
  findManyByQuestionIdWithAuthor: async () => [],
  delete: async () => {},
  save: async () => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const result = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova Resposta',
    attachmentsIds: [],
  })

  expect(result.isRight()).toBe(true)
  if (result.isRight()) {
    expect(result.value.answer.content).toEqual('Nova Resposta')
  }
})
