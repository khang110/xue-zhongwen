<script setup lang="ts">
import type { MatchingExercise } from '../../../types/exercise'

const props = defineProps<{
  exercise: MatchingExercise
}>()

const showPinyin = usePinyinVisible()

const leftItems = computed(() => [...new Set(props.exercise.pairs.map((p) => p.left))])
const rightItems = computed(() => props.exercise.pairs.map((p) => p.right))
const pinyinFor = computed(() => {
  const map = new Map<string, string>()
  for (const text of [...leftItems.value, ...rightItems.value]) {
    if (!map.has(text)) map.set(text, toPinyinText(text))
  }
  return map
})

const correctMap = computed(() => {
  const map = new Map<string, Set<string>>()
  for (const pair of props.exercise.pairs) {
    if (!map.has(pair.left)) map.set(pair.left, new Set())
    map.get(pair.left)!.add(pair.right)
  }
  return map
})

const selected = reactive<Record<string, Set<string>>>({})
for (const left of leftItems.value) selected[left] = new Set()

const checked = ref(false)

const { canSave, saving, savedAtLabel, justSaved, save, clearSaved } = useSavableExercise(
  props.exercise.id,
  () => ({
    kind: 'matching' as const,
    selected: Object.fromEntries(leftItems.value.map((left) => [left, [...(selected[left] ?? [])]])),
    checked: checked.value
  })
)

function toggle(left: string, right: string) {
  if (checked.value) return
  const set = selected[left]
  if (!set) return
  if (set.has(right)) set.delete(right)
  else set.add(right)
}

function cellState(left: string, right: string): 'idle' | 'correct' | 'wrong' | 'missed' {
  if (!checked.value) return 'idle'
  const isSelected = selected[left]?.has(right) ?? false
  const isCorrect = correctMap.value.get(left)?.has(right) ?? false
  if (isSelected && isCorrect) return 'correct'
  if (isSelected && !isCorrect) return 'wrong'
  if (!isSelected && isCorrect) return 'missed'
  return 'idle'
}

function handleCheck() {
  checked.value = true
}

function handleReset() {
  for (const left of leftItems.value) selected[left] = new Set()
  checked.value = false
  clearSaved()
}
</script>

<template>
  <div class="rounded-lg border border-ink-100 bg-white p-4">
    <p v-if="exercise.prompt" class="mb-3 text-sm leading-relaxed text-ink-600">{{ exercise.prompt }}</p>

    <div class="space-y-3">
      <div v-for="left in leftItems" :key="left">
        <p class="font-hanzi text-sm font-medium text-ink-800">{{ left }}</p>
        <p v-if="showPinyin" class="mb-1 font-mono-pinyin text-xs text-ink-400">{{ pinyinFor.get(left) }}</p>
        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="right in rightItems"
            :key="right"
            type="button"
            class="rounded-full border px-2.5 py-1 text-xs transition"
            :class="{
              'border-ink-200 text-ink-600 hover:border-seal-300': cellState(left, right) === 'idle' && !selected[left]?.has(right),
              'border-seal-400 bg-seal-50 text-seal-700': cellState(left, right) === 'idle' && selected[left]?.has(right),
              'border-jade-500 bg-jade-50 text-jade-800': cellState(left, right) === 'correct',
              'border-seal-500 bg-seal-100 text-seal-800 line-through': cellState(left, right) === 'wrong',
              'border-dashed border-jade-400 text-jade-600': cellState(left, right) === 'missed'
            }"
            @click="toggle(left, right)"
          >
            <span class="font-hanzi">{{ right }}</span>
            <span v-if="showPinyin" class="ml-1 font-mono-pinyin">{{ pinyinFor.get(right) }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="mt-3 flex items-center gap-3">
      <button
        v-if="!checked"
        type="button"
        class="rounded-md bg-seal-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-seal-700"
        @click="handleCheck"
      >
        Kiểm tra
      </button>
      <button
        v-else
        type="button"
        class="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-600 transition hover:border-seal-300"
        @click="handleReset"
      >
        Làm lại
      </button>
      <span v-if="checked" class="text-xs text-ink-400">Viền đứt = đáp án đúng bạn chưa chọn</span>
      <ExerciseSaveButton
        :can-save="canSave"
        :saving="saving"
        :just-saved="justSaved"
        :saved-at-label="savedAtLabel"
        @save="save"
      />
    </div>
  </div>
</template>
