<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    percent: number
    size?: number
    strokeWidth?: number
  }>(),
  { size: 40, strokeWidth: 4 }
)

const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const clamped = computed(() => Math.min(100, Math.max(0, props.percent)))
const offset = computed(() => circumference.value * (1 - clamped.value / 100))
const center = computed(() => props.size / 2)
</script>

<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" class="shrink-0">
    <circle
      :cx="center"
      :cy="center"
      :r="radius"
      fill="none"
      stroke="currentColor"
      class="text-ink-100"
      :stroke-width="strokeWidth"
    />
    <circle
      :cx="center"
      :cy="center"
      :r="radius"
      fill="none"
      stroke="currentColor"
      class="text-jade-500 transition-all duration-500"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="offset"
      :transform="`rotate(-90 ${center} ${center})`"
    />
  </svg>
</template>
