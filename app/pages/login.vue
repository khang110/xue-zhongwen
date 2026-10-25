<script setup lang="ts">
definePageMeta({ layout: false })

const route = useRoute()
const hasOAuthError = computed(() => route.query.error === 'oauth')

const { fetch: refreshSession } = useUserSession()

const mode = ref<'login' | 'register'>('login')
const email = ref('')
const password = ref('')
const name = ref('')
const errorMessage = ref('')
const isSubmitting = ref(false)

function setMode(next: 'login' | 'register') {
  mode.value = next
  errorMessage.value = ''
}

async function handleSubmit() {
  errorMessage.value = ''
  isSubmitting.value = true
  try {
    const endpoint = mode.value === 'login' ? '/api/auth/login' : '/api/auth/register'
    const body =
      mode.value === 'login'
        ? { email: email.value, password: password.value }
        : { email: email.value, password: password.value, name: name.value }

    await $fetch(endpoint, { method: 'POST', body })
    await refreshSession()
    await navigateTo('/')
  } catch (err) {
    errorMessage.value = (err as { data?: { statusMessage?: string } })?.data?.statusMessage ?? 'Có lỗi xảy ra, vui lòng thử lại.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-paper">
    <div class="mx-auto grid min-h-screen max-w-[1160px] items-center gap-12 px-4 py-12 sm:px-6 md:grid-cols-2">
      <div class="flex max-w-[520px] flex-col gap-5">
        <div class="relative h-[180px] w-[180px]">
          <div class="absolute inset-0 rounded-full bg-seal-100" />
          <div class="absolute -bottom-2 -right-6 h-[72px] w-[72px] rounded-full bg-jade-200" />
          <span class="absolute inset-0 grid place-items-center font-hanzi text-[96px] font-bold text-seal-800">學</span>
        </div>
        <h1 class="font-heading text-[clamp(36px,5vw,52px)] font-bold leading-[1.05] text-ink-800">Học tiếng Trung, mỗi ngày một ít.</h1>
        <p class="max-w-[440px] text-[17px] text-ink-500">
          Sổ tay từ vựng, ngữ pháp và bài tập cho <span class="font-hanzi">當代中文課程 3</span> — ôn lặp lại ngắt quãng, đồng bộ mọi thiết bị.
        </p>
      </div>

      <div class="flex w-full max-w-[420px] flex-col gap-3.5 rounded-[32px] border border-paper-line bg-white p-8 shadow-xl">
        <div class="pill-tabs self-start !bg-paper">
          <button type="button" class="pill-tab" :class="{ 'pill-tab--active': mode === 'login' }" @click="setMode('login')">Đăng nhập</button>
          <button type="button" class="pill-tab" :class="{ 'pill-tab--active': mode === 'register' }" @click="setMode('register')">Đăng ký</button>
        </div>

        <p v-if="hasOAuthError" class="text-center text-sm text-seal-600">
          Không thể đăng nhập bằng tài khoản Google này.
        </p>

        <form class="flex flex-col gap-3.5" @submit.prevent="handleSubmit">
          <label v-if="mode === 'register'" class="flex flex-col gap-1.5 text-xs text-ink-500">
            Tên hiển thị (không bắt buộc)
            <input v-model="name" type="text" class="auth-input">
          </label>
          <label class="flex flex-col gap-1.5 text-xs text-ink-500">
            Email
            <input v-model="email" type="email" required placeholder="ban@email.com" class="auth-input">
          </label>
          <label class="flex flex-col gap-1.5 text-xs text-ink-500">
            Mật khẩu
            <input v-model="password" type="password" required minlength="8" placeholder="Tối thiểu 8 ký tự" class="auth-input">
          </label>

          <p v-if="errorMessage" class="text-center text-sm text-seal-600">{{ errorMessage }}</p>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="mt-1 rounded-full bg-seal-600 py-3.5 text-base font-semibold text-paper transition hover:bg-seal-700 disabled:opacity-60"
          >
            {{ mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản' }}
          </button>
        </form>

        <div class="flex items-center gap-3 text-[13px] text-ink-500">
          <div class="h-px flex-1 bg-paper-line" />
          hoặc
          <div class="h-px flex-1 bg-paper-line" />
        </div>

        <a
          href="/api/auth/google"
          class="flex items-center justify-center gap-2.5 rounded-full border border-paper-line py-3 text-[15px] font-semibold text-ink-800 transition hover:bg-black/5"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.54-5.17 3.54-8.86z" />
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

<style scoped>
.auth-input {
  min-height: 46px;
  width: 100%;
  border-radius: 999px;
  border: 1px solid #dcd5c2;
  background: #fff;
  padding: 6px 16px;
  font-size: 14px;
  color: #26211c;
}
.auth-input:focus {
  outline: none;
  border-color: #962c22;
}
</style>
