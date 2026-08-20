<script setup lang="ts">
import type { WordClass } from '../../../types/vocab'
import { wordClassLabels } from '../../data/wordClassLabels'

const props = defineProps<{
  wordClass: WordClass[]
}>()

const label = computed(() => props.wordClass.map((wc) => wordClassLabels[wc]).join(' / '))
const short = computed(() => props.wordClass.join('/'))
</script>

<template>
  <span
    :title="label"
    class="inline-flex items-center rounded-full border border-jade-200 bg-jade-50 px-2 py-0.5 text-xs font-medium text-jade-700"
  >
    {{ short }}
  </span>
</template>
