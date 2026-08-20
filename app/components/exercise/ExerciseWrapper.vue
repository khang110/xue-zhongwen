<script setup lang="ts">
import type { Exercise } from '../../../types/exercise'

defineProps<{
  exercise: Exercise
}>()
</script>

<template>
  <MultipleChoiceExercise v-if="exercise.type === 'multiple-choice'" :exercise="exercise" />
  <FillBlankExercise v-else-if="exercise.type === 'fill-blank'" :exercise="exercise" />
  <MatchingExercise v-else-if="exercise.type === 'matching'" :exercise="exercise" />
  <DialogueCompletionExercise v-else-if="exercise.type === 'dialogue-completion'" :exercise="exercise" />
  <CompositionExercise v-else-if="exercise.type === 'composition'" :exercise="exercise" />
</template>
