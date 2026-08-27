<script setup lang="ts">
import type { GrammarExample } from '../../../types/grammar'

const props = defineProps<{
  examples: GrammarExample[]
}>()

const useSimplifiedChars = useSimplified()
const showPinyin = usePinyinVisible()
const showMeaning = useMeaningVisible()

const pinyinList = computed(() => props.examples.map((ex) => ex.pinyin ?? toPinyinText(ex.simplified)))
</script>

<template>
  <ol class="space-y-2.5">
    <li
      v-for="(ex, i) in examples"
      :key="i"
      class="flex gap-2.5 rounded-lg bg-paper px-3 py-2"
    >
      <span class="mt-0.5 shrink-0 font-mono-pinyin text-xs text-ink-400">{{ i + 1 }}</span>
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-1.5">
          <span class="font-hanzi text-base text-ink-900">{{ useSimplifiedChars ? ex.simplified : ex.traditional }}</span>
          <SpeakerButton size="sm" :text="ex.traditional" :simplified-text="ex.simplified" />
        </div>
        <p v-if="showPinyin" class="font-mono-pinyin text-xs text-ink-400">{{ pinyinList[i] }}</p>
        <p v-if="showMeaning" class="text-sm text-ink-600">{{ ex.vietnamese }}</p>
      </div>
    </li>
  </ol>
</template>
