import { Injectable } from '@nestjs/common'
import { compare, hash } from 'bcryptjs'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { HashComparator } from '@/domain/forum/application/cryptography/hash-comparator'

const HASH_SALT_LENGTH = 8

@Injectable()
export class BcryptHasher implements HashGenerator, HashComparator {
  async hash(plain: string): Promise<string> {
    return hash(plain, HASH_SALT_LENGTH)
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return compare(plain, hashed)
  }
}
