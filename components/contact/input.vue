<template>
  <label class="block">
    <div class="text-xs font-sans font-bold">
      {{ label }}:
    </div>
    <component :is="component.element" v-bind="{ ...component.props }" required class="border border-black/50 dark:border-white/50 rounded-sm w-full px-2 py-1 text-sm" />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: "text" | "email" | "textarea",
  label: string,
  name: string,
  placeholder?: string,
}>()

const component = computed(() => {
  if (props.type == 'textarea') {
    return {
      element: 'textarea',
      props: {
        name: props.name,
        rows: 5,
        placeholder: props.placeholder,
      }
    }
  } else {
    return {
      element: 'input',
      props: {
        name: props.name,
        type: props.type,
        placeholder: props.placeholder,
      }
    }
  }
});
</script>
