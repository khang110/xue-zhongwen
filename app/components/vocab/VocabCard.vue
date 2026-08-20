<script setup lang="ts">
import type { VocabItem } from '../../../types/vocab'

const props = defineProps<{
  item: VocabItem
}>()

const useSimplifiedChars = useSimplified()
const showPinyin = usePinyinVisible()

const displayChar = computed(() => (useSimplifiedChars.value ? props.item.simplified : props.item.traditional))
</script>

<template>
  <article :id="`vocab-${item.id}`" class="scroll-mt-20 rounded-xl border border-ink-100 bg-white p-4 shadow-sm">
    <div class="flex gap-4">
      <div class="tianzige w-16 shrink-0 self-start sm:w-20">
        <span class="font-hanzi text-3xl text-ink-900 sm:text-4xl">{{ displayChar }}</span>
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span v-if="showPinyin" class="font-mono-pinyin text-sm text-ink-500">{{ item.pinyin }}</span>
          <WordClassBadge :word-class="item.wordClass" />
          <SpeakerButton
            size="sm"
            :text="item.traditional"
            :simplified-text="item.simplified"
          />
        </div>

        <p class="mt-1.5 font-medium text-ink-900">{{ item.meaningVi }}</p>
        <p class="text-xs text-ink-400">{{ item.meaningEn }}</p>

        <p v-if="item.notes" class="mt-2 rounded-md bg-paper px-2.5 py-1.5 text-xs leading-relaxed text-ink-600">
          {{ item.notes }}
        </p>

        <ul v-if="item.examples.length" class="mt-2 space-y-1.5">
          <li v-for="(ex, i) in item.examples" :key="i" class="text-sm leading-relaxed">
            <span class="font-hanzi text-ink-800">{{ useSimplifiedChars ? ex.simplified : ex.traditional }}</span>
            <SpeakerButton size="sm" :text="ex.traditional" :simplified-text="ex.simplified" class="ml-1 align-middle" />
            <br>
            <span class="text-ink-500">{{ ex.vietnamese }}</span>
          </li>
        </ul>

        <div v-if="item.tags?.length" class="mt-2 flex flex-wrap gap-1.5">
          <TagBadge v-for="tag in item.tags" :key="tag" :tag="tag" />
        </div>

        <RelatedWordsPanel :item="item" />
      </div>
    </div>
  </article>
</template>
