import { beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { InMemoryQuestionsCommentsRepository } from 'test/repositories/in-memory-question-comments-repository'
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository'
import { makeQuestion } from 'test/factories/make-question'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvents } from '@/core/events/domain-events'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { OnQuestionCommentCreated } from '@/domain/notification/application/subscribers/on-question-comment-created'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionsCommentsRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sendNotificationUseCase: SendNotificationUseCase

let sendNotificationExecuteSpy: ReturnType<typeof vi.spyOn>

describe('On Question Comment Created', () => {
  beforeEach(() => {
    DomainEvents.clearHandlers()
    DomainEvents.clearMarkedAggregates()

    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      new InMemoryStudentsRepository(),
      new InMemoryAttachmentsRepository(),
    )
    inMemoryQuestionCommentsRepository =
      new InMemoryQuestionsCommentsRepository()
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationsRepository,
    )

    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')

    new OnQuestionCommentCreated(
      inMemoryQuestionsRepository,
      sendNotificationUseCase,
    )
  })

  it('Should send a notification when a question receives a comment from a different author', async () => {
    const question = makeQuestion({
      authorId: new UniqueEntityID('question-author'),
    })
    await inMemoryQuestionsRepository.create(question)

    const questionComment = makeQuestionComment({
      questionId: question.id,
      authorId: new UniqueEntityID('commenter'),
    })
    await inMemoryQuestionCommentsRepository.create(questionComment)

    expect(sendNotificationExecuteSpy).toHaveBeenCalledWith(
      expect.objectContaining({ recipientId: 'question-author' }),
    )
  })

  it('Should not send a notification when the question author comments on their own question', async () => {
    const question = makeQuestion({
      authorId: new UniqueEntityID('question-author'),
    })
    await inMemoryQuestionsRepository.create(question)

    const questionComment = makeQuestionComment({
      questionId: question.id,
      authorId: new UniqueEntityID('question-author'),
    })
    await inMemoryQuestionCommentsRepository.create(questionComment)

    expect(sendNotificationExecuteSpy).not.toHaveBeenCalled()
  })
})
