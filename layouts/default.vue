<template>
  <div class="max-w-3xl mx-auto space-y-16 p-8">
    <header>
      <slot name="header" />
    </header>
    <main class="space-y-8">
      <slot />
    </main>
    <footer class="space-y-16">
      <slot name="footer" />
    </footer>
  </div>
</template>
