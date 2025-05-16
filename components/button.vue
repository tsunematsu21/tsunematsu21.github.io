<template>
  <component :is="component.element" v-bind="{ ...component.props }" class="cursor-pointer">
    <span class="inline-flex items-center justify-center gap-2 h-10 min-w-10 rounded-md border-black dark:border-white border-2">
      <span class="inline-flex items-center justify-center gap-2" :class="$slots.default ? 'px-4' : 'px-0'">
        <span v-if="$slots.default" class="text-xs font-sans font-bold -mb-[2px]">
          <slot />
        </span>
        <span v-if="href" class="[&_svg]:h-6">
          <span v-if="href.startsWith('https://github.com')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg>
          </span>
          <span v-else-if="href.startsWith('https://pkg.go.dev')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.695 14.305c1.061 1.06 2.953.888 4.226-.384c1.272-1.273 1.444-3.165.384-4.226s-2.953-.888-4.226.384c-1.272 1.273-1.444 3.165-.384 4.226M12.68 9.233c-1.084-.497-2.545-.191-3.591.846c-1.284 1.273-1.457 3.165-.388 4.226c1.07 1.06 2.978.888 4.261-.384A3.67 3.67 0 0 0 14 12h-2.427M5.5 15H4m2-6H4m1 3H2"/></svg>
          </span>
          <span v-else-if="href.startsWith('https://instagram.com')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"/></g></svg>
          </span>
          <span v-else-if="href.startsWith('https://x.com')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/></svg>
          </span>
          <span v-else-if="href.startsWith('https://note.com')">
            <svg class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493 493"><path d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z"/></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><!-- Icon from Octicons by GitHub - https://github.com/primer/octicons/blob/main/LICENSE --><path fill="currentColor" d="M4.53 4.75A.75.75 0 0 1 5.28 4h6.01a.75.75 0 0 1 .75.75v6.01a.75.75 0 0 1-1.5 0v-4.2l-5.26 5.261a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L9.48 5.5h-4.2a.75.75 0 0 1-.75-.75"/></svg>
          </span>
        </span>
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  href?: string
}>()

const component = computed(() => {
  if (props.href) {
    return {
      element: 'a',
      props: {
        href: props.href,
        target: '_blank'
      }
    }
  } else {
    return {
      element: 'button',
      props: {}
    }
  }
});
</script>
