<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>

<template>
  <span
    class="mt-1 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-seal-100 font-heading text-[13px] text-seal-800"
  >
    {{ number }}
  </span>
</template>
