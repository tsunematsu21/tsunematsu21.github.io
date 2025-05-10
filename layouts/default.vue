<template>
  <div class="max-w-3xl mx-auto space-y-[4rem] p-8">
    <header>
      <slot name="header" />
    </header>
    <main class="space-y-[3rem]">
      <slot />
    </main>
    <footer class="space-y-[2rem]">
      <slot name="footer" />
    </footer>
  </div>
</template>
