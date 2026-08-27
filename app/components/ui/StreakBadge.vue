<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'compact' | 'detailed' }>(), { variant: 'compact' })

const { projection, refresh } = useStreak()
onMounted(refresh)

const icon = computed(() => (projection.value?.status === 'protected' ? 'shield' : 'flame'))

const colorClass = computed(() => {
  const status = projection.value?.status
  if (status === 'done-today') return 'text-seal-600'
  if (status === 'protected') return 'text-jade-600'
  return 'text-ink-300'
})

const statusLabel = computed(() => {
  const p = projection.value
  if (!p) return 'Đang tải streak...'
  if (p.status === 'done-today') return 'Đã giữ streak hôm nay!'
  if (p.status === 'protected') return 'Còn lá chắn bảo vệ streak nếu hôm nay chưa ôn tập/làm bài'
  if (p.currentStreak > 0) return 'Ôn tập hoặc làm bài hôm nay để giữ streak, kẻo mất!'
  return 'Ôn tập hoặc làm bài hôm nay để bắt đầu streak'
})
</script>

<template>
  <div class="inline-flex items-center gap-2" :class="colorClass" :title="statusLabel">
    <svg v-if="icon === 'flame'" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0">
      <path
        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
      />
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0">
      <path d="M12 2L20 5V11C20 16 16.5 19.5 12 21C7.5 19.5 4 16 4 11V5L12 2Z" />
    </svg>

    <span v-if="props.variant === 'compact'" class="text-sm font-medium">{{ projection?.currentStreak ?? '–' }}</span>

    <div v-else>
      <p class="text-sm font-medium text-ink-900">{{ projection?.currentStreak ?? 0 }} ngày liên tục</p>
      <p class="text-xs text-ink-400">
        Kỷ lục: {{ projection?.longestStreak ?? 0 }} ngày
        <span v-if="(projection?.freezesAvailable ?? 0) > 0"> · Còn {{ projection!.freezesAvailable }} lá chắn</span>
      </p>
    </div>
  </div>
</template>
