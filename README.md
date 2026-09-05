# 當代中文課程 3 — Vocabulary & Grammar Companion

*[Tiếng Việt](README.vi.md)*

A Nuxt 4 web app for studying the vocabulary, grammar, and workbook exercises of *當代中文課程 3* (A Course in Contemporary Chinese, Book 3 — MTC/NTNU), aimed at **TOCFL B1**. The UI is in Vietnamese.

- **12 complete lessons**: dialogues, vocabulary, grammar points, and workbook (作業本) exercises.
- **Spaced-repetition review (SRS)**: a reduced SM-2 algorithm with 4 grades (Again / Hard / Good / Easy); each day's queue is due cards plus a capped batch of new cards.
- **Listening exercises**: every lesson has a listening section with audio (`public/audio/workbook/*.mp3`, stored via Git LFS).
- **Hanzi writing practice**: stroke-order drills (hanzi-writer).
- **Cross-lesson vocab linking**: words that share a Hanzi character are grouped automatically, no matter which lesson they belong to.
- **Multi-user**: self-service email/password registration or Google OAuth; each account has its own isolated learning data (SRS, streak, exercise progress).
- **Daily streak** with a "freeze" mechanism so a missed day doesn't break the streak.
- **Exercise progress is stored server-side**: start on one device, resume on another.
- Toggle pinyin / meaning / simplified vs. traditional; text-to-speech; auto-advance on a correct answer.

## Requirements

- **Node.js 24** (development is tested on v24.x) — uses the built-in `node:sqlite` module, so no external SQLite driver is needed.
- npm.

## Setup

```bash
npm install
```

Create a `.env` file in the project root (see `.env.example`):

- `NUXT_SESSION_PASSWORD` — **required**. A secret string of at least 32 characters used to encrypt the login session cookie. Generate one with:
  ```bash
  node -e "console.log(require('node:crypto').randomBytes(24).toString('hex'))"
  ```
- `NUXT_OAUTH_GOOGLE_CLIENT_ID`, `NUXT_OAUTH_GOOGLE_CLIENT_SECRET` — **optional**, needed only to enable the "Sign in with Google" button. Without them, email/password registration still works.

  Create credentials at [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) → **Create Credentials → OAuth client ID → Web application**. Add an **Authorized redirect URI**:
  - Local dev: `http://localhost:3000/api/auth/google`
  - Production: `https://<your-domain>/api/auth/google`

  (On first setup Google may require you to configure the "OAuth consent screen" first — choose **External**, fill in the app name, and add your own email under Test users if the app is still in Testing mode.)

Registration is open — there is no allowlist. A Google account is automatically linked to an existing email/password account if the verified email matches.

## Development

```bash
npm run dev          # http://localhost:3000
```

Open the app, then register with email/password or sign in with Google. Every route requires authentication except `/login`.

## Testing & code quality

```bash
npm run test          # vitest: SRS algorithm, streak logic, vocab linking
npm run test:watch    # vitest in watch mode
npx vitest run path/to/file.spec.ts   # run a single test file
npx nuxi typecheck    # project-wide TypeScript check
npx eslint .           # lint
```

## Project structure

**Lessons are data, not a CMS.** Each lesson is a plain TS module at `app/data/lessons/lesson-NN.ts` (dialogues, vocab, grammar, exercises), combined in `app/data/lessons/index.ts`. Listening exercises live separately under `app/data/lessons/listening/` and are merged into each lesson when the list is built. Adding a lesson means creating a `lesson-NN.ts` file and importing it in `index.ts` — no UI code changes needed. Lesson content shapes are defined in `types/` (`lesson.ts`, `vocab.ts`, `grammar.ts`, `exercise.ts`), which is the contract the data files must satisfy.

**SRS splits pure logic from storage.** `shared/utils/srsAlgorithm.ts` is a side-effect-free reduced SM-2 implementation, shared by both the server route and the tests. **The server is the single source of truth** for review progress:

- `server/api/srs/*`, `server/api/streak/*`, `server/api/workbook/*` — the API, backed by SQLite via `server/database/connection.ts` (the `node:sqlite` module, one file at `server/database/app.db`, **not checked into git**).
- Every SRS / streak / exercise table is keyed by `user_id` (`server/utils/srsRepository.ts`, `streakRepository.ts`, `workbookRepository.ts`) — routes read the id off `requireUserSession(event)`, so each account's data is isolated.
- The frontend never computes SRS state itself: `app/composables/useSrsStorage.ts` is a thin `$fetch` wrapper around the API, and `useDailyReview.ts` builds the review-session queue from it. A device's local session state is disposable; grading always round-trips through the server for multi-device sync.

**Auth.** `nuxt-auth-utils` manages the session cookie for two login paths that both resolve to a row in the `users` table (`server/utils/userRepository.ts`): Google OAuth (`server/api/auth/google.get.ts`) and email/password (`register.post.ts`, `login.post.ts`, hashed with `node:crypto` scrypt in `server/utils/password.ts`). `app/middleware/auth.global.ts` redirects any unauthenticated request to `/login`.

**Cross-lesson vocab linking.** `app/utils/vocabRelations.ts` builds a `character -> VocabItem[]` index across **all loaded lessons** (`buildCharacterIndex`), used to show "related words" that share a Hanzi character with the current word.

**Exercises.** `types/exercise.ts` defines a discriminated union (`multiple-choice`, `fill-blank`, `matching`, `dialogue-completion`, `composition`, listening) keyed by workbook section. Each type has a matching component under `app/components/exercise/`, dispatched by `ExerciseWrapper.vue`.

**Path aliases.** `#shared` → `shared/` (cross-boundary pure logic such as the SRS algorithm); `~` → `app/`. Configured in `vitest.config.ts` as well as Nuxt's defaults, since vitest runs outside the Nuxt build pipeline.

### Main routes

| Route | Content |
| --- | --- |
| `/` | Lesson list |
| `/lessons/[id]` | Lesson detail: dialogues, vocab, grammar, exercises |
| `/review` | Daily SRS review session |
| `/writing` | Hanzi stroke-order practice |
| `/characters` | Hanzi lookup & related words |
| `/profile` | Profile, streak, stats |
| `/login` | Register / sign in |

## Build & deployment

```bash
npm run build
node .output/server/index.mjs
```

Because it uses SQLite on local disk, the app needs a host with durable storage (not an ephemeral serverless environment). Full deployment instructions for a free VPS (Google Cloud `e2-micro` + Caddy + systemd), including Git LFS setup for the listening audio, are in [`deploy/README.md`](deploy/README.md).

## Source material

The textbook and workbook PDFs (`當代中文課程3 – 課本.pdf`, `當代中文課程3 – 作業本.pdf`) are not checked into git (large, copyrighted). Drop them in the project root if you need them for reference while authoring lesson data.
