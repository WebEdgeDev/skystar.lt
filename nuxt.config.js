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

  plugins: ['~/plugins/dataApi'],

  components: [{ pathPrefix: false, path: '~/components' }],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['en', 'lt', 'ru'],
    defaultLocale: 'en',
  },
  googleFonts: {
    families: {
      Ovo: [400],
    },
  },
  generate: {
    fallback: true,
  },

  build: {},
}
