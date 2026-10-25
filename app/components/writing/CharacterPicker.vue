<script setup lang="ts">
defineProps<{
  characters: string[]
  modelValue: string | null
}>()

defineEmits<{ 'update:modelValue': [string] }>()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2">
    <button
      v-for="c in characters"
      :key="c"
      type="button"
      class="tianzige w-full !rounded-[18px] transition"
      :class="modelValue === c ? 'ring-2 ring-seal-600' : 'hover:border-seal-300'"
      @click="$emit('update:modelValue', c)"
    >
      <span class="font-hanzi text-2xl text-ink-800">{{ c }}</span>
    </button>
  </div>
</template>
