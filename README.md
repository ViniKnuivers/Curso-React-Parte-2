<div align="center">

# 🗨️ Forum API — NestJS · Clean Architecture · DDD

**API REST de fórum de perguntas e respostas construída com NestJS, Prisma e PostgreSQL, seguindo Clean Architecture e Domain-Driven Design.**

**REST API for a Q&A forum built with NestJS, Prisma and PostgreSQL, following Clean Architecture and Domain-Driven Design.**

[🇧🇷 Português](#-português) · [🇺🇸 English](#-english)

</div>

---

# 🇧🇷 Português

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Modelo de dados](#-modelo-de-dados)
- [Como rodar](#-como-rodar)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Rotas da API](#-rotas-da-api)
- [Testes](#-testes)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Aprendizados](#-aprendizados)
- [Autor](#-autor)

## 📖 Sobre o projeto

API de um fórum no estilo Stack Overflow simplificado: estudantes se cadastram, publicam perguntas (com anexos), outros usuários respondem e comentam, e o autor da pergunta escolhe a melhor resposta. Cada ação relevante gera uma **notificação** para o usuário certo, através de **eventos de domínio**.

O projeto foi desenvolvido durante a formação **Rocketseat Ignite (Node.js)** e tem foco em **arquitetura de software**: a regra de negócio vive isolada do framework, do banco de dados e do HTTP, o que a torna testável sem nenhuma infraestrutura.

> 📚 Um guia de estudo detalhado de todo o projeto está em [`ESTUDO.md`](./ESTUDO.md).

## ✨ Funcionalidades

**Contas e autenticação**
- Cadastro de estudante com senha criptografada (bcrypt)
- Login com JWT assinado em **RS256** (chave pública/privada)
- Rotas protegidas por guard JWT

**Perguntas**
- Criar, editar e excluir perguntas (apenas o autor)
- Slug gerado automaticamente a partir do título
- Buscar pergunta por slug com detalhes (autor + anexos)
- Listar perguntas recentes com paginação (20 por página)

**Respostas**
- Responder perguntas, editar e excluir respostas (apenas o autor)
- Listar respostas de uma pergunta (paginado)
- Escolher a melhor resposta (apenas o autor da pergunta)

**Comentários**
- Comentar em perguntas e em respostas
- Listar comentários com dados do autor (paginado)
- Excluir comentários (apenas o autor)

**Anexos**
- Upload de arquivos `PNG`, `JPEG` e `PDF`
- Armazenamento em **disco local** ou **Cloudflare R2** (compatível com S3), escolhido automaticamente pelas variáveis de ambiente
- Vínculo de anexos a perguntas e respostas (substituídos ao editar)

**Notificações (eventos de domínio)**
- Nova resposta → notifica o autor da pergunta
- Novo comentário na pergunta → notifica o autor da pergunta
- Novo comentário na resposta → notifica o autor da resposta
- Melhor resposta escolhida → notifica o autor da resposta
- Marcar notificação como lida

## 🛠 Tecnologias

| Camada | Tecnologia |
|---|---|
| Runtime / linguagem | Node.js + TypeScript |
| Framework HTTP | NestJS 11 |
| ORM / banco | Prisma 7 + PostgreSQL (`@prisma/adapter-pg`) |
| Validação | Zod 4 + `zod-validation-error` |
| Autenticação | `@nestjs/jwt` + Passport (`passport-jwt`), RS256 |
| Hash de senha | bcryptjs |
| Storage | Sistema de arquivos local ou Cloudflare R2 (`@aws-sdk/client-s3`) |
| Testes | Vitest, Supertest, `@faker-js/faker`, SWC |
| Qualidade | ESLint 9 + Prettier |
| Infra local | Docker Compose |

## 🏛 Arquitetura

O código é dividido em três grandes áreas, com dependências apontando **sempre para dentro** (a infraestrutura conhece o domínio, nunca o contrário):

```
┌────────────────────────────────────────────────────────────┐
│  infra/  — NestJS, Prisma, JWT, bcrypt, R2, controllers     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  domain/*/application/ — casos de uso, contratos de   │  │
│  │  repositórios, storage e criptografia                 │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  domain/*/enterprise/ — entidades, value        │  │  │
│  │  │  objects, agregados e eventos de domínio        │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
                core/ — base compartilhada (Entity, Either, eventos)
```

**Conceitos aplicados:**

- **Bounded contexts:** `forum` (perguntas, respostas, comentários, anexos) e `notification` (notificações), que se comunicam apenas por eventos.
- **Entidades, Value Objects e Aggregate Roots:** `Question` e `Answer` são agregados que disparam eventos; `Slug`, `QuestionDetails` e `CommentWithAuthor` são value objects.
- **Either (programação funcional):** casos de uso retornam `left(erro)` ou `right(resultado)` em vez de lançar exceções.
- **Inversão de dependência:** casos de uso dependem de classes abstratas (`QuestionsRepository`, `Uploader`, `HashGenerator`…); o NestJS injeta as implementações concretas (Prisma, R2, bcrypt).
- **Interface Segregation:** `HashGenerator` e `HashComparator` são contratos separados, implementados pela mesma classe `BcryptHasher`.
- **Domain Events + Subscribers:** o contexto de notificação reage a eventos do fórum sem acoplamento direto.
- **Mappers e Presenters:** conversão entre entidade de domínio ↔ Prisma ↔ resposta HTTP.
- **Filtro global de exceções:** erros de domínio são traduzidos em status HTTP.

| Erro de domínio | Status HTTP |
|---|---|
| `InvalidAttachmentTypeError` | 400 |
| `WrongCredentialsError` | 401 |
| `NotAllowedError` | 403 |
| `ResourceNotFoundError` | 404 |
| `StudentAlreadyExistsError` | 409 |

## 📂 Estrutura de pastas

```
src/
├── core/                       # Base compartilhada
│   ├── entities/               # Entity, AggregateRoot, ValueObject, UniqueEntityID
│   ├── errors/                 # Erros genéricos (NotAllowed, ResourceNotFound)
│   ├── events/                 # DomainEvents, DomainEvent, EventHandler
│   └── either.ts               # Tipo Either (left/right)
│
├── domain/
│   ├── forum/
│   │   ├── enterprise/         # Entidades, value objects e eventos
│   │   └── application/        # Casos de uso + contratos (repositórios, storage, cryptography)
│   └── notification/
│       ├── enterprise/         # Entidade Notification
│       └── application/        # Casos de uso + subscribers de eventos
│
└── infra/                      # Tudo que depende de framework/bibliotecas
    ├── auth/                   # JWT strategy, guard, decorator @CurrentUser
    ├── cryptography/           # BcryptHasher
    ├── database/prisma/        # PrismaService, repositórios e mappers
    ├── events/                 # Registro dos subscribers no Nest
    ├── http/                   # Controllers, presenters, pipes e filtros
    ├── storage/                # FsUploader e R2Storage
    ├── env.ts                  # Validação das variáveis de ambiente (Zod)
    └── main.ts                 # Bootstrap da aplicação

test/
├── factories/                  # Fábricas de entidades com Faker
├── repositories/               # Repositórios in-memory para testes unitários
├── cryptography/ storage/      # Fakes (hasher, uploader)
└── setup-e2e.ts                # Setup dos testes E2E

prisma/
├── schema.prisma
└── migrations/
```

## 🗄 Modelo de dados

```
User (STUDENT | INSTRUCTOR)
 ├── Question ──┬── Answer ──┬── AnswerComment
 │              │            └── Attachment
 │              ├── QuestionComment
 │              ├── Attachment
 │              └── bestAnswer → Answer
 └── Notification
```

Exclusões em cascata: ao remover uma pergunta, suas respostas, comentários e anexos também são removidos. Se a melhor resposta for excluída, `bestAnswerId` volta a `null`.

## 🚀 Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- [Docker](https://www.docker.com/) e Docker Compose
- OpenSSL (para gerar as chaves JWT)

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/ViniKnuivers/Curso-React-Parte-2.git
cd Curso-React-Parte-2

# 2. Instalar as dependências
npm install

# 3. Subir o PostgreSQL
docker compose up -d

# 4. Gerar o par de chaves RS256 para o JWT
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem

# 5. Converter as chaves para base64 (cole o resultado no .env)
base64 -w 0 private_key.pem   # → JWT_PRIVATE_KEY
base64 -w 0 public_key.pem    # → JWT_PUBLIC_KEY

# 6. Criar o arquivo .env (veja a seção abaixo)

# 7. Aplicar as migrations e gerar o Prisma Client
npx prisma migrate deploy
npx prisma generate

# 8. Iniciar em modo desenvolvimento
npm run start:dev
```

A API ficará disponível em **http://localhost:3333**.

> 💡 No macOS, use `base64 -i private_key.pem` no lugar de `base64 -w 0`.

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz:

```env
# Banco de dados (valores do docker-compose.yml)
DATABASE_URL="postgresql://postgres:docker@localhost:5432/nest-clean?schema=public"

# JWT — chaves RSA em base64
JWT_PRIVATE_KEY="..."
JWT_PUBLIC_KEY="..."

# Porta (opcional, padrão 3333)
PORT=3333

# Cloudflare R2 (opcional — sem estas variáveis, os uploads vão para ./uploads)
CLOUDFLARE_ACCOUNT_ID=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_BUCKET_NAME=""
CLOUDFLARE_PUBLIC_URL=""
```

| Variável | Obrigatória | Descrição |
|---|:---:|---|
| `DATABASE_URL` | ✅ | URL de conexão do PostgreSQL |
| `JWT_PRIVATE_KEY` | ✅ | Chave privada RSA em base64 (assina os tokens) |
| `JWT_PUBLIC_KEY` | ✅ | Chave pública RSA em base64 (valida os tokens) |
| `PORT` | ❌ | Porta HTTP (padrão `3333`) |
| `CLOUDFLARE_ACCOUNT_ID` | ❌ | Ativa o storage no R2 quando definida |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | ❌ | Credenciais do bucket R2 |
| `AWS_BUCKET_NAME` | ❌ | Nome do bucket |
| `CLOUDFLARE_PUBLIC_URL` | ❌ | URL pública para acessar os arquivos |

## 📡 Rotas da API

Todas as rotas, exceto **criar conta** e **login**, exigem o header:

```
Authorization: Bearer <access_token>
```

Rotas de listagem aceitam `?page=N` (padrão `1`, 20 itens por página).

### Autenticação

| Método | Rota | Descrição | Corpo |
|---|---|---|---|
| `POST` | `/accounts` | Criar conta | `{ name, email, password }` |
| `POST` | `/sessions` | Login (retorna `access_token`) | `{ email, password }` |

### Perguntas

| Método | Rota | Descrição | Corpo |
|---|---|---|---|
| `POST` | `/questions` | Criar pergunta | `{ title, content, attachments?: uuid[] }` |
| `GET` | `/questions?page=1` | Listar perguntas recentes | — |
| `GET` | `/questions/:slug` | Buscar pergunta por slug | — |
| `PUT` | `/questions/:id` | Editar pergunta | `{ title, content, attachments?: uuid[] }` |
| `DELETE` | `/questions/:id` | Excluir pergunta | — |

### Respostas

| Método | Rota | Descrição | Corpo |
|---|---|---|---|
| `POST` | `/questions/:questionId/answers` | Responder pergunta | `{ content, attachments?: uuid[] }` |
| `GET` | `/questions/:questionId/answers?page=1` | Listar respostas | — |
| `PUT` | `/answers/:id` | Editar resposta | `{ content, attachments?: uuid[] }` |
| `DELETE` | `/answers/:id` | Excluir resposta | — |
| `PATCH` | `/answers/:answerId/choose-as-best` | Escolher como melhor resposta | — |

### Comentários

| Método | Rota | Descrição | Corpo |
|---|---|---|---|
| `POST` | `/questions/:questionId/comments` | Comentar em pergunta | `{ content }` |
| `GET` | `/questions/:questionId/comments?page=1` | Listar comentários da pergunta | — |
| `DELETE` | `/questions/comments/:id` | Excluir comentário da pergunta | — |
| `POST` | `/answers/:answerId/comments` | Comentar em resposta | `{ content }` |
| `GET` | `/answers/:answerId/comments?page=1` | Listar comentários da resposta | — |
| `DELETE` | `/answers/comments/:id` | Excluir comentário da resposta | — |

### Anexos e notificações

| Método | Rota | Descrição | Corpo |
|---|---|---|---|
| `POST` | `/attachments` | Upload de arquivo (`png`, `jpeg`, `pdf`) | `multipart/form-data`, campo `file` |
| `PATCH` | `/notifications/:id/read` | Marcar notificação como lida | — |

### Exemplo de fluxo

```bash
# Criar conta
curl -X POST http://localhost:3333/accounts \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"123456"}'

# Login
curl -X POST http://localhost:3333/sessions \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'
# → { "access_token": "eyJhbGciOiJSUzI1NiIs..." }

# Enviar um anexo
curl -X POST http://localhost:3333/attachments \
  -H "Authorization: Bearer <token>" \
  -F "file=@./imagem.png"
# → { "attachment": { "id": "...", "title": "imagem.png", "url": "..." } }

# Criar pergunta com o anexo
curl -X POST http://localhost:3333/questions \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Como usar DDD?","content":"Alguém pode explicar?","attachments":["<attachment-id>"]}'
```

> O arquivo [`client.http`](./client.http) traz requisições prontas para a extensão **REST Client** do VS Code.

## 🧪 Testes

O projeto tem duas camadas de testes:

- **Unitários (28 arquivos):** testam casos de uso, entidades, value objects e subscribers usando **repositórios in-memory** e fakes — sem banco, sem HTTP, executam em milissegundos.
- **End-to-end (8 arquivos):** sobem a aplicação NestJS completa e fazem requisições reais com **Supertest** contra o PostgreSQL.

```bash
npm run test         # unitários
npm run test:watch   # unitários em modo watch
npm run test:cov     # cobertura
npm run test:e2e     # end-to-end (requer o Postgres rodando)
```

## 📜 Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run start:dev` | Inicia em modo desenvolvimento (watch) |
| `npm run start:debug` | Inicia com debugger |
| `npm run build` | Compila para `dist/` |
| `npm run start:prod` | Executa a versão compilada |
| `npm run lint` / `lint:fix` | Verifica / corrige o código com ESLint |
| `npm run format` / `format:check` | Formata / verifica com Prettier |

## 🎓 Aprendizados

- Separar **regra de negócio** de **detalhes de infraestrutura**, de forma que trocar Prisma, NestJS ou o provedor de storage não afete o domínio
- Modelar o domínio com **entidades, agregados, value objects e eventos**
- Comunicar contextos diferentes de forma desacoplada com **Domain Events**
- Tratar erros de forma explícita com o padrão **Either**
- Autenticação com **JWT assimétrico (RS256)**
- Upload de arquivos com **storage plugável** (local ou nuvem compatível com S3)
- Escrever **testes unitários rápidos** com repositórios in-memory e **testes E2E** com Supertest

## 👤 Autor

**Vinicius Knuivers**

- GitHub: [@ViniKnuivers](https://github.com/ViniKnuivers)
- E-mail: [vini.knui@gmail.com](mailto:vini.knui@gmail.com)

Projeto desenvolvido durante a formação **Ignite — Rocketseat**.

<div align="right"><a href="#-forum-api--nestjs--clean-architecture--ddd">⬆ Voltar ao topo</a></div>

---

# 🇺🇸 English

## 📑 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Folder Structure](#-folder-structure)
- [Data Model](#-data-model)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Routes](#-api-routes)
- [Tests](#-tests)
- [Available Scripts](#-available-scripts)
- [What I Learned](#-what-i-learned)
- [Author](#-author-1)

## 📖 About

A simplified Stack Overflow–style forum API: students sign up, post questions (with attachments), other users answer and comment, and the question author picks the best answer. Every relevant action creates a **notification** for the right user through **domain events**.

The project was built during the **Rocketseat Ignite (Node.js)** program and focuses on **software architecture**: business rules are isolated from the framework, the database and HTTP, which makes them testable without any infrastructure.

> 📚 A detailed study guide for the whole project (in Portuguese) is available in [`ESTUDO.md`](./ESTUDO.md).

## ✨ Features

**Accounts & authentication**
- Student sign-up with hashed passwords (bcrypt)
- Login with JWT signed using **RS256** (public/private key pair)
- Routes protected by a JWT guard

**Questions**
- Create, edit and delete questions (author only)
- Slug automatically generated from the title
- Get a question by slug with details (author + attachments)
- List recent questions with pagination (20 per page)

**Answers**
- Answer questions, edit and delete answers (author only)
- List a question's answers (paginated)
- Choose the best answer (question author only)

**Comments**
- Comment on questions and answers
- List comments with author data (paginated)
- Delete comments (author only)

**Attachments**
- Upload `PNG`, `JPEG` and `PDF` files
- Storage on **local disk** or **Cloudflare R2** (S3-compatible), selected automatically from environment variables
- Link attachments to questions and answers (replaced on edit)

**Notifications (domain events)**
- New answer → notifies the question author
- New comment on a question → notifies the question author
- New comment on an answer → notifies the answer author
- Best answer chosen → notifies the answer author
- Mark a notification as read

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Runtime / language | Node.js + TypeScript |
| HTTP framework | NestJS 11 |
| ORM / database | Prisma 7 + PostgreSQL (`@prisma/adapter-pg`) |
| Validation | Zod 4 + `zod-validation-error` |
| Authentication | `@nestjs/jwt` + Passport (`passport-jwt`), RS256 |
| Password hashing | bcryptjs |
| Storage | Local file system or Cloudflare R2 (`@aws-sdk/client-s3`) |
| Testing | Vitest, Supertest, `@faker-js/faker`, SWC |
| Code quality | ESLint 9 + Prettier |
| Local infra | Docker Compose |

## 🏛 Architecture

The code is split into three main areas, with dependencies **always pointing inward** (infrastructure knows the domain, never the other way around):

```
┌────────────────────────────────────────────────────────────┐
│  infra/  — NestJS, Prisma, JWT, bcrypt, R2, controllers     │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  domain/*/application/ — use cases, repository,       │  │
│  │  storage and cryptography contracts                   │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  domain/*/enterprise/ — entities, value         │  │  │
│  │  │  objects, aggregates and domain events          │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
          core/ — shared building blocks (Entity, Either, events)
```

**Concepts applied:**

- **Bounded contexts:** `forum` (questions, answers, comments, attachments) and `notification`, which communicate only through events.
- **Entities, Value Objects and Aggregate Roots:** `Question` and `Answer` are aggregates that raise events; `Slug`, `QuestionDetails` and `CommentWithAuthor` are value objects.
- **Either (functional error handling):** use cases return `left(error)` or `right(result)` instead of throwing.
- **Dependency inversion:** use cases depend on abstract classes (`QuestionsRepository`, `Uploader`, `HashGenerator`…); NestJS injects the concrete implementations (Prisma, R2, bcrypt).
- **Interface Segregation:** `HashGenerator` and `HashComparator` are separate contracts implemented by a single `BcryptHasher` class.
- **Domain Events + Subscribers:** the notification context reacts to forum events without direct coupling.
- **Mappers and Presenters:** conversion between domain entity ↔ Prisma ↔ HTTP response.
- **Global exception filter:** domain errors are translated into HTTP status codes.

| Domain error | HTTP status |
|---|---|
| `InvalidAttachmentTypeError` | 400 |
| `WrongCredentialsError` | 401 |
| `NotAllowedError` | 403 |
| `ResourceNotFoundError` | 404 |
| `StudentAlreadyExistsError` | 409 |

## 📂 Folder Structure

```
src/
├── core/                       # Shared building blocks
│   ├── entities/               # Entity, AggregateRoot, ValueObject, UniqueEntityID
│   ├── errors/                 # Generic errors (NotAllowed, ResourceNotFound)
│   ├── events/                 # DomainEvents, DomainEvent, EventHandler
│   └── either.ts               # Either type (left/right)
│
├── domain/
│   ├── forum/
│   │   ├── enterprise/         # Entities, value objects and events
│   │   └── application/        # Use cases + contracts (repositories, storage, cryptography)
│   └── notification/
│       ├── enterprise/         # Notification entity
│       └── application/        # Use cases + event subscribers
│
└── infra/                      # Everything that depends on frameworks/libraries
    ├── auth/                   # JWT strategy, guard, @CurrentUser decorator
    ├── cryptography/           # BcryptHasher
    ├── database/prisma/        # PrismaService, repositories and mappers
    ├── events/                 # Registers subscribers in Nest
    ├── http/                   # Controllers, presenters, pipes and filters
    ├── storage/                # FsUploader and R2Storage
    ├── env.ts                  # Environment variable validation (Zod)
    └── main.ts                 # App bootstrap

test/
├── factories/                  # Entity factories using Faker
├── repositories/               # In-memory repositories for unit tests
├── cryptography/ storage/      # Fakes (hasher, uploader)
└── setup-e2e.ts                # E2E test setup

prisma/
├── schema.prisma
└── migrations/
```

## 🗄 Data Model

```
User (STUDENT | INSTRUCTOR)
 ├── Question ──┬── Answer ──┬── AnswerComment
 │              │            └── Attachment
 │              ├── QuestionComment
 │              ├── Attachment
 │              └── bestAnswer → Answer
 └── Notification
```

Cascade deletes: removing a question also removes its answers, comments and attachments. If the best answer is deleted, `bestAnswerId` is set back to `null`.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [Docker](https://www.docker.com/) and Docker Compose
- OpenSSL (to generate the JWT keys)

### Step by step

```bash
# 1. Clone the repository
git clone https://github.com/ViniKnuivers/Curso-React-Parte-2.git
cd Curso-React-Parte-2

# 2. Install dependencies
npm install

# 3. Start PostgreSQL
docker compose up -d

# 4. Generate the RS256 key pair for JWT
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem

# 5. Convert the keys to base64 (paste the output into .env)
base64 -w 0 private_key.pem   # → JWT_PRIVATE_KEY
base64 -w 0 public_key.pem    # → JWT_PUBLIC_KEY

# 6. Create the .env file (see the section below)

# 7. Apply migrations and generate the Prisma Client
npx prisma migrate deploy
npx prisma generate

# 8. Start in development mode
npm run start:dev
```

The API will be available at **http://localhost:3333**.

> 💡 On macOS, use `base64 -i private_key.pem` instead of `base64 -w 0`.

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
# Database (values from docker-compose.yml)
DATABASE_URL="postgresql://postgres:docker@localhost:5432/nest-clean?schema=public"

# JWT — RSA keys in base64
JWT_PRIVATE_KEY="..."
JWT_PUBLIC_KEY="..."

# Port (optional, default 3333)
PORT=3333

# Cloudflare R2 (optional — without these, uploads go to ./uploads)
CLOUDFLARE_ACCOUNT_ID=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_BUCKET_NAME=""
CLOUDFLARE_PUBLIC_URL=""
```

| Variable | Required | Description |
|---|:---:|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection URL |
| `JWT_PRIVATE_KEY` | ✅ | Base64 RSA private key (signs tokens) |
| `JWT_PUBLIC_KEY` | ✅ | Base64 RSA public key (verifies tokens) |
| `PORT` | ❌ | HTTP port (default `3333`) |
| `CLOUDFLARE_ACCOUNT_ID` | ❌ | Enables R2 storage when set |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | ❌ | R2 bucket credentials |
| `AWS_BUCKET_NAME` | ❌ | Bucket name |
| `CLOUDFLARE_PUBLIC_URL` | ❌ | Public URL used to access files |

## 📡 API Routes

All routes except **create account** and **login** require the header:

```
Authorization: Bearer <access_token>
```

List routes accept `?page=N` (default `1`, 20 items per page).

### Authentication

| Method | Route | Description | Body |
|---|---|---|---|
| `POST` | `/accounts` | Create account | `{ name, email, password }` |
| `POST` | `/sessions` | Log in (returns `access_token`) | `{ email, password }` |

### Questions

| Method | Route | Description | Body |
|---|---|---|---|
| `POST` | `/questions` | Create question | `{ title, content, attachments?: uuid[] }` |
| `GET` | `/questions?page=1` | List recent questions | — |
| `GET` | `/questions/:slug` | Get question by slug | — |
| `PUT` | `/questions/:id` | Edit question | `{ title, content, attachments?: uuid[] }` |
| `DELETE` | `/questions/:id` | Delete question | — |

### Answers

| Method | Route | Description | Body |
|---|---|---|---|
| `POST` | `/questions/:questionId/answers` | Answer a question | `{ content, attachments?: uuid[] }` |
| `GET` | `/questions/:questionId/answers?page=1` | List answers | — |
| `PUT` | `/answers/:id` | Edit answer | `{ content, attachments?: uuid[] }` |
| `DELETE` | `/answers/:id` | Delete answer | — |
| `PATCH` | `/answers/:answerId/choose-as-best` | Choose as best answer | — |

### Comments

| Method | Route | Description | Body |
|---|---|---|---|
| `POST` | `/questions/:questionId/comments` | Comment on a question | `{ content }` |
| `GET` | `/questions/:questionId/comments?page=1` | List question comments | — |
| `DELETE` | `/questions/comments/:id` | Delete question comment | — |
| `POST` | `/answers/:answerId/comments` | Comment on an answer | `{ content }` |
| `GET` | `/answers/:answerId/comments?page=1` | List answer comments | — |
| `DELETE` | `/answers/comments/:id` | Delete answer comment | — |

### Attachments & notifications

| Method | Route | Description | Body |
|---|---|---|---|
| `POST` | `/attachments` | Upload a file (`png`, `jpeg`, `pdf`) | `multipart/form-data`, field `file` |
| `PATCH` | `/notifications/:id/read` | Mark notification as read | — |

### Example flow

```bash
# Create an account
curl -X POST http://localhost:3333/accounts \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"123456"}'

# Log in
curl -X POST http://localhost:3333/sessions \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'
# → { "access_token": "eyJhbGciOiJSUzI1NiIs..." }

# Upload an attachment
curl -X POST http://localhost:3333/attachments \
  -H "Authorization: Bearer <token>" \
  -F "file=@./image.png"
# → { "attachment": { "id": "...", "title": "image.png", "url": "..." } }

# Create a question with the attachment
curl -X POST http://localhost:3333/questions \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"title":"How to use DDD?","content":"Can someone explain?","attachments":["<attachment-id>"]}'
```

> The [`client.http`](./client.http) file contains ready-to-use requests for the VS Code **REST Client** extension.

## 🧪 Tests

The project has two test layers:

- **Unit (28 files):** cover use cases, entities, value objects and subscribers using **in-memory repositories** and fakes — no database, no HTTP, runs in milliseconds.
- **End-to-end (8 files):** boot the full NestJS app and make real requests with **Supertest** against PostgreSQL.

```bash
npm run test         # unit
npm run test:watch   # unit in watch mode
npm run test:cov     # coverage
npm run test:e2e     # end-to-end (requires Postgres running)
```

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run start:dev` | Start in development mode (watch) |
| `npm run start:debug` | Start with debugger |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Run the compiled build |
| `npm run lint` / `lint:fix` | Check / fix code with ESLint |
| `npm run format` / `format:check` | Format / check with Prettier |

## 🎓 What I Learned

- Separating **business rules** from **infrastructure details**, so swapping Prisma, NestJS or the storage provider doesn't touch the domain
- Modeling the domain with **entities, aggregates, value objects and events**
- Decoupled communication between contexts with **Domain Events**
- Explicit error handling with the **Either** pattern
- Authentication with **asymmetric JWT (RS256)**
- File uploads with **pluggable storage** (local or S3-compatible cloud)
- Writing **fast unit tests** with in-memory repositories and **E2E tests** with Supertest

## 👤 Author

**Vinicius Knuivers**

- GitHub: [@ViniKnuivers](https://github.com/ViniKnuivers)
- E-mail: [vini.knui@gmail.com](mailto:vini.knui@gmail.com)

Project built during the **Ignite — Rocketseat** program.

<div align="right"><a href="#-forum-api--nestjs--clean-architecture--ddd">⬆ Back to top</a></div>
