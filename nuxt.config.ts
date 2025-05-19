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
  },
  app: {
    head: {
      title: 'Masato Tsunematsu - The coke drinking infrustructure engineer based in Japan.',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'This is my amazing site, I will give you power of the gorilla.' },
        { property: 'og:title', content: 'Masato Tsunematsu - The coke drinking infrustructure engineer based in Japan.' },
        { property: 'og:description', content: 'This is my amazing site, I will give you power of the gorilla.' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ]
    }
  }
})
