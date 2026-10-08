import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryQuestionsCommentsRepository } from 'test/repositories/in-memory-question-comments-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { makeStudent } from 'test/factories/make-student'
import { FetchQuestionComments } from '@/domain/forum/application/use-cases/fetch-question-comments'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryQuestionsCommentsRepository: InMemoryQuestionsCommentsRepository
let sut: FetchQuestionComments

describe('Fetch question comments', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryQuestionsCommentsRepository = new InMemoryQuestionsCommentsRepository(
      inMemoryStudentsRepository,
    )
    sut = new FetchQuestionComments(inMemoryQuestionsCommentsRepository)
  })

  it('Should be able to fetch question comments with author', async () => {
    const student = makeStudent({ name: 'John Doe' })
    inMemoryStudentsRepository.items.push(student)

    await inMemoryQuestionsCommentsRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityID('question-1'),
        authorId: student.id,
      }),
    )
    await inMemoryQuestionsCommentsRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityID('question-1'),
        authorId: student.id,
      }),
    )
    await inMemoryQuestionsCommentsRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityID('question-1'),
        authorId: student.id,
      }),
    )

    const result = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.questionComments).toHaveLength(3)
      expect(result.value.questionComments[0].author).toBe('John Doe')
    }
  })

  it('should be able to fetch paginated question comments', async () => {
    const student = makeStudent()
    inMemoryStudentsRepository.items.push(student)

    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionsCommentsRepository.create(
        makeQuestionComment({
          questionId: new UniqueEntityID('question-1'),
          authorId: student.id,
        }),
      )
    }

    const result = await sut.execute({
      questionId: 'question-1',
      page: 2,
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.questionComments).toHaveLength(2)
    }
  })
})
