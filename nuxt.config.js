export default {
  target: 'static',
  head: {
    title: 'skystar.lt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  plugins: ['~/plugins/vimeo-player'],

  components: [{ pathPrefix: false, path: '~/components' }],
  router: { prefetchLinks: false },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  modules: ['nuxt-i18n'],
  i18n: {
    vueI18nLoader: true,
    locales: [
      {
        code: 'lt',
        iso: 'lt',
        name: 'Lietuvių',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
      {
        code: 'ru',
        iso: 'ru',
        name: 'Русский',
      },
    ],
    defaultLocale: 'en',
    noPrefixDefaultLocale: true,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        lt: require('./locales/lt.json'),
        ru: require('./locales/ru.json'),
      },
    },
  },
  googleFonts: {
    families: {
      Ovo: [400],
      'Gilda Display': [400],
    },
  },
  generate: {
    fallback: true,
  },

  build: {
    vendor: ['vue-vimeo-player'],
  },
}
