<script setup lang="ts">
const { user } = useUserSession()
const useSimplifiedChars = useSimplified()
const route = useRoute()

const navItems = [
  { to: '/', label: 'Trang chủ' },
  { to: '/review', label: 'Ôn tập' },
  { to: '/characters', label: 'Chữ Hán' },
  { to: '/writing', label: 'Luyện viết' }
]

function isActive(to: string): boolean {
  if (to === '/') return route.path === '/' || route.path.startsWith('/lessons')
  return route.path.startsWith(to)
}

const initial = computed(() => (user.value?.name ?? user.value?.email ?? '?').trim().charAt(0).toUpperCase())
</script>

<template>
  <div class="min-h-screen bg-paper">
    <header class="sticky top-0 z-10 bg-paper/90 backdrop-blur">
      <div class="mx-auto flex max-w-[1160px] flex-wrap items-center gap-x-5 gap-y-3 px-4 py-4 sm:px-6">
        <NuxtLink to="/" class="mr-auto flex items-center gap-2.5">
          <span class="seal-mark h-9 w-9 shrink-0 border-2 border-seal-600 font-hanzi text-xl font-semibold text-seal-600">學</span>
          <span class="flex flex-col leading-[1.1]">
            <span class="font-heading text-[19px] font-bold text-ink-800">Xué</span>
            <span class="font-hanzi text-xs text-ink-500">當代中文課程 3</span>
          </span>
        </NuxtLink>

        <nav class="pill-tabs">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="pill-tab"
            :class="{ 'pill-tab--active': isActive(item.to) }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <StreakBadge />
          <button
            type="button"
            :title="useSimplifiedChars ? 'Đang hiện giản thể - bấm để chuyển sang phồn thể' : 'Đang hiện phồn thể - bấm để chuyển sang giản thể'"
            class="grid h-9 w-9 place-items-center rounded-full border border-paper-line font-hanzi text-[15px] text-ink-700 transition hover:bg-black/5"
            @click="useSimplifiedChars = !useSimplifiedChars"
          >
            {{ useSimplifiedChars ? '简' : '繁' }}
          </button>
          <NuxtLink
            to="/profile"
            title="Trang cá nhân"
            class="grid h-9 w-9 place-items-center rounded-full bg-jade-500 font-bold text-paper"
          >
            {{ initial }}
          </NuxtLink>
        </div>
      </div>
    </header>
    <main class="mx-auto max-w-[1160px] px-4 pb-20 pt-2 sm:px-6">
      <slot />
    </main>
  </div>
</template>
