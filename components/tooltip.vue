<template>
  <span class="relative group">
    <span v-if="text" class="absolute pointer-events-none bottom-0 translate-y-[calc(100%+12px)] left-1/2 -translate-x-1/2">
      <span class="group-hover:opacity-100 group-focus:opacity-100 opacity-0 transition-all">
        <span class="bg-black flex items-center justify-center rounded-xs">
          <span class="text-xs font-sans text-white text-nowrap px-3 py-2">
            <span role="tooltip" :id="tooltipId">
              {{ text }}
            </span>
          </span>
        </span>
        <span class="absolute -translate-x-1/2 left-1/2 top-0 -translate-y-full">
          <span class="border-8 border-transparent border-b-black"></span>
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
