<template>
  <form @submit="onSubmit" target="_blank" method="POST" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeCT7hSVsBzyFM7qp40F3MYrIvQ_4nAKfqMDPd_aRHCO52Lw/formResponse" class="block space-y-[1rem] font-sans">
    <ContactFormInput type="text" label="Name" name="entry.383020617" v-model="name" placeholder="Jason Statham" />
    <ContactFormInput type="email" label="Email" name="entry.1860689314" v-model="email" placeholder="jasonstatham@example.com" />
    <ContactFormInput type="text" label="Subject" name="entry.2105845452" v-model="subject" placeholder="By the powers vested in me," />
    <ContactFormInput type="textarea" label="Message" name="entry.1814779587" v-model="message" placeholder="I now pronounce you man and knife." />
    <button class="bg-black text-white dark:bg-white dark:text-black rounded-md w-full h-8 cursor-pointer flex items-center justify-center gap-2">
      <span class="text-xs">
        Send Message
      </span>
      <svg class="w-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License --><path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"/></svg>
    </button>
    <p class="text-xs">
      If this form doesn't work, please submit via <AppLink href="https://forms.gle/hAPgmN3eDBrWXf3f6">Google Form</AppLink>
    </p>
  </form>
</template>

<script setup lang="ts">
const name = ref<string>()
const email = ref<string>()
const subject = ref<string>()
const message = ref<string>()

function onSubmit() {
  setTimeout(() => {
    name.value = ""
    email.value = ""
    subject.value = ""
    message.value = ""
  }, 100)
}
</script>
