<script setup lang="ts">
defineProps<{
  tag: string
}>()

const tagLabels: Record<string, string> = {
  'giao-duc': 'Giáo dục',
  'gia-dinh': 'Gia đình',
  'mua-sam': 'Mua sắm',
  'suc-khoe': 'Sức khỏe',
  'cong-viec': 'Công việc',
  'du-lich': 'Du lịch',
  'cong-nghe': 'Công nghệ',
  'thoi-tiet': 'Thời tiết',
  'van-hoa': 'Văn hóa',
  'am-thuc': 'Ẩm thực'
}
</script>

<template>
  <NuxtLink
    :to="{ path: '/', query: { tag } }"
    class="inline-flex items-center rounded-full bg-ink-100 px-2 py-0.5 text-xs text-ink-600 transition hover:bg-seal-100 hover:text-seal-700"
  >
    #{{ tagLabels[tag] ?? tag }}
  </NuxtLink>
</template>
