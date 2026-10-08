import { beforeEach, describe, expect, it, vi } from 'vitest'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repository'
import { makeQuestion } from 'test/factories/make-question'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvents } from '@/core/events/domain-events'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { OnQuestionBestAnswerChosen } from '@/domain/notification/application/subscribers/on-question-best-answer-chosen'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryNotificationsRepository: InMemoryNotificationsRepository
let sendNotificationUseCase: SendNotificationUseCase

let sendNotificationExecuteSpy: ReturnType<typeof vi.spyOn>

describe('On Question Best Answer Chosen', () => {
  beforeEach(() => {
    DomainEvents.clearHandlers()
    DomainEvents.clearMarkedAggregates()

    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      new InMemoryStudentsRepository(),
      new InMemoryAttachmentsRepository(),
    )
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    inMemoryNotificationsRepository = new InMemoryNotificationsRepository()
    sendNotificationUseCase = new SendNotificationUseCase(
      inMemoryNotificationsRepository,
    )

    sendNotificationExecuteSpy = vi.spyOn(sendNotificationUseCase, 'execute')

    new OnQuestionBestAnswerChosen(
      inMemoryAnswersRepository,
      sendNotificationUseCase,
    )
  })

  it('Should send a notification when a question best answer is chosen', async () => {
    const question = makeQuestion({
      authorId: new UniqueEntityID('question-author'),
    })
    await inMemoryQuestionsRepository.create(question)

    const answer = makeAnswer({
      questionId: question.id,
      authorId: new UniqueEntityID('answer-author'),
    })
    await inMemoryAnswersRepository.create(answer)

    question.bestAnswerId = answer.id

    await inMemoryQuestionsRepository.save(question)

    expect(sendNotificationExecuteSpy).toHaveBeenCalledWith(
      expect.objectContaining({ recipientId: 'answer-author' }),
    )
  })
})
