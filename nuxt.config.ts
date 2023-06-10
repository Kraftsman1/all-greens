// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      'Playfair Display': true,
      'Inter': true,
      
    }
  }
})