<template>
  <div class="max-w-2xl mx-auto space-y-[4rem] p-8">
    <header>
      <slot name="header" />
    </header>
    <main class="space-y-[6rem]">
      <slot />
    </main>
    <footer class="space-y-[2rem]">
      <slot name="footer" />
    </footer>
  </div>
</template>
