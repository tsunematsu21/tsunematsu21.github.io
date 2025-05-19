// import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Ruda', 'sans-serif'],
            serif: ['Roboto Slab', 'serif'],
          },
          colors: {
            white: "#ffffff",
            black: "#333333",
            primary: "#00a8a6",
          }
        }
      }
    }
  }
})
