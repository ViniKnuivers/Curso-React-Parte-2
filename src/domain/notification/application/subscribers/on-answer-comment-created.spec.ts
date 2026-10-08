import { beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAnswersCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { makeAnswerComment } from 'test/factories/make-answer-comments'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvents } from '@/core/events/domain-events'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { OnAnswerCommentCreated } from '@/domain/notification/application/subscribers/on-answer-comment-created'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswersCommentsRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sendNotificationUseCase: SendNotificationUseCase

let sendNotificationExecuteSpy: ReturnType<typeof vi.spyOn>

describe('On Answer Comment Created', () => {
  beforeEach(() => {
    DomainEvents.clearHandlers()
    DomainEvents.clearMarkedAggregates()

    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    inMemoryAnswerCommentsRepository = new InMemoryAnswersCommentsRepository()
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationsRepository,
    )

    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')

    new OnAnswerCommentCreated(
      inMemoryAnswersRepository,
      sendNotificationUseCase,
    )
  })

  it('Should send a notification when an answer receives a comment from a different author', async () => {
    const answer = makeAnswer({
      authorId: new UniqueEntityID('answer-author'),
    })
    await inMemoryAnswersRepository.create(answer)

    const answerComment = makeAnswerComment({
      answerId: answer.id,
      authorId: new UniqueEntityID('commenter'),
    })
    await inMemoryAnswerCommentsRepository.create(answerComment)

    expect(sendNotificationExecuteSpy).toHaveBeenCalledWith(
      expect.objectContaining({ recipientId: 'answer-author' }),
    )
  })

  it('Should not send a notification when the answer author comments on their own answer', async () => {
    const answer = makeAnswer({
      authorId: new UniqueEntityID('answer-author'),
    })
    await inMemoryAnswersRepository.create(answer)

    const answerComment = makeAnswerComment({
      answerId: answer.id,
      authorId: new UniqueEntityID('answer-author'),
    })
    await inMemoryAnswerCommentsRepository.create(answerComment)

    expect(sendNotificationExecuteSpy).not.toHaveBeenCalled()
  })
})
