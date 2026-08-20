<script setup lang="ts">
import { getLessonById } from '../../../data/lessons'

const route = useRoute()
const lessonId = computed(() => String(route.params.id))
const lesson = computed(() => getLessonById(lessonId.value))

const tabs = [
  { key: 'vocab', label: 'Từ vựng' },
  { key: 'quiz', label: 'Kiểm tra' },
  { key: 'writing', label: 'Viết' },
  { key: 'dialogue', label: 'Hội thoại' },
  { key: 'reading', label: 'Đoạn văn' },
  { key: 'grammar', label: 'Ngữ pháp' },
  { key: 'practice', label: 'Bài tập' }
] as const

type TabKey = (typeof tabs)[number]['key']
const activeTab = ref<TabKey>('vocab')

const useSimplifiedChars = useSimplified()
const showPinyin = usePinyinVisible()
const showMeaning = useMeaningVisible()

const vocab1 = computed(() => lesson.value?.vocab.filter((v) => v.group === 'vocab1') ?? [])
const vocab2 = computed(() => lesson.value?.vocab.filter((v) => v.group === 'vocab2') ?? [])

const readingParagraphs = computed(() => {
  const reading = lesson.value?.shortReading
  if (!reading) return []
  const displayText = useSimplifiedChars.value ? reading.simplified : reading.traditional
  const displayParas = displayText.split('\n\n')
  const pinyinParas = reading.simplified.split('\n\n')
  return displayParas.map((text, i) => ({
    text,
    pinyin: toPinyinText(pinyinParas[i]?.trim() ?? '')
  }))
})
</script>

