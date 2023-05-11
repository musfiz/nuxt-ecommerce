// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:[
    // contains all global styles	
    "@/assets/fonts/segoeui.css",
    "@/assets/scss/app.scss"
  ], 
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  }
})
