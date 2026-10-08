# Estudo do projeto — Fórum (Clean Architecture + DDD)

Guia de estudo completo do projeto `projeto-node-4`: uma API de fórum estilo curso Rocketseat (perguntas, respostas, comentários, anexos, notificações), construída em NestJS + Prisma seguindo Clean Architecture e Domain-Driven Design.

## Índice

1. [Visão geral e stack](#1-visão-geral-e-stack)
2. [Como rodar o projeto](#2-como-rodar-o-projeto)
3. [Estrutura de pastas](#3-estrutura-de-pastas)
4. [Conceitos fundamentais usados no projeto](#4-conceitos-fundamentais-usados-no-projeto)
5. [Bounded contexts e entidades](#5-bounded-contexts-e-entidades)
6. [Fluxo completo de uma requisição](#6-fluxo-completo-de-uma-requisição)
7. [Autenticação e segurança](#7-autenticação-e-segurança)
8. [Sistema de anexos e upload](#8-sistema-de-anexos-e-upload)
9. [Eventos de domínio e notificações](#9-eventos-de-domínio-e-notificações)
10. [Persistência (Prisma)](#10-persistência-prisma)
11. [Tratamento de erros](#11-tratamento-de-erros)
12. [Rotas HTTP (referência completa)](#12-rotas-http-referência-completa)
13. [Estratégia de testes](#13-estratégia-de-testes)
14. [Glossário](#14-glossário)

---

## 1. Visão geral e stack

O projeto é uma API REST de fórum de perguntas e respostas (tipo Stack Overflow simplificado): estudantes se cadastram, fazem perguntas (com anexos opcionais), outros usuários respondem, comentam, e o autor da pergunta pode escolher a melhor resposta. Cada uma dessas ações relevantes dispara uma notificação para o usuário certo.

**Stack:**

| Camada | Tecnologia |
|---|---|
| Runtime / linguagem | Node.js + TypeScript |
| Framework HTTP | NestJS 11 |
| ORM / banco | Prisma 7 + PostgreSQL |
| Validação | Zod (schemas de request) |
| Autenticação | JWT (RS256) via `@nestjs/jwt` + Passport |
| Hash de senha | bcryptjs |
| Upload/Storage | disco local (`fs`) ou Cloudflare R2 (`@aws-sdk/client-s3`, compatível com S3) |
| Testes | Vitest (unitário + e2e), Supertest, `@faker-js/faker` |
| Infra local | Docker Compose (Postgres) |

O projeto **não tem nenhum framework de UI/frontend** — é só a API.

---

## 2. Como rodar o projeto

```bash
# 1. Subir o Postgres
docker compose up -d

# 2. Aplicar as migrations
npx prisma migrate deploy

# 3. Instalar dependências (se ainda não instalou)
npm install

# 4. Rodar em modo dev (watch)
npm run start:dev
```

Variáveis de ambiente (`.env`, ver `src/infra/env.ts` para o schema completo validado com Zod):

| Variável | Obrigatória? | Descrição |
|---|---|---|
| `DATABASE_URL` | sim | connection string do Postgres |
| `JWT_PRIVATE_KEY` / `JWT_PUBLIC_KEY` | sim | chaves RSA em base64, para assinar/verificar o JWT (RS256) |
| `PORT` | não (default 3333) | porta HTTP |
| `CLOUDFLARE_ACCOUNT_ID`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_BUCKET_NAME`, `CLOUDFLARE_PUBLIC_URL` | não | só se quiser usar R2 em vez de disco local pra upload (ver seção 8) |

Scripts úteis (`package.json`):

```bash
npm run test          # unitários (repositório em memória, não precisa de banco)
npm run test:e2e      # e2e (precisa do Postgres rodando)
npm run lint           # eslint
npm run build          # nest build
```

---

## 3. Estrutura de pastas

```
src/
├── core/                          # abstrações compartilhadas, sem dependência de framework
│   ├── entities/                  # Entity, AggregateRoot, ValueObject, UniqueEntityID
│   ├── errors/                    # NotAllowedError, ResourceNotFoundError, UseCaseError
│   ├── events/                    # DomainEvent, DomainEvents (registry), EventHandler
│   ├── repositories/              # PaginationParams
│   ├── types/                     # Optional<T, K>
│   └── either.ts                  # Either<L, R> (Left/Right)
│
├── domain/                        # regra de negócio pura — NADA aqui importa NestJS, Prisma, Express etc.
│   ├── forum/
│   │   ├── application/           # o que o sistema FAZ: use cases + contratos (interfaces)
│   │   │   ├── use-cases/
│   │   │   ├── repositories/      # interfaces (abstract class) — o "port"
│   │   │   ├── cryptography/      # HashGenerator, HashComparator (contratos)
│   │   │   └── storage/           # Uploader (contrato)
│   │   └── enterprise/            # o que o sistema É: entidades e regras do domínio
│   │       ├── entities/
│   │       │   └── value-objects/ # Slug, QuestionDetails, AnswerDetails, CommentWithAuthor
│   │       └── events/            # AnswerCreatedEvent, QuestionBestAnswerChosenEvent, etc.
│   └── notification/
│       ├── application/
│       │   ├── use-cases/
│       │   ├── repositories/
│       │   └── subscribers/       # reagem a eventos de domínio do fórum
│       └── enterprise/entities/
│
├── infra/                         # tudo que depende de framework/mundo externo — o "adapter"
│   ├── app.module.ts              # módulo raiz do Nest
│   ├── main.ts                    # bootstrap
│   ├── env.ts                     # schema Zod das variáveis de ambiente
│   ├── auth/                      # JwtStrategy, JwtAuthGuard, CurrentUser decorator
│   ├── cryptography/               # BcryptHasher (implementação)
│   ├── storage/                   # FsUploader / R2Storage (implementações)
│   ├── database/
│   │   ├── prisma/
│   │   │   ├── prisma.service.ts
│   │   │   ├── mappers/           # domínio ↔ Prisma
│   │   │   └── prisma-repositories/ # implementação Prisma das interfaces de repositório
│   │   └── database.module.ts     # registra Repository (interface) → PrismaXRepository (impl)
│   ├── events/
│   │   └── events.module.ts       # registra os subscribers de notificação
│   └── http/
│       ├── controllers/
│       ├── presenters/            # domínio → JSON de resposta
│       ├── pipes/                 # ZodValidationPipe, pageQueryParamPipe
│       ├── filters/               # DomainExceptionFilter
│       └── http.module.ts
│
test/
├── factories/                     # make-*.ts — cria entidades de domínio (+ versão "Factory" injetável que persiste de verdade, usada nos e2e)
├── repositories/                  # in-memory-*.ts — implementação em memória de cada interface, usada nos testes unitários
├── cryptography/fake-hasher.ts
├── storage/fake-uploader.ts
└── e2e/setup-app.ts               # monta a aplicação Nest de teste + expõe as factories

prisma/
├── schema.prisma
└── migrations/
```

**A regra de dependência** (o coração de Clean Architecture): `infra` pode importar de `domain`, mas `domain` **nunca** importa de `infra`. Isso é o que permite testar toda a regra de negócio sem precisar de banco de dados, Nest, ou HTTP — só instanciando classes puras do domínio.

---

## 4. Conceitos fundamentais usados no projeto

### 4.1 `Entity` — identidade por ID

`src/core/entities/entity.ts`

```ts
export class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  get id() { return this._id }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }
}
```

Duas entidades são "iguais" se têm o mesmo `id`, mesmo que todo o resto das props seja diferente. É a base de `Question`, `Answer`, `Student`, `Attachment`, etc.

### 4.2 `ValueObject` — identidade por valor

`src/core/entities/value-object.ts`

```ts
export abstract class ValueObject<Props> {
  protected props: Props
  protected constructor(props: Props) { this.props = props }

  public equals(vo: ValueObject<unknown>) {
    if (vo === null || vo === undefined) return false
    return JSON.stringify(this.props) === JSON.stringify(vo.props)
  }
}
```

Ao contrário de `Entity`, um Value Object **não tem identidade própria** — dois são "iguais" se todas as props forem iguais. Usado para:
- `Slug` (o slug de uma pergunta)
- **Value Objects compostos**: `QuestionDetails`, `AnswerDetails`, `CommentWithAuthor` — juntam dados de mais de uma entidade (ex: a pergunta + o nome do autor + os anexos) num objeto só, pra devolver ao cliente HTTP sem forçar a entidade `Question` a conhecer coisas que não são dela (nome do autor é responsabilidade de `User`, não de `Question`).

### 4.3 `UniqueEntityID`

`src/core/entities/unique-entity-id.ts` — wrapper em volta de uma `string` (UUID v4 via `randomUUID()`), com `.equals()`, `.toString()`, `.toValue()`. Usado em toda referência entre entidades (`authorId`, `questionId` etc.) em vez de `string` cru — dá segurança de tipo e um lugar único pra evoluir a estratégia de geração de ID se precisar.

### 4.4 `AggregateRoot` + Domain Events

`src/core/entities/aggregate-root.ts` — estende `Entity`, adiciona:

```ts
export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: DomainEvent[] = []

  get domainEvents() { return this._domainEvents }

  protected addDomainEvent(domainEvent: DomainEvent) {
    this._domainEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents() { this._domainEvents = [] }
}
```

`Question`, `Answer`, `QuestionComments`, `AnswerComments` são `AggregateRoot`. Quando algo relevante acontece (uma resposta é criada, uma pergunta ganha melhor resposta), a própria entidade registra um evento no construtor/setter (`this.addDomainEvent(new AnswerCreatedEvent(this))`). Ver seção 9 pra entender o disparo completo.

### 4.5 `Either<L, R>` — erro como valor

`src/core/either.ts`

```ts
export type Either<L, R> = Left<L, R> | Right<L, R>
export const left = <L, R>(value: L): Either<L, R> => new Left(value)
export const right = <L, R>(value: R): Either<L, R> => new Right(value)
```

Todo Use Case retorna `Either<ErroPossível, DadoDeSucesso>` em vez de lançar exception. O chamador (Controller) decide o que fazer:

```ts
const result = await this.editQuestion.execute({ ... })
if (result.isLeft()) {
  throw result.value   // o DomainExceptionFilter traduz pra status HTTP
}
```

Isso deixa explícito, no tipo de retorno do Use Case, quais erros são esperados — sem precisar ler o corpo da função ou torcer pra não esquecer um `try/catch`.

### 4.6 Repository pattern (porta + adaptador)

O **contrato** (porta) fica no domínio, como `abstract class` (não `interface` — o Nest usa a própria classe como token de injeção de dependência):

```ts
// src/domain/forum/application/repositories/question-repository.ts
export abstract class QuestionRepository {
  abstract findById(id: string): Promise<Question | null>
  abstract findDetailsBySlug(slug: string): Promise<QuestionDetails | null>
  abstract create(question: Question): Promise<void>
  abstract delete(question: Question): Promise<void>
  abstract save(question: Question): Promise<void>
  abstract findManyRecent(params: PaginationParams): Promise<Question[]>
}
```

A **implementação** (adaptador) fica na infra: `PrismaQuestionsRepository implements QuestionRepository`. O `database.module.ts` faz o "encaixe":

```ts
{ provide: QuestionRepository, useClass: PrismaQuestionsRepository }
```

Isso permite trocar Postgres por qualquer outra coisa sem tocar em Use Case nenhum — e permite testar Use Cases com um `InMemoryQuestionsRepository` (implementa a mesma interface guardando tudo num array em memória), sem precisar de banco de dados nos testes unitários.

### 4.7 Mapper pattern

Cada entidade de domínio tem um mapper dedicado que converte pra/da forma que o Prisma entende:

```ts
// src/infra/database/prisma/mappers/prisma-question-mapper.ts
export class PrismaQuestionMapper {
  static toDomain(raw: PrismaQuestionWithAttachments): Question { ... }
  static toPrisma(question: Question): Prisma.QuestionUncheckedCreateInput { ... }
}
```

O domínio nunca vê um tipo do Prisma, e o Prisma nunca vê uma entidade de domínio — o mapper é o único lugar que conhece os dois lados. Existem também mappers "de detalhe" (`PrismaQuestionDetailsMapper`, `PrismaAnswerDetailsMapper`, `PrismaCommentWithAuthorMapper`) que fazem o join de várias tabelas num Value Object composto (ver seção 5.5).

### 4.8 Presenter pattern

Converte a entidade/Value Object de domínio pro JSON exato que vai na resposta HTTP:

```ts
// src/infra/http/presenters/question-presenter.ts
export class QuestionPresenter {
  static toHTTP(question: Question) {
    return {
      id: question.id.toString(),
      title: question.title,
      ...
    }
  }
}
```

Existem dois presenters para pergunta (`QuestionPresenter` e `QuestionDetailsPresenter`) e dois pra resposta (`AnswerPresenter` e `AnswerDetailsPresenter`) — os "simples" são usados quando o endpoint acabou de criar a entidade (ex: `POST /questions`, que devolve só o que a entidade sabe sobre si mesma); os "Details" são usados quando o endpoint busca algo já existente e enriquecido com autor/anexos (ex: `GET /questions/:slug`).

### 4.9 Use Case

Unidade de regra de negócio, uma classe por ação (`CreateQuestionUseCase`, `EditQuestionUseCase`, `DeleteQuestionUseCase`...). Padrão:

```ts
@Injectable()
export class XUseCase {
  constructor(private someRepository: SomeRepository) {}

  async execute(request: XRequest): Promise<Either<PossibleError, SuccessData>> {
    // 1. buscar o que precisa
    // 2. validar regra de negócio (autoria, existência)
    // 3. mutar/criar a entidade
    // 4. persistir via repositório
    // 5. devolver right(...) ou left(...)
  }
}
```

Um Use Case **nunca** sabe de HTTP (não lança `NotFoundException`, não sabe o que é status 404) — ele só devolve `left(new ResourceNotFoundError())`. Quem traduz isso pra HTTP é o `DomainExceptionFilter` (seção 11).

---

## 5. Bounded contexts e entidades

O projeto tem 2 bounded contexts dentro de `domain/`:

### 5.1 `forum` — o contexto principal

**`Student`** (`domain/forum/enterprise/entities/student.ts`) — o usuário autenticável. Props: `name`, `email`, `password` (hash). É criado por `RegisterStudentUseCase` e autenticado por `AuthenticateStudentUseCase`. Mapeia pra tabela `users` no banco (o Prisma schema chama de `User`, com um campo `role: STUDENT | INSTRUCTOR` que hoje não é usado pelo domínio — todo cadastro público vira `STUDENT`).

> Existe também uma entidade `Instructor` (`domain/forum/enterprise/entities/instructor.ts`) que é código morto — nunca é usada em lugar nenhum. Foi mantida de propósito (decisão explícita) em vez de removida.

**`Question`** — título, conteúdo, slug (gerado a partir do título), autor, anexos (`QuestionAttachment[]`), melhor resposta (`bestAnswerId`, opcional). É um `AggregateRoot`: ao setar `bestAnswerId`, dispara `QuestionBestAnswerChosenEvent`.

**`Answer`** — conteúdo, autor, pergunta que responde, anexos (`AnswerAttachment[]`). Dispara `AnswerCreatedEvent` na criação.

**`QuestionComments`** / **`AnswerComments`** — ambas estendem a classe base `Comment<Props>` (`domain/forum/enterprise/entities/comment.ts`), que centraliza `content`, `authorId`, `createdAt`, `updatedAt`. Cada uma dispara seu evento de criação (`QuestionCommentCreatedEvent`/`AnswerCommentCreatedEvent`).

**`Attachment`** — `title` + `link` (URL do arquivo). Representa um arquivo já enviado (ver seção 8).

**`QuestionAttachment`** / **`AnswerAttachment`** — entidades de junção "finas", só com `attachmentId` + `questionId`/`answerId`. É o que vive dentro de `question.attachments`/`answer.attachments` (arrays simples — ver nota histórica abaixo).

> **Nota histórica**: até uma refatoração recente, `question.attachments`/`answer.attachments` eram um `WatchedList<QuestionAttachment>` — uma estrutura que rastreava o que foi adicionado/removido pra fazer só os updates necessários no banco. Foi trocado por um **array simples** (`QuestionAttachment[]`) por pedido explícito de simplificação: agora toda edição de anexos apaga o vínculo antigo por completo e recria do zero (`syncAttachments` no repositório Prisma), trocando um pouco de performance por muito menos código pra entender. `WatchedList` foi removida do projeto.

### 5.2 `notification` — o segundo contexto

**`Notification`** — `recipientId`, `title`, `content`, `readAt` (null até ser lida). Criada só internamente por `SendNotificationUseCase`, nunca diretamente pelo cliente HTTP (não existe `POST /notifications` — só existe `PATCH /notifications/:id/read`).

### 5.3 Value Objects "de detalhe"

Criados pra resolver um problema específico: os repositórios sempre devolveram entidades **individuais**, mas em vários endpoints o cliente precisa de dados de **mais de uma entidade junta** (ex: a pergunta + o nome de quem perguntou). Em vez de inflar a entidade `Question` com um campo `authorName` (que não é responsabilidade dela — ela só deveria saber o `authorId`), criamos Value Objects dedicados:

| Value Object | Combina | Usado por |
|---|---|---|
| `QuestionDetails` | `Question` + nome do autor + anexos completos (`Attachment[]`, com título/link) | `GetQuestionBySlugUseCase` → `GET /questions/:slug` |
| `AnswerDetails` | `Answer` + nome do autor + anexos completos | `FetchQuestionAnswersUseCase` → `GET /questions/:id/answers` |
| `CommentWithAuthor` | `QuestionComments` **ou** `AnswerComments` + nome do autor (o mesmo VO serve pros dois, já que a forma é idêntica: `content` + `authorId` + `author`) | `FetchQuestionComments`/`FetchAnswerComments` → `GET /questions/:id/comments` e `GET /answers/:id/comments` |

Esses Value Objects **só existem no caminho de leitura** ("fetch"/"get"). Os endpoints de **criação** (`POST /questions/:id/comments`, `POST /questions/:id/answers`) continuam devolvendo a entidade simples (`QuestionComments`, `Answer`) via `QuestionCommentPresenter`/`AnswerPresenter` — não faz sentido buscar o nome do autor de algo que acabou de ser criado pelo próprio usuário autenticado.

Cada repositório tem um método `findXWithAuthor`/`findDetailsBySlug` dedicado que faz o join no Prisma (`include: { author: true, attachments: true }`) e usa um mapper específico (`PrismaQuestionDetailsMapper`, `PrismaAnswerDetailsMapper`, `PrismaCommentWithAuthorMapper`). Os repositórios **em memória** (usados nos testes unitários) recebem `InMemoryStudentsRepository`/`InMemoryAttachmentsRepository` como dependência no construtor (com valor padrão, opcional) pra conseguir montar o mesmo "join" na mão.

---

## 6. Fluxo completo de uma requisição

Exemplo: `POST /questions` (criar pergunta com anexo).

```
1. Request chega no Nest
   ↓
2. JwtAuthGuard valida o token Bearer (senão, 401 automático)
   ↓
3. CreateQuestionController.handle()
   - ZodValidationPipe valida o body: { title, content, attachments: string[] }
   - @CurrentUser() extrai { sub: userId } do payload do JWT
   ↓
4. CreateQuestionUseCase.execute({ authorId, title, content, attachmentsIds })
   - Question.create({ authorId, title, content })  → gera slug a partir do título
   - question.attachments = attachmentsIds.map(id => QuestionAttachment.create(...))
   - questionRepository.create(question)
   - devolve right({ question })
   ↓
5. PrismaQuestionsRepository.create(question)
   - PrismaQuestionMapper.toPrisma(question) → grava a linha em "questions"
   - syncAttachments(question) → vincula os Attachment (linhas já existentes de um
     upload anterior) a essa pergunta via UPDATE attachments SET question_id = ...
   - DomainEvents.dispatchEventsForAggregate(question.id) → dispara eventos pendentes
     (nenhum nesse caso — Question só dispara evento ao trocar bestAnswerId)
   ↓
6. Controller: se result.isLeft(), throw result.value (nunca acontece aqui, response é null)
   ↓
7. Resposta: 201 Created, corpo vazio
```

A mesma engrenagem — Controller valida → Use Case decide → Repository persiste → Mapper traduz — se repete em todos os 20 controllers do projeto.

---

## 7. Autenticação e segurança

- **Cadastro**: `POST /accounts` → `RegisterStudentUseCase` → verifica e-mail duplicado (`StudentAlreadyExistsError`, 409) → `HashGenerator.hash(password)` (bcrypt, 8 rounds) → persiste.
- **Login**: `POST /sessions` → `AuthenticateStudentUseCase` → busca por e-mail, `HashComparator.compare(senha, hash)` (`WrongCredentialsError`, 401 se não bater) → controller assina o JWT (`this.jwt.sign({ sub: student.id })`).
- **JWT**: RS256 (par de chaves assimétricas, não segredo compartilhado). Configurado em `src/infra/auth/auth.module.ts`, chaves vêm de `JWT_PRIVATE_KEY`/`JWT_PUBLIC_KEY` (base64) no `.env`.
- **Proteção de rota**: `@UseGuards(JwtAuthGuard)` no controller → `JwtAuthGuard extends AuthGuard('jwt')` (Passport) → `JwtStrategy.validate()` decodifica o payload (`{ sub: string }`, validado com Zod) e injeta em `request.user`.
- **Pegar o usuário atual**: decorator `@CurrentUser() user: UserPayload` (`src/infra/auth/current-user-decorator.ts`) lê `request.user`.
- **Camada de criptografia** (`domain/forum/application/cryptography/`): dois contratos separados, `HashGenerator` (só gera hash) e `HashComparator` (só compara) — separados porque `RegisterStudentUseCase` só precisa de um, `AuthenticateStudentUseCase` só do outro (Interface Segregation). Implementados por uma única classe, `BcryptHasher` (`src/infra/cryptography/bcrypt-hasher.ts`), registrada duas vezes no DI (`CryptographyModule`).

---

## 8. Sistema de anexos e upload

1. Cliente faz upload: `POST /attachments` (multipart/form-data, campo `file`) → `UploadAndCreateAttachmentUseCase` valida o `mimetype` (só `image/png`, `image/jpeg`, `application/pdf`; senão `InvalidAttachmentTypeError`, 400) → chama `Uploader.upload()` → cria um `Attachment` (título = nome original do arquivo, link = URL devolvida pelo uploader) → persiste via `AttachmentsRepository` → devolve `{ id, title, url }`.
2. O `id` desse anexo pode então ser passado em `attachments: [id]` ao criar/editar uma pergunta ou resposta (`POST /questions`, `PUT /questions/:id`, `POST /questions/:id/answers`, `PUT /answers/:id`) — o Use Case vincula esse `Attachment` já existente à pergunta/resposta (não cria um novo).

**Contrato** (`domain/forum/application/storage/uploader.ts`):

```ts
export abstract class Uploader {
  abstract upload(params: { fileName: string; fileType: string; body: Buffer }): Promise<{ url: string }>
}
```

**Duas implementações**, escolhidas automaticamente pelo `StorageModule` conforme o `.env`:

| Implementação | Quando é usada | Como funciona |
|---|---|---|
| `FsUploader` | padrão (sem `CLOUDFLARE_ACCOUNT_ID` no `.env`) | grava em `./uploads/<uuid><extensão>` no disco local; `main.ts` serve essa pasta estaticamente em `/uploads` |
| `R2Storage` | se `CLOUDFLARE_ACCOUNT_ID` estiver definida | usa `@aws-sdk/client-s3` apontado pro endpoint S3-compatível da Cloudflare R2 (`https://<account>.r2.cloudflarestorage.com`), monta a URL pública a partir de `CLOUDFLARE_PUBLIC_URL` |

Nenhum código de domínio ou Use Case conhece qual das duas está em uso — só dependem do contrato `Uploader`.

---

## 9. Eventos de domínio e notificações

Mecanismo (`src/core/events/domain-events.ts`) é um **registry estático em memória**, não uma fila externa (nada de RabbitMQ/Kafka aqui):

```
1. Uma entidade AggregateRoot chama this.addDomainEvent(evento) num setter
   (ex: Question.bestAnswerId= dispara QuestionBestAnswerChosenEvent)
   → isso também chama DomainEvents.markAggregateForDispatch(this)

2. Um subscriber (ex: OnQuestionBestAnswerChosen), ao ser instanciado pelo Nest
   (é um @Injectable() listado em EventsModule.providers, então o Nest cria
   uma instância no boot da aplicação), roda no construtor:
     DomainEvents.register(callback, 'QuestionBestAnswerChosenEvent')
   → registra o handler num Record<nomeDoEvento, callback[]> estático

3. Depois que o repositório Prisma persiste a mudança:
     await DomainEvents.dispatchEventsForAggregate(question.id)
   → acha o agregado marcado, dispara todos os eventos pendentes pros handlers
     registrados, limpa a lista
```

Os 4 subscribers (`domain/notification/application/subscribers/`), todos chamando `SendNotificationUseCase` como efeito colateral:

| Subscriber | Escuta | Notifica quem | Regra extra |
|---|---|---|---|
| `OnAnswerCreated` | `AnswerCreatedEvent` | autor da pergunta | — |
| `OnQuestionBestAnswerChosen` | `QuestionBestAnswerChosenEvent` | autor da resposta escolhida | — |
| `OnQuestionCommentCreated` | `QuestionCommentCreatedEvent` | autor da pergunta | **não** notifica se o autor comentou na própria pergunta |
| `OnAnswerCommentCreated` | `AnswerCommentCreatedEvent` | autor da resposta | **não** notifica se o autor comentou na própria resposta |

Todo esse fluxo está coberto por e2e reais em `src/infra/events/domain-events.e2e-spec.ts` — cada um dos 4 eventos é disparado via HTTP de verdade e a notificação é conferida direto no Postgres.

`SendNotificationUseCase` não tem Controller — é proposital: só pode ser disparado internamente pelos subscribers, nunca diretamente por um cliente HTTP (senão qualquer usuário autenticado poderia mandar notificação pra qualquer outro).

---

## 10. Persistência (Prisma)

Schema em `prisma/schema.prisma`, 6 tabelas:

```
User (users)
├─ Question[]        (author)
├─ Answer[]           (author)
├─ QuestionComment[]  (author)
├─ AnswerComment[]    (author)
└─ Notification[]     (recipient)

Question (questions)
├─ author: User
├─ bestAnswer: Answer?     (FK única, onDelete: SetNull)
├─ answers: Answer[]
├─ comments: QuestionComment[]
└─ attachments: Attachment[]

Answer (answers)
├─ author: User
├─ question: Question      (onDelete: Cascade)
├─ bestAnswerOf: Question? (lado inverso de Question.bestAnswer)
├─ comments: AnswerComment[]
└─ attachments: Attachment[]

Attachment (attachments)  — questionId e answerId são NULLABLE e mutuamente exclusivos na prática
├─ question: Question? (onDelete: Cascade)
└─ answer: Answer?     (onDelete: Cascade)

Notification (notifications)
└─ recipient: User
```

Pontos importantes:
- `Question.slug` é `@unique` — por isso o `QuestionFactory` (usado nos testes e2e) sempre gera um slug com `randomUUID()` embutido por padrão, pra evitar colisão entre testes.
- `User` não pode ser deletado enquanto tiver `Question`/`Answer`/`Notification` referenciando (FK sem `onDelete: Cascade` = `RESTRICT` por padrão do Postgres) — verificado na prática durante limpeza de dados de teste nesta sessão.
- `Attachment.questionId`/`answerId` nulos = anexo "órfão" (enviado via upload mas ainda não vinculado a nada).

Cada model tem exatamente um mapper (`toDomain`/`toPrisma`) e, quando aplicável, um mapper "Details" adicional pro join com autor/anexos (seção 5.3).

---

## 11. Tratamento de erros

Hierarquia de erros de domínio (todos implementam `UseCaseError { message: string }`):

| Erro | HTTP status | Onde é usado |
|---|---|---|
| `ResourceNotFoundError` | 404 | recurso não existe (pergunta, resposta, comentário, notificação) |
| `NotAllowedError` | 403 | usuário autenticado não é o dono do recurso |
| `StudentAlreadyExistsError` | 409 | e-mail já cadastrado |
| `WrongCredentialsError` | 401 | login com e-mail/senha errados |
| `InvalidAttachmentTypeError` | 400 | upload de arquivo com mimetype não permitido |

O `DomainExceptionFilter` (`src/infra/http/filters/domain-exception.filter.ts`), registrado globalmente em `main.ts` (`app.useGlobalFilters(...)`), intercepta qualquer `throw` desses tipos e devolve `{ statusCode, message }` no formato certo. O Controller nunca decide o status HTTP diretamente — só faz `throw result.value` quando o Use Case devolve `left(...)`.

---

## 12. Rotas HTTP (referência completa)

Todas exigem `Authorization: Bearer <token>` exceto `/accounts` e `/sessions`.

| Método | Rota | Use Case | O que faz |
|---|---|---|---|
| `POST` | `/accounts` | `RegisterStudentUseCase` | cadastro |
| `POST` | `/sessions` | `AuthenticateStudentUseCase` | login, devolve `access_token` |
| `POST` | `/attachments` | `UploadAndCreateAttachmentUseCase` | upload de arquivo (multipart) |
| `POST` | `/questions` | `CreateQuestionUseCase` | criar pergunta |
| `GET` | `/questions` | `FetchRecentQuestionsUseCase` | listar perguntas recentes (paginado) |
| `GET` | `/questions/:slug` | `GetQuestionBySlugUseCase` | detalhe de uma pergunta (com autor + anexos) |
| `PUT` | `/questions/:id` | `EditQuestionUseCase` | editar pergunta (só o autor) |
| `DELETE` | `/questions/:id` | `DeleteQuestionUseCase` | deletar pergunta (só o autor) |
| `POST` | `/questions/:questionId/answers` | `AnswerQuestionUseCase` | responder pergunta |
| `GET` | `/questions/:questionId/answers` | `FetchQuestionAnswersUseCase` | listar respostas (com autor + anexos, paginado) |
| `PUT` | `/answers/:id` | `EditAnswerUseCase` | editar resposta (só o autor) |
| `DELETE` | `/answers/:id` | `DeleteAnswerUseCase` | deletar resposta (só o autor) |
| `PATCH` | `/answers/:answerId/choose-as-best` | `ChooseQuestionBestAnswerUseCase` | escolher melhor resposta (só o autor da pergunta) |
| `POST` | `/questions/:questionId/comments` | `CommentOnQuestionUseCase` | comentar pergunta |
| `GET` | `/questions/:questionId/comments` | `FetchQuestionComments` | listar comentários (com autor, paginado) |
| `DELETE` | `/questions/comments/:id` | `DeleteQuestionCommentUseCase` | deletar comentário (só o autor) |
| `POST` | `/answers/:answerId/comments` | `CommentOnAnswerUseCase` | comentar resposta |
| `GET` | `/answers/:answerId/comments` | `FetchAnswerComments` | listar comentários (com autor, paginado) |
| `DELETE` | `/answers/comments/:id` | `DeleteAnswerCommentUseCase` | deletar comentário (só o autor) |
| `PATCH` | `/notifications/:id/read` | `ReadNotificationUseCase` | marcar notificação como lida (só o destinatário) |

Paginação: query param `?page=N` (default 1, mínimo 1), 20 itens por página, validado por `pageQueryParamPipe`.

---

## 13. Estratégia de testes

**Duas camadas, dois propósitos diferentes:**

### Unitários (`*.spec.ts`, `npm run test`)

Testam um Use Case isolado, sem banco de dados — usam repositórios **em memória** (`test/repositories/in-memory-*.ts`), que implementam a mesma interface (`abstract class`) que a versão Prisma, guardando tudo num array. Rápido (< 3s a suíte inteira), não precisa de Docker.

```ts
beforeEach(() => {
  inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
  sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
})
```

Entidades de teste são construídas com as `make-*.ts` (`test/factories/`) — funções puras que criam uma entidade de domínio com dados aleatórios via `@faker-js/faker`, com qualquer prop sobrescrevível:

```ts
makeQuestion({ authorId: student.id, title: 'Uma pergunta específica' })
```

### E2E (`*.e2e-spec.ts`, `npm run test:e2e`)

Sobem a aplicação Nest inteira (`test/e2e/setup-app.ts`) e batem via HTTP real (Supertest) contra um Postgres real (do `docker-compose.yml`). Verificam o comportamento de ponta a ponta: request → banco → response.

Para popular dados de setup, em vez de chamar `PrismaService` direto no spec, usam-se **factories injetáveis** (mesmo arquivo `make-*.ts`, uma classe `@Injectable()` a mais por baixo da função pura):

```ts
@Injectable()
export class StudentFactory {
  constructor(private prisma: PrismaService) {}
  async makePrismaStudent(override = {}) {
    const student = makeStudent(override)
    await this.prisma.user.create({ data: PrismaStudentMapper.toPrisma(student) })
    return student
  }
}
```

Essas factories (`StudentFactory`, `QuestionFactory`, `AttachmentFactory`) ficam registradas em `test/factories/factories.module.ts`, importado junto com o `AppModule` em `createE2EApp()` — assim qualquer spec e2e só chama `studentFactory.makePrismaStudent()` em vez de escrever `prisma.user.create({ data: {...} })` na mão.

### Cobertura atual

- **Unitários**: 28 arquivos / 53 testes — cobrem todo Use Case do domínio.
- **E2E**: 8 arquivos / 18 testes — cobrem os fluxos HTTP principais (cadastro, login, criar/editar pergunta com anexo, fluxo completo de responder+escolher melhor resposta, os 4 eventos de domínio disparando notificação, tradução de erro de domínio pra status HTTP).

---

## 14. Glossário

| Termo | Significado |
|---|---|
| **Aggregate / AggregateRoot** | Entidade que é "raiz" de um agrupamento e pode disparar eventos de domínio |
| **Bounded context** | Fronteira de um subdomínio (aqui: `forum` e `notification`) — cada um com seu próprio vocabulário e regras |
| **DDD** | Domain-Driven Design — modelar o código em volta do domínio de negócio, não do banco de dados |
| **Either** | Tipo que representa "ou deu erro (Left) ou deu certo (Right)" — erro como valor de retorno, não exception |
| **Entity** | Objeto com identidade própria (`id`), igualdade por ID |
| **Mapper** | Converte entre a forma de domínio e a forma de persistência (Prisma) |
| **Port / Adapter** | Port = interface definida pelo domínio; Adapter = implementação concreta na infra |
| **Presenter** | Converte entidade/Value Object de domínio pro JSON de resposta HTTP |
| **Repository** | Abstração de "onde os dados moram" — interface no domínio, implementação Prisma na infra |
| **Use Case** | Uma ação de negócio isolada numa classe, orquestrando entidades + repositórios |
| **Value Object** | Objeto sem identidade própria, igualdade por valor das props |
