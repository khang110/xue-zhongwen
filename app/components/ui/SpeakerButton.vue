<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    simplifiedText?: string
    rate?: number
    size?: 'sm' | 'md'
  }>(),
  { size: 'md', rate: 0.85, simplifiedText: undefined }
)

const { isSupported, speak } = useSpeech()

function handleClick() {
  speak(props.text, { rate: props.rate, simplifiedText: props.simplifiedText })
}
</script>

<template>
  <button
    v-if="isSupported"
    type="button"
    :title="`Nghe phát âm: ${text}`"
    class="inline-flex items-center justify-center rounded-full text-ink-400 transition hover:bg-seal-50 hover:text-seal-600"
    :class="size === 'sm' ? 'h-6 w-6' : 'h-8 w-8'"
    @click="handleClick"
  >
    <svg viewBox="0 0 24 24" fill="none" class="h-[60%] w-[60%]">
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
