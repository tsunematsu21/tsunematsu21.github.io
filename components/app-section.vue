<template>
  <section class="space-y-4 relative pb-4">
    <header>
      <slot name="header" />
    </header>
    <div class="space-y-2 [&_section:last-child]:pb-0">
      <slot />
    </div>
    <footer>
      <slot name="footer" />
    </footer>
  </section>
</template>
