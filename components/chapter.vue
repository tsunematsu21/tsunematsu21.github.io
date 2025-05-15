<template>
  <section class="space-y-[2rem] relative pb-4">
    <header>
      <slot name="header" />
    </header>
    <div class="space-y-[1rem] [&_section:not(:last-child)]:pb-[3rem]">
      <slot />
    </div>
    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </section>
</template>
