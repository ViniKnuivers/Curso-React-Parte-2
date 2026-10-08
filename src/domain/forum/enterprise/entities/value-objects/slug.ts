export class Slug {
  public value: string

  constructor(text: string) {
    this.value = text
  }

  static createFromText(text: string) {
    const slugtext = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugtext)
  }
}
