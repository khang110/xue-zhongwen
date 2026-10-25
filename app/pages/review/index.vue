<script setup lang="ts">
const route = useRoute()
const tag = computed(() => (typeof route.query.tag === 'string' && route.query.tag ? route.query.tag : undefined))
</script>

<template>
  <div class="pt-6">
    <FlashcardDeck :key="tag ?? 'all'" :tag="tag" />
  </div>
</template>
