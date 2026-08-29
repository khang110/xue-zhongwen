# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nuxt 4 app for studying vocabulary and grammar from the Chinese textbook *當代中文課程 3* (A Course in Contemporary Chinese, Book 3), targeting TOCFL B1. UI is in Vietnamese. Multi-user (self-service email/password registration or Google OAuth, each account has isolated data), spaced-repetition review, cross-lesson vocab linking by shared Hanzi character, and Hanzi stroke-order writing practice.

## Commands

```bash
npm run dev              # dev server at localhost:3000
npm run build             # production build -> .output/
node .output/server/index.mjs   # run production build

npm run test              # vitest run (SRS algorithm, vocab-relation logic)
npm run test:watch        # vitest watch mode
npx vitest run path/to/file.spec.ts   # run a single test file
npx vitest run -t "test name"          # run tests matching a name

npx nuxi typecheck        # project-wide TypeScript check
npx eslint .               # lint
```

Requires a `.env` (see `.env.example`) with `NUXT_SESSION_PASSWORD` and, optionally, Google OAuth credentials to enable "Login with Google" alongside self-service email/password registration.

Build/VPS deployment steps (GCP `e2-micro` + Caddy + systemd) live in `deploy/README.md`; not needed for normal dev work.

## Architecture

**Data-driven lessons, not a CMS.** Each lesson is a plain TS module under `app/data/lessons/lesson-NN.ts` (dialogues, vocab, grammar, workbook exercises), exported and combined in `app/data/lessons/index.ts`. Lessons not yet written are `stubLesson(...)` entries with `status: 'coming-soon'` and empty content arrays. Adding a lesson means creating a new `lesson-NN.ts` and importing it in `index.ts` — no UI code changes needed. Shapes for all lesson content are defined in `types/` (`lesson.ts`, `vocab.ts`, `grammar.ts`, `exercise.ts`), which is the contract lesson data files must satisfy.

**SRS split between pure logic and storage.** `shared/utils/srsAlgorithm.ts` is a pure, storage-free implementation of a reduced SM-2 algorithm (4 grades: Again/Hard/Good/Easy) — it's imported by both the server route and the vitest spec, and must stay side-effect-free. The server is the single source of truth for review progress (`server/api/srs/*`, backed by SQLite via `server/database/connection.ts` using Node's built-in `node:sqlite`, single file at `server/database/app.db`, not checked into git). Every SRS/streak table is keyed by `user_id` (see `server/utils/srsRepository.ts`, `server/utils/streakRepository.ts`) — routes pull the id off `requireUserSession(event)` and thread it through, so each account's progress is isolated. The frontend never computes SRS state itself: `app/composables/useSrsStorage.ts` is a thin `$fetch` wrapper around the API, and `app/composables/useDailyReview.ts` builds a session queue (due cards + capped batch of new cards) from that. This split matters for multi-device sync — a device's local session state is disposable, but grading always round-trips through the server.

**Auth.** `nuxt-auth-utils` handles session cookies for two login paths that both resolve to a row in the `users` table (`server/utils/userRepository.ts`): Google OAuth (`server/api/auth/google.get.ts`, auto-linking by verified email if a password account already exists with that address) and email/password (`server/api/auth/register.post.ts`, `server/api/auth/login.post.ts`, hashed with `node:crypto` scrypt in `server/utils/password.ts`). Registration is open — no allowlist. `app/middleware/auth.global.ts` is a global route middleware redirecting any unauthenticated request (except `/login`) to `/login`.

**Vocab cross-linking.** `app/utils/vocabRelations.ts` builds a character -> VocabItem[] index across *all loaded lessons* (`buildCharacterIndex`), used to show "related words" that share a Hanzi character with the current word, regardless of which lesson they're in.

**Exercises.** `types/exercise.ts` defines a discriminated union (`multiple-choice`, `fill-blank`, `matching`, `dialogue-completion`, `composition`) keyed by workbook section (`ExerciseSection`). Each exercise type has a matching component under `app/components/exercise/`, dispatched by `ExerciseWrapper.vue`.

**Path aliases.** `#shared` maps to `shared/` (used for cross-boundary pure logic like the SRS algorithm); `~` maps to `app/`. Both are configured in `vitest.config.ts` as well as Nuxt's defaults, since vitest runs outside the Nuxt build pipeline.
