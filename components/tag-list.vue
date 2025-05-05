<template>
  <div class="flex flex-wrap items-start justify-start gap-2">
    <small v-for="tag of tags">
      #{{ tag }}
    </small>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
</script>
