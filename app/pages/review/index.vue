<script setup lang="ts">
const route = useRoute()
const tag = computed(() => (typeof route.query.tag === 'string' && route.query.tag ? route.query.tag : undefined))
</script>

<template>
  <div>
    <h1 class="font-hanzi text-2xl font-semibold text-ink-900">Ôn tập</h1>
    <p class="mt-1 text-ink-500">
      <template v-if="tag">Đang ôn theo chủ đề <TagBadge :tag="tag" /></template>
      <template v-else>Ôn tất cả từ vựng đã học, đến hạn hôm nay.</template>
    </p>

    <div class="mt-8">
      <FlashcardDeck :key="tag ?? 'all'" :tag="tag" />
    </div>
  </div>
</template>
