<script setup lang="ts">
definePageMeta({ layout: false })

const password = ref('')
const error = ref('')
const loading = ref(false)

const { fetch: refreshSession } = useUserSession()

async function handleSubmit() {
  if (!password.value) return
  loading.value = true
  error.value = ''
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: { password: password.value }
    })
    await refreshSession()
    await navigateTo('/')
  } catch {
    error.value = 'Sai mật khẩu. Vui lòng thử lại.'
  } finally {
    loading.value = false
  }
}
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

      <form class="rounded-2xl bg-paper p-6 shadow-2xl shadow-black/40" @submit.prevent="handleSubmit">
        <label for="password" class="mb-2 block text-sm font-medium text-ink-700">Mật khẩu</label>
        <input
          id="password"
          v-model="password"
          type="password"
          autofocus
          placeholder="Nhập mật khẩu"
          class="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-ink-900 outline-none transition focus:border-seal-500 focus:ring-2 focus:ring-seal-100"
        >
        <p v-if="error" class="mt-2 text-sm text-seal-600">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading || !password"
          class="mt-4 w-full rounded-lg bg-seal-600 py-2.5 font-medium text-white transition hover:bg-seal-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
        </button>
      </form>
    </div>
  </div>
</template>
