<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    simplifiedText?: string
    rate?: number
    size?: 'sm' | 'md'
    pausable?: boolean
  }>(),
  { size: 'md', rate: 0.85, simplifiedText: undefined, pausable: false }
)

const { isSupported, speak, pause, resume } = useSpeech()

const state = ref<'idle' | 'playing' | 'paused'>('idle')

function handleClick() {
  if (props.pausable && state.value === 'playing') {
    pause()
    state.value = 'paused'
    return
  }
  if (props.pausable && state.value === 'paused') {
    resume()
    state.value = 'playing'
    return
  }
  const utterance = speak(props.text, { rate: props.rate, simplifiedText: props.simplifiedText })
  if (!utterance || !props.pausable) return
  state.value = 'playing'
  const reset = () => { state.value = 'idle' }
  utterance.onend = reset
  utterance.onerror = reset
}
</script>

<template>
  <button
    v-if="isSupported"
    type="button"
    :title="state === 'playing' ? 'Tạm dừng' : state === 'paused' ? 'Tiếp tục' : `Nghe phát âm: ${text}`"
    class="inline-flex items-center justify-center rounded-full text-ink-400 transition hover:bg-seal-50 hover:text-seal-600"
    :class="[size === 'sm' ? 'h-6 w-6' : 'h-8 w-8', state !== 'idle' ? 'text-seal-600' : '']"
    @click="handleClick"
  >
    <svg v-if="state === 'playing'" viewBox="0 0 24 24" fill="currentColor" class="h-[60%] w-[60%]">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
    <svg v-else-if="state === 'paused'" viewBox="0 0 24 24" fill="currentColor" class="h-[60%] w-[60%]">
      <path d="M7 4v16l13-8z" />
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="none" class="h-[60%] w-[60%]">
      <path
        d="M4 9v6h4l5 5V4L8 9H4z"
        fill="currentColor"
      />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        fill="none"
      />
      <path
        d="M18.7 6.3a8 8 0 0 1 0 11.4"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  </button>
</template>
