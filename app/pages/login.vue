<script setup lang="ts">
definePageMeta({ layout: false })

const route = useRoute()
const hasError = computed(() => route.query.error === 'oauth')
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-ink-900 px-4 py-12">
    <div class="w-full max-w-sm">
      <div class="mb-8 flex flex-col items-center text-center">
        <div class="tianzige tianzige--dark mb-4 w-20">
          <span class="font-hanzi text-5xl leading-none text-seal-400">學</span>
        </div>
        <p class="font-hanzi text-3xl font-medium text-paper">當代中文課程 3</p>
        <p class="mt-2 text-sm text-ink-300">Sổ tay từ vựng &amp; ngữ pháp cho người học tiếng Việt</p>
      </div>

      <div class="rounded-2xl bg-paper p-6 text-center shadow-2xl shadow-black/40">
        <p v-if="hasError" class="mb-4 text-sm text-seal-600">
          Không thể đăng nhập bằng tài khoản Google này.
        </p>

        <a
          href="/api/auth/google"
          class="flex w-full items-center justify-center gap-2.5 rounded-lg border border-ink-200 bg-white py-2.5 font-medium text-ink-800 transition hover:border-seal-300 hover:bg-paper"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true">
            <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.54-5.17 3.54-8.86z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.93H1.3v3.09C3.26 21.3 7.31 24 12 24z" />
            <path fill="#FBBC05" d="M5.31 14.31A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.58.4-2.31V6.6H1.3A11.98 11.98 0 0 0 0 12c0 1.93.46 3.76 1.3 5.4z" />
            <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.3 6.6l4.01 3.09C6.25 6.86 8.89 4.75 12 4.75z" />
          </svg>
          Đăng nhập với Google
        </a>
      </div>
    </div>
  </div>
</template>
