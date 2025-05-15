// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
  ** Nuxt Single Page Application mode
  */
  ssr: false,

  /*
  ** Nitro configuration
  */
  nitro: {
    compatibilityDate: '2025-05-15'
  },
  
  /*
  ** Development server configuration
  */
  devServer: {
    host: '0.0.0.0'
  },

  /*
  ** App configuration
  */
  app: {
    head: {
      title: 'Chuck Norris PWA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Chuck Norris PWA with Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Auto import components
  */
  components: true,

  /*
  ** Modules
  */
  modules: [
    '@vite-pwa/nuxt'
  ],

  /*
  ** Build configuration
  */
  vite: {
    // Vite options
  },

  /*
  ** PWA configuration
  */
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Chuck Norris PWA',
      short_name: 'Chuck',
      display: 'standalone',
      theme_color: '#c00000',
      background_color: '#ffffff',
      icons: [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    }
  }
})
