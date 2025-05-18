<template>
  <form class="block space-y-[1rem] font-sans">
    <ContactInput type="text" label="Name" />
    <ContactInput type="email" label="Email" />
    <ContactInput type="text" label="Subject" />
    <ContactInput type="textarea" label="Message" />
    <button class="bg-black text-white dark:bg-white dark:text-black rounded-md w-full h-8 cursor-pointer flex items-center justify-center gap-2">
      <span class="text-xs">
        Send Message
      </span>
      <svg class="w-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License --><path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"/></svg>
    </button>
  </form>
</template>
