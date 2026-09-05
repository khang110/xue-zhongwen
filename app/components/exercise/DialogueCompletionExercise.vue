<script setup lang="ts">
import type { DialogueCompletionExercise } from '../../../types/exercise'
import { getLessonById } from '../../data/lessons'

const props = defineProps<{
  exercise: DialogueCompletionExercise
}>()

const showPinyin = usePinyinVisible()

const userAnswer = ref('')
const revealed = ref(false)

const { canSave, saving, savedAtLabel, justSaved, save } = useSavableExercise(
  props.exercise.id,
  () => ({ kind: 'dialogue-completion' as const, userAnswer: userAnswer.value, revealed: revealed.value })
)

const pattern = computed(() => {
  const lesson = getLessonById(props.exercise.lessonId)
  return lesson?.grammar.find((g) => g.id === props.exercise.requiredPattern)
})

const turnPinyin = computed(() => props.exercise.turns.map((t) => toPinyinText(t.text)))
const sampleAnswerPinyin = computed(() => toPinyinText(props.exercise.sampleAnswer))
</script>

<template>
  <div class="rounded-lg border border-ink-100 bg-white p-4">
    <p v-if="pattern" class="mb-2 text-xs text-ink-400">
      Dùng mẫu câu: <span class="font-hanzi text-seal-600">{{ pattern.pattern }}</span>
    </p>

    <div class="space-y-1.5">
      <div v-for="(turn, i) in exercise.turns" :key="i" class="flex gap-2 text-sm">
        <span class="w-5 shrink-0 font-medium text-ink-500">{{ turn.speaker }}:</span>
        <div v-if="!turn.isBlank" class="min-w-0">
          <span class="font-hanzi text-ink-800">{{ turn.text }}</span>
          <p v-if="showPinyin" class="font-mono-pinyin text-xs text-ink-400">{{ turnPinyin[i] }}</p>
        </div>
        <div v-else class="flex-1">
          <p v-if="turn.text" class="font-hanzi text-xs text-ink-400">{{ turn.text }}</p>
          <p v-if="turn.text && showPinyin" class="mb-1 font-mono-pinyin text-xs text-ink-400">{{ turnPinyin[i] }}</p>
          <textarea
            v-model="userAnswer"
            rows="2"
            placeholder="Nhập câu trả lời của bạn..."
            class="w-full rounded-md border border-ink-200 bg-paper px-2 py-1.5 font-hanzi text-sm outline-none focus:border-seal-500"
          />
        </div>
      </div>
    </div>

    <div class="mt-3 flex flex-wrap items-center gap-3">
      <button
        type="button"
        class="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300"
        @click="revealed = !revealed"
      >
        {{ revealed ? 'Ẩn đáp án tham khảo' : 'Xem đáp án tham khảo' }}
      </button>
      <ExerciseSaveButton
        :can-save="canSave"
        :saving="saving"
        :just-saved="justSaved"
        :saved-at-label="savedAtLabel"
        @save="save"
      />
    </div>

    <div v-if="revealed" class="mt-2 rounded-md bg-paper px-3 py-2">
      <p class="font-hanzi text-sm text-ink-800">{{ exercise.sampleAnswer }}</p>
      <p v-if="showPinyin" class="mt-0.5 font-mono-pinyin text-xs text-ink-400">{{ sampleAnswerPinyin }}</p>
    </div>
  </div>
</template>
