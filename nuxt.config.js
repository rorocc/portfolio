export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Christopher Rock - Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hi, I\'m Chris, a UX Designer based in Northern Germany. I\'m interested in Human-centered design solutions and creativity of all kinds.' },
      { hid: 'og:description', name: 'og:description', content: 'Hi, I\'m Chris, a UX Designer based in Northern Germany. I\'m interested in Human-centered design solutions and creativity of all kinds.' },
      { hid: 'og:locale', property:'og:locale', content:'en_US' },
      { hid: 'og:image', property:'og:image', content:'/seo_ogimage.png' },
      { hid: 'og:site_name', name: 'og:site_name', content:'Christopher Rock - Portfolio'},
      { hid: 'og:type', name: 'og:type', content:'website'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.png' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
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
      scrollTrigger: true
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
