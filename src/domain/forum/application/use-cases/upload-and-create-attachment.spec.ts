import { beforeEach, describe, expect, it } from 'vitest'
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/upload-and-create-attachment'
import { InvalidAttachmentTypeError } from '@/domain/forum/application/use-cases/errors/invalid-attachment-type-error'
import { InMemoryAttachmentsRepository } from 'test/repositories/in-memory-attachments-repository'
import { FakeUploader } from 'test/storage/fake-uploader'

let inMemoryAttachmentsRepository: InMemoryAttachmentsRepository
let fakeUploader: FakeUploader
let uploadAndCreateAttachment: UploadAndCreateAttachmentUseCase

describe('Upload and create attachment', () => {
  beforeEach(() => {
    inMemoryAttachmentsRepository = new InMemoryAttachmentsRepository()
    fakeUploader = new FakeUploader()
    uploadAndCreateAttachment = new UploadAndCreateAttachmentUseCase(
      inMemoryAttachmentsRepository,
      fakeUploader,
    )
  })

  it('Should be able to upload and create an attachment', async () => {
    const result = await uploadAndCreateAttachment.execute({
      fileName: 'profile.png',
      fileType: 'image/png',
      body: Buffer.from(''),
    })

    expect(result.isRight()).toBe(true)
    if (result.isRight()) {
      expect(result.value.attachment.title).toBe('profile.png')
      expect(result.value.attachment.link).toBe(
        'https://fake-storage.com/profile.png',
      )
      expect(inMemoryAttachmentsRepository.items[0]).toEqual(
        result.value.attachment,
      )
      expect(fakeUploader.uploads[0].fileName).toBe('profile.png')
    }
  })

  it('Should not be able to upload an attachment with an invalid file type', async () => {
    const result = await uploadAndCreateAttachment.execute({
      fileName: 'document.docx',
      fileType: 'application/msword',
      body: Buffer.from(''),
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(InvalidAttachmentTypeError)
    expect(inMemoryAttachmentsRepository.items).toHaveLength(0)
  })
})
