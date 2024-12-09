// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US', file: 'en-US.ts' },
      { code: 'fr', language: 'fr-FR', file: 'fr-FR.ts' },
    ],
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    customRoutes: 'config',
    pages: {
      home: {
        en: '/',
        fr: '/',
      },
      services: {
        en: '/services',
        fr: '/services',
      },
      experiences: {
        en: '/work-experiences',
        fr: '/experiences-professionnelles',
      },
      dev: {
        en: '/dev-projects',
        fr: '/projets-dev',
      },
      art: {
        en: '/art-gallery',
        fr: '/galerie-art',
      },
      about: {
        en: '/about',
        fr: '/a-propos',
      },
      contact: {
        en: '/contact-me',
        fr: '/contactez-moi',
      },
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
