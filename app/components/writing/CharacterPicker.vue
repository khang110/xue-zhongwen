<script setup lang="ts">
defineProps<{
  characters: string[]
  modelValue: string | null
}>()

defineEmits<{ 'update:modelValue': [string] }>()
</script>

<template>
  <div class="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
    <button
      v-for="c in characters"
      :key="c"
      type="button"
      class="tianzige w-full transition"
      :class="modelValue === c ? 'ring-2 ring-seal-500' : 'hover:border-seal-300'"
      @click="$emit('update:modelValue', c)"
    >
      <span class="font-hanzi text-xl text-ink-900">{{ c }}</span>
    </button>
  </div>
</template>
