<template>
  <div class="flex flex-wrap items-start justify-start gap-2">
    <span v-for="tag of tags" class="text-sm opacity-70 font-sans">
      #{{ tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
</script>
