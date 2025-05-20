<template>
  <div class="max-w-2xl mx-auto space-y-[8rem] p-8">
    <header class="relative space-y-[2rem]">
      <h1 class="flex flex-col items-start">
        <span>Hi,</span>
        <span>I'm Masato</span>
        <span>Tsunematsu</span>
      </h1>
      <div>
        <p class="absolute top-0 right-0 flex flex-wrap items-end flex-col text-[clamp(10px,calc(10/375*100vw),18px)] italic tracking-widest leading-[1.6]">
          <span>The coke drinking</span>
          <span>infrustructure engineer</span>
          <span>based in Japan</span>
        </p>
      </div>
      <div class="flex items-center justify-center gap-4">
        <div class="h-1 flex-1 bg-black dark:bg-white"></div>
        <img src="/avatar.webp" alt="Masato Tsunematsu" class="w-[clamp(128px,calc(128/375*100vw),320px)] rounded-full border-4 border-black dark:border-white">
        <div class="h-1 flex-[0.25] bg-black dark:bg-white"></div>
      </div>
      <SocialLink />
    </header>
    <main class="space-y-[4rem]">
      <slot />
    </main>
    <footer class="space-y-[2rem] mt-[12rem]">
      <SocialLink />
      <div class="flex flex-row items-center justify-center gap-2">
        <AppLogo class="w-14" />
        <div class="flex flex-col items-start font-sans pt-3">
          <span class="text-xs">Made with love by</span>
          <span class="text-sm">Masato Tsunematsu</span>
        </div>
      </div>
    </footer>
  </div>
</template>
