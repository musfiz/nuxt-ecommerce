// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:[
    // contains all global styles	
    "@/assets/fonts/segoeui.css",
    "@/assets/scss/app.scss"
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js'
      },
      {
        code: 'bn',
        file: 'bn.js'
      }
    ],
    langDir: 'lang/',
    defaultLocale: 'bn',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
})
