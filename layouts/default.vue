<template>
  <div class="max-w-2xl mx-auto space-y-[4rem] p-8">
    <header>
      <slot name="header" />
    </header>
    <main class="space-y-[4rem]">
      <slot />
    </main>
    <footer class="space-y-[2rem] mt-[12rem]">
      <slot name="footer" />
    </footer>
  </div>
</template>
