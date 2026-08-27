<script setup lang="ts">
import { lessons } from '../data/lessons'

const { clear } = useUserSession()
const useSimplifiedChars = useSimplified()
const route = useRoute()

const currentLessonId = computed(() => (typeof route.params.id === 'string' ? route.params.id : ''))

function handleLessonChange(e: Event) {
  const id = (e.target as HTMLSelectElement).value
  if (id) navigateTo(`/lessons/${id}`)
}

async function handleLogout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <div class="min-h-screen bg-paper">
    <header class="border-b border-paper-line bg-paper/90 backdrop-blur">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-2 px-4 py-3">
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="seal-mark h-7 w-7 shrink-0 text-seal-600 font-hanzi text-sm">學</span>
          <span class="font-hanzi text-lg font-semibold text-ink-900">當代中文</span>
          <span class="hidden text-sm text-ink-400 sm:inline">Book 3</span>
        </NuxtLink>
        <nav class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-600 sm:gap-x-5">
          <StreakBadge variant="compact" />
          <select
            :value="currentLessonId"
            class="rounded-md border border-ink-200 bg-white px-2 py-1 text-sm text-ink-600 transition hover:border-seal-300 focus:outline-none"
            @change="handleLessonChange"
          >
            <option value="" disabled>Bài học</option>
            <option
              v-for="lesson in lessons"
              :key="lesson.id"
              :value="lesson.id"
              :disabled="lesson.status === 'coming-soon'"
            >
              Bài {{ lesson.number }}: {{ lesson.titleVi }}{{ lesson.status === 'coming-soon' ? ' (sắp có)' : '' }}
            </option>
          </select>
          <NuxtLink to="/review" class="transition hover:text-seal-600">Ôn tập</NuxtLink>
          <NuxtLink to="/characters" class="transition hover:text-seal-600">Chữ Hán</NuxtLink>
          <NuxtLink to="/writing" class="transition hover:text-seal-600">Luyện viết</NuxtLink>
          <button
            type="button"
            :title="useSimplifiedChars ? 'Đang hiện giản thể - bấm để chuyển sang phồn thể' : 'Đang hiện phồn thể - bấm để chuyển sang giản thể'"
            class="font-hanzi rounded-md border border-ink-200 px-2 py-1 text-xs text-ink-500 transition hover:border-seal-300 hover:text-seal-600"
            @click="useSimplifiedChars = !useSimplifiedChars"
          >
            {{ useSimplifiedChars ? '简' : '繁' }}
          </button>
          <button type="button" class="text-ink-400 transition hover:text-seal-600" @click="handleLogout">
            Đăng xuất
          </button>
        </nav>
      </div>
    </header>
    <main class="mx-auto max-w-5xl px-4 py-8">
      <slot />
    </main>
  </div>
</template>
