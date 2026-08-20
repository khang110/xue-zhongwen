<script setup lang="ts">
import type { VocabItem } from '../../../types/vocab'

defineProps<{
  item: VocabItem
  flipped: boolean
}>()

defineEmits<{ flip: [] }>()

const useSimplifiedChars = useSimplified()
</script>

<template>
  <div
    class="mx-auto max-w-sm cursor-pointer select-none"
    role="button"
    tabindex="0"
    @click="$emit('flip')"
    @keydown.enter="$emit('flip')"
  >
    <div v-if="!flipped" class="tianzige mx-auto w-48 shadow-sm sm:w-56">
      <span class="font-hanzi text-7xl text-ink-900">{{ useSimplifiedChars ? item.simplified : item.traditional }}</span>
    </div>

    <div v-else class="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-sm">
      <p class="font-hanzi text-3xl text-ink-900">{{ useSimplifiedChars ? item.simplified : item.traditional }}</p>
      <p class="mt-1 font-mono-pinyin text-base text-ink-500">{{ item.pinyin }}</p>
      <WordClassBadge :word-class="item.wordClass" class="mt-2" />
      <p class="mt-3 text-lg font-medium text-ink-900">{{ item.meaningVi }}</p>
      <p class="text-xs text-ink-400">{{ item.meaningEn }}</p>

      <div v-if="item.examples.length" class="mt-3 border-t border-ink-100 pt-3 text-left">
        <p v-for="(ex, i) in item.examples.slice(0, 1)" :key="i" class="text-sm">
          <span class="font-hanzi text-ink-800">{{ useSimplifiedChars ? ex.simplified : ex.traditional }}</span>
          <br>
          <span class="text-ink-500">{{ ex.vietnamese }}</span>
        </p>
      </div>
    </div>

    <p class="mt-3 text-center text-xs text-ink-400">
      {{ flipped ? 'Bấm để lật lại' : 'Bấm hoặc nhấn Space để xem nghĩa' }}
    </p>
  </div>
</template>
