export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'static',
  generate: {
    cache: false,
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AppreCode',
    titleTemplate: '%s | AppreCode',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This project prepare for apprecode.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter-description',
        property: 'twitter:description',
        content: 'This project prepare for apprecode.',
      },
      {
        hid: 'og-desc',
        property: 'og:description',
        content: 'This project prepare for apprecode.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'tech, apprecode, caseproject, case',
      },
      {
        hid: 'og-site_name',
        property: 'og:site_name',
        content: 'Apprecode',
      },
      {
        hid: 'twitter-card',
        property: 'twitter:card',
        content: 'summary',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alex+Brush&family=Manrope:wght@500&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/axios'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        dir: 'ltr'
      },
      {
        name: 'Arabic',
        code: 'ar',
        iso: 'ar-AR',
        file: 'ar.json',
        dir: 'rtl'
      }
    ],
    lazy: true,
    defaultDirection: "ltr",
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  axios: {
    baseURL: 'https://apprecode.com/api',
    headers: {
      common: {
        Authorization: 'Bearer token'
      }
    }
  },
}
