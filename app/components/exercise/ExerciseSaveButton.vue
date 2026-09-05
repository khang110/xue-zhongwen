<script setup lang="ts">
defineProps<{
  canSave: boolean
  saving: boolean
  justSaved: boolean
  savedAtLabel: string
}>()

defineEmits<{ save: [] }>()
</script>

<template>
  <template v-if="canSave">
    <button
      type="button"
      :disabled="saving"
      class="rounded-md border border-jade-300 px-3 py-1.5 text-sm text-jade-700 transition hover:bg-jade-50 disabled:cursor-not-allowed disabled:opacity-40"
      @click="$emit('save')"
    >
      {{ saving ? 'Đang lưu…' : 'Lưu lại' }}
    </button>
    <span v-if="justSaved" class="text-xs font-medium text-jade-600">✓ Đã lưu</span>
    <span v-else-if="savedAtLabel" class="text-xs text-ink-400">Đã lưu lúc {{ savedAtLabel }}</span>
  </template>
</template>
