<script setup lang="ts">
import type HanziWriter from 'hanzi-writer'

const props = withDefaults(
  defineProps<{
    character: string
    size?: number
  }>(),
  { size: 220 }
)

const { create } = useHanziWriter()
const container = ref<HTMLElement | null>(null)
let writer: HanziWriter | null = null

function mountWriter() {
  if (!container.value) return
  container.value.innerHTML = ''
  writer = create(container.value, props.character, props.size)
  writer.animateCharacter()
}

function replay() {
  writer?.animateCharacter()
}

onMounted(mountWriter)
watch(() => props.character, mountWriter)
</script>

<template>
  <div class="text-center">
    <div
      ref="container"
      class="mx-auto rounded-xl border border-ink-100 bg-white"
      :style="{ width: `${size}px`, height: `${size}px` }"
    />
    <button
      type="button"
      class="mt-3 rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300"
      @click="replay"
    >
      Xem lại thứ tự nét
    </button>
  </div>
</template>
