import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryAnswersCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { makeAnswerComment } from 'test/factories/make-answer-comments'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment'

let inMemoryAnswersCommentsRepository: InMemoryAnswersCommentsRepository
let sut: DeleteAnswerCommentUseCase

describe('Delete Answer Comment', () => {
  beforeEach(() => {
    inMemoryAnswersCommentsRepository = new InMemoryAnswersCommentsRepository()

    sut = new DeleteAnswerCommentUseCase(inMemoryAnswersCommentsRepository)
  })

  it('Should be able to delete a Answer comment', async () => {
    const AnswerComment = makeAnswerComment({
      authorId: new UniqueEntityID('author-1'),
    })

    await inMemoryAnswersCommentsRepository.create(AnswerComment)

    await sut.execute({
      answerCommentId: AnswerComment.id.toString(),
      authorId: AnswerComment.authorId.toString(),
    })

    expect(inMemoryAnswersCommentsRepository.items).toHaveLength(0)
  })

  it('Should not be able to delete a Answer comment from another user', async () => {
    const AnswerComment = makeAnswerComment({
      authorId: new UniqueEntityID('author-1'),
    })

    await inMemoryAnswersCommentsRepository.create(AnswerComment)

    const result = await sut.execute({
      answerCommentId: AnswerComment.id.toString(),
      authorId: 'author-2',
    })

    expect(result.isLeft()).toBe(true)
  })
})
