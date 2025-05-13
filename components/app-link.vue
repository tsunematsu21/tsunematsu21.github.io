<template>
  <a :href="href" target="_blank" class="inline-flex items-center underline text-primary hover:opacity-75 transition-all font-bold">
    <span>
      <slot />
    </span>
    <span>
      <svg class="w-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><!-- Icon from Octicons by GitHub - https://github.com/primer/octicons/blob/main/LICENSE --><path fill="currentColor" d="M4.53 4.75A.75.75 0 0 1 5.28 4h6.01a.75.75 0 0 1 .75.75v6.01a.75.75 0 0 1-1.5 0v-4.2l-5.26 5.261a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L9.48 5.5h-4.2a.75.75 0 0 1-.75-.75"/></svg>
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string
}>()
</script>
