<template>
  <span class="relative group">
    <span class="group-hover:opacity-100 opacity-0 transition-all">
      <span v-if="text" class="absolute pointer-events-none bottom-0 translate-y-[calc(100%+16px)] left-1/2 -translate-x-1/2">
        <span class="absolute -translate-x-1/2 left-1/2 top-0 -translate-y-[calc(100%+4px)]">
          <span class="border-[8px] border-transparent border-b-black dark:border-b-white"></span>
        </span>
        <span class="bg-black dark:bg-white flex items-center justify-center rounded-xs">
          <span class="text-xs font-sans text-white dark:text-black text-nowrap px-3 py-2">
            <span role="tooltip" :id="tooltipId">
              {{ text }}
            </span>
          </span>
        </span>
      </span>
    </span>
    <span :aria-describedby="tooltipId">
      <slot :tooltipId="tooltipId" />
    </span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const tooltipId = useId()
</script>
