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

const { getStats } = useSrsStorage()
const stats = ref<{ learned: number; total: number; dueToday: number } | null>(null)
const savedCount = ref(0)
const exerciseTotal = computed(() => lesson.value?.workbookExercises.length ?? 0)
const learnedPct = computed(() => (stats.value && stats.value.total ? stats.value.learned / stats.value.total : 0))
const RING_C = 2 * Math.PI * 23

async function loadProgress() {
  const l = lesson.value
  if (!l || l.status !== 'available') return
  try {
    stats.value = await getStats(l.vocab.map((v) => v.id))
    const rows = await $fetch<unknown[]>('/api/workbook/progress', {
      query: { ids: l.workbookExercises.map((e) => e.id).join(',') }
    })
    savedCount.value = rows.length
  } catch {
    // Tiến độ chỉ là thông tin phụ - lỗi mạng không chặn việc học.
  }
}
onMounted(loadProgress)
watch(lessonId, loadProgress)

const useSimplifiedChars = useSimplified()
const showPinyin = usePinyinVisible()
const showMeaning = useMeaningVisible()

const vocab1 = computed(() => lesson.value?.vocab.filter((v) => v.group === 'vocab1') ?? [])
const vocab2 = computed(() => lesson.value?.vocab.filter((v) => v.group === 'vocab2') ?? [])

// Kiểm tra / Viết: gộp từ vựng + cụm từ cố định của bài
const practiceItems = computed(() => [
  ...(lesson.value?.vocab ?? []),
  ...phrasesToVocabItems(lesson.value?.id ?? '', lesson.value?.phrases)
])

