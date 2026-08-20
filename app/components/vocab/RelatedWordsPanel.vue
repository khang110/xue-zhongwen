<script setup lang="ts">
import type { VocabItem } from '../../../types/vocab'

const props = defineProps<{
  item: VocabItem
}>()

const relations = computed(() => getRelatedWordsByCharacter(props.item, getVocabCharacterIndex()))
</script>

<template>
  <div v-if="relations.length" class="mt-3 border-t border-ink-100 pt-3">
    <p class="mb-1.5 text-xs font-medium uppercase tracking-wide text-ink-400">Từ liên quan</p>
    <ul class="space-y-1">
      <li v-for="rel in relations" :key="rel.char" class="text-sm leading-relaxed text-ink-600">
        <span class="font-hanzi font-medium text-seal-600">{{ rel.char }}</span>
        <span class="text-ink-400"> · </span>
        <template v-for="(word, i) in rel.words" :key="word.id">
          <NuxtLink
            :to="`/lessons/${word.lessonId}#vocab-${word.id}`"
            class="font-hanzi hover:text-seal-600 hover:underline"
          >
            {{ word.traditional }}
          </NuxtLink>
          <span v-if="i < rel.words.length - 1" class="text-ink-300">, </span>
        </template>
      </li>
    </ul>
  </div>
</template>
