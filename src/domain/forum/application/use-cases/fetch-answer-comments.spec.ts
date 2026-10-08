import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryAnswersCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeAnswerComment } from 'test/factories/make-answer-comments'
import { makeStudent } from 'test/factories/make-student'
import { FetchAnswerComments } from '@/domain/forum/application/use-cases/fetch-answer-comments'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryAnswersCommentsRepository: InMemoryAnswersCommentsRepository
let sut: FetchAnswerComments

describe('Fetch answer comments', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryAnswersCommentsRepository = new InMemoryAnswersCommentsRepository(
      inMemoryStudentsRepository,
    )
    sut = new FetchAnswerComments(inMemoryAnswersCommentsRepository)
  })

  it('Should be able to fetch answer comments with author', async () => {
    const student = makeStudent({ name: 'John Doe' })
    inMemoryStudentsRepository.items.push(student)

    await inMemoryAnswersCommentsRepository.create(
      makeAnswerComment({
        answerId: new UniqueEntityID('answer-1'),
        authorId: student.id,
      }),
    )
    await inMemoryAnswersCommentsRepository.create(
      makeAnswerComment({
        answerId: new UniqueEntityID('answer-1'),
        authorId: student.id,
      }),
    )
    await inMemoryAnswersCommentsRepository.create(
      makeAnswerComment({
        answerId: new UniqueEntityID('answer-1'),
        authorId: student.id,
      }),
    )

    const result = await sut.execute({
      answerId: 'answer-1',
      page: 1,
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.answerComments).toHaveLength(3)
      expect(result.value.answerComments[0].author).toBe('John Doe')
    }
  })

  it('should be able to fetch paginated answer comments', async () => {
    const student = makeStudent()
    inMemoryStudentsRepository.items.push(student)

    for (let i = 1; i <= 22; i++) {
      await inMemoryAnswersCommentsRepository.create(
        makeAnswerComment({
          answerId: new UniqueEntityID('answer-1'),
          authorId: student.id,
        }),
      )
    }

    const result = await sut.execute({
      answerId: 'answer-1',
      page: 2,
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.answerComments).toHaveLength(2)
    }
  })
})
