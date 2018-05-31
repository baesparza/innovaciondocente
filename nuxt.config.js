/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/innovaciondocente/'
  }
} : {};

module.exports = {
  /**
   * router base
   */
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Innovacion Docente',
    nativeUI: true,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Página web de Innovacion Docente | UTPL' },
      { name: 'msapplication-TileImage', content: '/static/icon.png' },
      { name: 'msapplication-TileColor', content: '#2a3e71' },
      { name: 'theme-color', content: '#2a3e71' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      // { rel: 'apple-touch-icon', href: '~/assets/images' },
      // { rel: 'apple-touch-icon', sizes: '57x57', href: '/Images/assets/icons/apple-icon-57x57-b82ef058b133f3197df61c326fa7cd6d.png' },
      // { rel: 'apple-touch-startup-image', sizes: '57x57', href: '/Images/assets/icons/apple-icon-57x57-b82ef058b133f3197df61c326fa7cd6d.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  /*
 ** Customize the progress bar color
 */
  loading: {
    color: '#e9ecef',
    height: '3px'
  },
  loadingIndicator: {
    name: 'three-bounce',
    color: 'white',
    background: "#0D47A1"
  },
  /**
   * mode 'spa' or 'universal'
   */
  mode: 'universal',
  /**
   * manifest
   */
  manifest: {
    name: 'Innovación Docente UTPL',
    lang: 'es',
    short_name: 'Ascendere',
    start_url: '/',
    display: 'standalone',
    orientation: "portrait",
    background_color: "#2a3e71",
    theme_color: "#2a3e71",
    description: "Pagina web de Innovación Docente. UTPL",
  },
  // workbox options
  workbox: {

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    optimization: {
      splitChunks: {
        name: true
      }
    },
    extractCSS: true,
    vendor: [
      'vee-validate',
      'axios',
      'vue-lazyload'
    ]
  },
  css: [
    '@/assets/bootstrap/bootstrap-grid.scss',
    '@/assets/router-transition.scss',
    '@/assets/style.scss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~/plugins/filters.js', ssr: true },
    { src: '~/plugins/lazyload.js', ssr: true }
  ]
}