<template>
  <div v-if="!lesson">
    <p class="text-ink-500">Không tìm thấy bài học này.</p>
  </div>

  <div v-else-if="lesson.status === 'coming-soon'" class="rounded-xl border border-dashed border-ink-200 bg-white p-8 text-center">
    <p class="font-hanzi text-2xl text-ink-800">{{ lesson.titleTraditional }}</p>
    <p class="mt-1 text-ink-500">{{ lesson.titleVi }}</p>
    <p class="mt-4 text-sm text-ink-400">Bài này chưa được nhập liệu, sẽ có trong phiên làm việc tiếp theo.</p>
    <NuxtLink to="/" class="mt-4 inline-block text-sm text-seal-600 hover:underline">← Quay lại trang chủ</NuxtLink>
  </div>

  <div v-else>
    <header class="mb-6">
      <p class="text-sm text-ink-400">Bài {{ lesson.number }}</p>
      <h1 class="font-hanzi text-3xl font-semibold text-ink-900">
        {{ useSimplifiedChars ? lesson.titleSimplified : lesson.titleTraditional }}
      </h1>
      <p class="mt-1 text-ink-500">{{ lesson.titleVi }} · {{ lesson.titlePinyin }}</p>
    </header>

    <nav class="mb-6 flex gap-1 overflow-x-auto border-b border-ink-100">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        class="shrink-0 border-b-2 px-3 py-2 text-sm font-medium transition"
        :class="activeTab === tab.key
          ? 'border-seal-600 text-seal-600'
          : 'border-transparent text-ink-500 hover:text-ink-800'"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>

      <div
        v-if="activeTab === 'dialogue' || activeTab === 'vocab' || activeTab === 'reading'"
        class="ml-auto flex shrink-0 gap-2 self-center"
      >
        <button
          v-if="activeTab === 'dialogue'"
          type="button"
          :title="showMeaning ? 'Đang hiện nghĩa - bấm để ẩn' : 'Đang ẩn nghĩa - bấm để hiện'"
          class="shrink-0 rounded-md border border-ink-200 px-2 py-1 text-xs text-ink-500 transition hover:border-seal-300 hover:text-seal-600"
          @click="showMeaning = !showMeaning"
        >
          {{ showMeaning ? 'Ẩn nghĩa' : 'Hiện nghĩa' }}
        </button>
        <button
          type="button"
          :title="showPinyin ? 'Đang hiện pinyin - bấm để ẩn' : 'Đang ẩn pinyin - bấm để hiện'"
          class="shrink-0 rounded-md border border-ink-200 px-2 py-1 text-xs text-ink-500 transition hover:border-seal-300 hover:text-seal-600"
          @click="showPinyin = !showPinyin"
        >
          {{ showPinyin ? 'Ẩn pinyin' : 'Hiện pinyin' }}
        </button>
      </div>
    </nav>

    <section v-if="activeTab === 'dialogue'" class="space-y-6">
      <div v-for="(scene, sceneIdx) in lesson.dialogues" :key="sceneIdx" class="space-y-3">
        <div
          v-for="(line, lineIdx) in scene"
          :key="lineIdx"
          class="rounded-lg p-3"
          :class="line.speaker ? 'bg-white shadow-sm' : 'bg-transparent text-center italic text-ink-400'"
        >
          <p v-if="line.speaker" class="mb-1 text-xs font-semibold text-seal-600">{{ line.speaker }}</p>
          <div class="flex flex-wrap items-baseline gap-2">
            <span class="font-hanzi leading-relaxed text-ink-900" :class="line.speaker ? 'text-base' : 'text-sm'">
              {{ useSimplifiedChars ? line.simplified : line.traditional }}
            </span>
            <SpeakerButton v-if="line.speaker" size="sm" :text="line.traditional" :simplified-text="line.simplified" />
          </div>
          <p v-if="line.speaker && showPinyin" class="mt-1 font-mono-pinyin text-xs text-ink-400">{{ line.pinyin }}</p>
          <p v-if="line.speaker && showMeaning" class="mt-1 text-sm text-ink-600">{{ line.vietnamese }}</p>
        </div>
      </div>
    </section>

    <section v-else-if="activeTab === 'vocab'" class="space-y-6">
      <div>
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">生詞一 · Từ vựng phần 1</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <VocabCard v-for="item in vocab1" :key="item.id" :item="item" />
        </div>
      </div>
      <div v-if="vocab2.length">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">生詞二 · Từ vựng phần 2</h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <VocabCard v-for="item in vocab2" :key="item.id" :item="item" />
        </div>
      </div>
      <div v-if="lesson.phrases?.length">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">Cụm từ cố định</h2>
        <ul class="grid gap-2 sm:grid-cols-2">
          <li
            v-for="(p, i) in lesson.phrases"
            :key="i"
            class="rounded-lg border border-ink-100 bg-white px-3 py-2 text-sm"
          >
            <span class="font-hanzi text-ink-900">{{ useSimplifiedChars ? p.phraseSimplified : p.phraseTraditional }}</span>
            <span v-if="showPinyin" class="ml-2 font-mono-pinyin text-xs text-ink-400">{{ p.pinyin }}</span>
            <br>
            <span class="text-ink-600">{{ p.meaningVi }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section v-else-if="activeTab === 'quiz'">
      <VocabQuizExercise :key="lesson.id" :vocab="lesson.vocab" />
    </section>

    <section v-else-if="activeTab === 'writing'">
      <VocabWritingExercise :key="lesson.id" :vocab="lesson.vocab" />
    </section>

    <section v-else-if="activeTab === 'grammar'" class="space-y-4">
      <GrammarPointCard v-for="point in lesson.grammar" :key="point.id" :point="point" />
    </section>

    <section v-else-if="activeTab === 'reading'">
      <div v-if="lesson.shortReading" class="rounded-xl border border-ink-100 bg-white p-5">
        <div class="space-y-3">
          <div v-for="(para, i) in readingParagraphs" :key="i">
            <p class="whitespace-pre-line font-hanzi text-base leading-loose text-ink-900">{{ para.text }}</p>
            <p v-if="showPinyin" class="mt-1 whitespace-pre-line font-mono-pinyin text-xs leading-relaxed text-ink-400">{{ para.pinyin }}</p>
          </div>
        </div>
        <hr class="my-4 border-ink-100">
        <p class="whitespace-pre-line text-sm leading-relaxed text-ink-600">{{ lesson.shortReading.vietnamese }}</p>
      </div>
      <p v-else class="text-ink-400">Bài này không có đoản văn riêng.</p>
    </section>

    <section v-else-if="activeTab === 'practice'">
      <LessonPractice :lesson="lesson" />
    </section>
  </div>
</template>
