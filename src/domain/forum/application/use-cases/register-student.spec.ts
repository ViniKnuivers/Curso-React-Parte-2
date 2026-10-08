import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { StudentAlreadyExistsError } from '@/domain/forum/application/use-cases/errors/student-already-exists-error'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { FakeHasher } from 'test/cryptography/fake-hasher'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let fakeHasher: FakeHasher
let registerStudent: RegisterStudentUseCase

describe('Register Student', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    fakeHasher = new FakeHasher()
    registerStudent = new RegisterStudentUseCase(
      inMemoryStudentsRepository,
      fakeHasher,
    )
  })

  it('Should be able to register a new student', async () => {
    const result = await registerStudent.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.student.id).toBeTruthy()
      expect(inMemoryStudentsRepository.items[0]).toEqual(
        result.value.student,
      )
    }
  })

  it('Should hash the student password upon registration', async () => {
    const result = await registerStudent.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.student.password).toEqual('123456-hashed')
    }
  })

  it('Should not be able to register a student with an already used e-mail', async () => {
    await registerStudent.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    const result = await registerStudent.execute({
      name: 'Jane Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(StudentAlreadyExistsError)
  })
})
