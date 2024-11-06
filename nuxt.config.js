export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // generate 404 error fallback page
  generate: { fallback: '404.html' },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s Christopher Rock – UX Designer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi, I\'m Chris, a UX Designer based in Leipzig, Germany. I\'m interested in Human-centered design solutions and creativity of all kinds.' },
      { hid: 'og:locale', property:'og:locale', content:'en_US' },
      { hid: 'og:image', property:'og:image', content:'/seo_ogimage.png' },
      { hid: 'og:image:width', property:'og:image:width', content:'1200' },
      { hid: 'og:image:height', property:'og:image:height', content:'630' },
      { hid: 'og:site_name', name: 'og:site_name', content:'Christopher Rock – UX Design'},
      { hid: 'og:type', name: 'og:type', content:'website'},
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-title', content: 'Christopher Ro. – UX Designer'},
      { name: 'application-name', content: 'Christopher Ro. – UX Designer'},
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'manifest', href: '/safari-pinned-tab.svg', color: '#ffffff' },
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/animations.css',
    '@/assets/css/typography.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      draggable: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

}
