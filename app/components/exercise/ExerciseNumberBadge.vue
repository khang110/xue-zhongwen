<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>

<template>
  <span
    class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-100 text-xs font-semibold text-ink-600"
  >
    {{ number }}
  </span>
</template>
