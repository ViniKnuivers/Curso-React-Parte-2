import type { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import type { HashComparator } from '@/domain/forum/application/cryptography/hash-comparator'

export class FakeHasher implements HashGenerator, HashComparator {
  async hash(plain: string): Promise<string> {
    return plain.concat('-hashed')
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return plain.concat('-hashed') === hash
  }
}
