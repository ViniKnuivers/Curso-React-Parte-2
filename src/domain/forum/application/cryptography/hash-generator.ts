export abstract class HashGenerator {
  constructor(paramA) {
    this.paramA = paramA
  }
  abstract hash(plain: string): Promise<string>
}
