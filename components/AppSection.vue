<template>
  <section class="space-y-[2rem] relative pb-4">
    <header>
      <small v-if="label">
        <SubText>
          {{ label }}
        </SubText>
      </small>
      <component :is="heading">
        {{ title }}
      </component>
      <ul v-if="tags" class="flex flex-wrap items-start justify-start gap-2">
        <li v-for="tag of tags" :key="tag">
          <SubText>
            #{{ tag }}
          </SubText>
        </li>
      </ul>
    </header>
    <div class="space-y-[1rem] [&_section]:py-[1rem]">
      <slot />
    </div>
    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  label?: string
  tags?: string[]
  level?: 2 | 3
}>()

const heading = computed(() => {
  if (props.level == 3) {
    return 'h3'
  } else {
    return 'h2'
  }
});
</script>