const readingParagraphs = computed(() => {
  const reading = lesson.value?.shortReading
  if (!reading) return []
  const displayText = useSimplifiedChars.value ? reading.simplified : reading.traditional
  const displayParas = displayText.split('\n\n')
  const traditionalParas = reading.traditional.split('\n\n')
  const pinyinParas = reading.simplified.split('\n\n')
  return displayParas.map((text, i) => ({
    text,
    traditional: traditionalParas[i] ?? text,
    simplified: pinyinParas[i] ?? text,
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

  <div v-else class="flex flex-col gap-7 pt-4">
    <NuxtLink to="/" class="inline-flex items-center gap-1.5 self-start rounded-full px-1 py-1 text-sm font-semibold text-seal-600 transition hover:bg-seal-50">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
      Tất cả bài học
    </NuxtLink>

    <header class="flex flex-wrap items-center gap-x-10 gap-y-6">
      <span class="seal-mark h-[84px] w-[84px] shrink-0 border-[2.5px] border-seal-600 font-pinyin text-[40px] font-semibold text-seal-600">{{ lesson.number }}</span>
      <div class="flex min-w-[260px] flex-1 flex-col gap-1.5">
        <span class="kicker">Bài {{ lesson.number }} · <span class="font-pinyin normal-case tracking-normal">{{ lesson.titlePinyin }}</span></span>
        <h1 class="font-hanzi text-[clamp(40px,6vw,64px)] font-bold leading-[1.1] text-ink-800">
          {{ useSimplifiedChars ? lesson.titleSimplified : lesson.titleTraditional }}
        </h1>
        <span class="text-lg text-ink-500">{{ lesson.titleVi }}</span>
      </div>
      <div v-if="stats" class="flex items-center gap-3.5 rounded-full bg-jade-100 py-3.5 pl-3.5 pr-6">
        <svg width="56" height="56" viewBox="0 0 56 56" class="shrink-0">
          <circle cx="28" cy="28" r="23" fill="none" stroke="#aecbbc" stroke-width="8" />
          <circle cx="28" cy="28" r="23" fill="none" stroke="#3f6355" stroke-width="8" stroke-linecap="round" :stroke-dasharray="RING_C" :stroke-dashoffset="RING_C * (1 - learnedPct)" transform="rotate(-90 28 28)" />
        </svg>
        <div class="flex flex-col leading-snug">
          <span class="font-bold text-jade-900">{{ stats.learned }}/{{ stats.total }} từ đã thuộc</span>
          <span class="text-[13px] text-jade-800">{{ stats.dueToday }} thẻ đến hạn · {{ savedCount }}/{{ exerciseTotal }} bài tập đã lưu</span>
        </div>
      </div>
    </header>

    <div class="flex flex-wrap items-center justify-between gap-3">
      <nav class="pill-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          class="pill-tab"
          :class="{ 'pill-tab--active': activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </nav>

      <div
        v-if="activeTab === 'dialogue' || activeTab === 'vocab' || activeTab === 'reading' || activeTab === 'grammar' || activeTab === 'practice'"
        class="flex gap-2"
      >
        <button
          v-if="activeTab === 'dialogue' || activeTab === 'grammar' || activeTab === 'practice'"
          type="button"
          :title="showMeaning ? 'Đang hiện nghĩa - bấm để ẩn' : 'Đang ẩn nghĩa - bấm để hiện'"
          class="toggle-pill"
          :class="{ 'toggle-pill--on': showMeaning }"
          @click="showMeaning = !showMeaning"
        >
          <span class="toggle-pill__track" />Nghĩa
        </button>
        <button
          type="button"
          :title="showPinyin ? 'Đang hiện pinyin - bấm để ẩn' : 'Đang ẩn pinyin - bấm để hiện'"
          class="toggle-pill"
          :class="{ 'toggle-pill--on': showPinyin }"
          @click="showPinyin = !showPinyin"
        >
          <span class="toggle-pill__track" />Pinyin
        </button>
      </div>
    </div>

    <section v-if="activeTab === 'dialogue'" class="space-y-6">
      <div v-for="(scene, sceneIdx) in lesson.dialogues" :key="sceneIdx" class="space-y-3">
        <div
          v-for="(line, lineIdx) in scene"
          :key="lineIdx"
          class="max-w-[820px]"
          :class="line.speaker ? 'rounded-[26px] bg-white px-5 py-3.5' : 'bg-transparent text-center italic text-ink-400'"
        >
          <p v-if="line.speaker" class="mb-1 text-xs font-semibold text-seal-600">{{ line.speaker }}</p>
          <div class="flex flex-wrap items-baseline gap-2">
            <span class="font-hanzi leading-relaxed text-ink-900" :class="line.speaker ? 'text-base' : 'text-sm'">
              {{ useSimplifiedChars ? line.simplified : line.traditional }}
            </span>
            <SpeakerButton v-if="line.speaker" size="sm" :text="line.traditional" :simplified-text="line.simplified" />
          </div>
          <p v-if="line.speaker && showPinyin" class="mt-1 font-pinyin text-xs text-seal-700">{{ line.pinyin }}</p>
          <p v-if="line.speaker && showMeaning" class="mt-1 text-sm text-ink-600">{{ line.vietnamese }}</p>
        </div>
      </div>
    </section>

    <section v-else-if="activeTab === 'vocab'" class="space-y-6">
      <div>
        <h2 class="mb-3 font-hanzi text-2xl font-bold text-ink-800">生詞一 <span class="font-sans text-base font-normal text-ink-500">Từ vựng phần 1</span></h2>
        <div class="grid gap-3 sm:grid-cols-2">
          <VocabCard v-for="item in vocab1" :key="item.id" :item="item" />
        </div>
      </div>
      <div v-if="vocab2.length">
        <h2 class="mb-3 font-hanzi text-2xl font-bold text-ink-800">生詞二 <span class="font-sans text-base font-normal text-ink-500">Từ vựng phần 2</span></h2>
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
            class="rounded-[22px] border border-paper-line bg-white px-4 py-2.5 text-sm"
          >
            <span class="font-hanzi text-ink-900">{{ useSimplifiedChars ? p.phraseSimplified : p.phraseTraditional }}</span>
            <SpeakerButton size="sm" :text="p.phraseTraditional" :simplified-text="p.phraseSimplified" class="ml-1 align-middle" />
            <span v-if="showPinyin" class="ml-2 font-pinyin text-xs text-seal-700">{{ p.pinyin }}</span>
            <br>
            <span class="text-ink-600">{{ p.meaningVi }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section v-else-if="activeTab === 'quiz'">
      <VocabQuizExercise :key="lesson.id" :vocab="practiceItems" />
    </section>

    <section v-else-if="activeTab === 'writing'">
      <VocabWritingExercise :key="lesson.id" :vocab="practiceItems" />
    </section>

    <section v-else-if="activeTab === 'grammar'" class="space-y-4">
      <GrammarPointCard v-for="point in lesson.grammar" :key="point.id" :point="point" />
    </section>

    <section v-else-if="activeTab === 'reading'">
      <div v-if="lesson.shortReading" class="rounded-[32px] border border-paper-line bg-white p-7">
        <div class="space-y-3">
          <div v-for="(para, i) in readingParagraphs" :key="i">
            <div class="flex items-start gap-2">
              <p class="whitespace-pre-line font-hanzi text-base leading-loose text-ink-900">{{ para.text }}</p>
              <SpeakerButton size="sm" pausable :text="para.traditional" :simplified-text="para.simplified" class="mt-2 shrink-0" />
            </div>
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
