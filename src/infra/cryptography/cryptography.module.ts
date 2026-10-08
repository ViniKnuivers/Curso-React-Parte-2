import { Module } from '@nestjs/common'
import { HashGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { HashComparator } from '@/domain/forum/application/cryptography/hash-comparator'
import { BcryptHasher } from '@/infra/cryptography/bcrypt-hasher'

@Module({
  providers: [
    { provide: HashGenerator, useClass: BcryptHasher },
    { provide: HashComparator, useClass: BcryptHasher },
    { provide: HashGenerator, useClass: BcryptHasher },

  ],
  exports: [HashGenerator, HashComparator],
})
export class CryptographyModule {}

/*
quando a gente vai utilizar uma classe, vamos usar uma instancia
new HashGenerator () (nova instancia
const hasGenerator = new HashGenerator(paramA)

class Service(
  @inject('CryptographyModule')
  PRIVATE CRIPModule

)
*/