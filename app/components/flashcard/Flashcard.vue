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
    class="flex min-h-[420px] w-full cursor-pointer select-none flex-col items-center justify-center gap-3.5 rounded-[32px] border border-paper-line bg-white p-8 text-center shadow-md"
    role="button"
    tabindex="0"
    @click="$emit('flip')"
    @keydown.enter="$emit('flip')"
  >
    <div class="tianzige w-[200px] !rounded-2xl">
      <span class="font-hanzi text-[88px] leading-none text-ink-800">{{ useSimplifiedChars ? item.simplified : item.traditional }}</span>
    </div>

    <div v-if="flipped" class="flex flex-col items-center gap-1.5">
      <span class="font-pinyin text-xl font-bold text-seal-700">{{ item.pinyin }}</span>
      <span class="font-heading text-[28px] font-bold text-ink-800">{{ item.meaningVi }}</span>
      <span class="text-[13px] text-ink-500">
        <WordClassBadge :word-class="item.wordClass" class="mr-1" />{{ item.meaningEn }}
      </span>
      <div v-if="item.examples.length" class="mt-2 flex flex-col gap-0.5 rounded-[20px] bg-paper px-4 py-2.5">
        <span class="font-hanzi">{{ useSimplifiedChars ? item.examples[0]!.simplified : item.examples[0]!.traditional }}</span>
        <span class="text-[13px] text-ink-500">{{ item.examples[0]!.vietnamese }}</span>
      </div>
    </div>
    <span v-else class="text-sm text-ink-500">Nhớ nghĩa chưa? Bấm để lật thẻ.</span>
  </div>
</template>
