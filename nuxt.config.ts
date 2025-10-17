// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    // '@nuxt/ui', 
    '@primevue/nuxt-module', 
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
      options: {
          theme: {
              preset: Aura,
              darkModeSelector: '.app-dark'
          }
      }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/fmn-icon.png' }
      ],
      title: 'FMN | Flour Mills of Nigeria Plc',
      titleTemplate: 'FMNPLC - %s',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { 
          name: 'author', 
          content: 'FMN' 
        },
        {
          name: 'description',
          content:
              'Feeding and Enriching Lives Every Day',
        },
        {
            name: 'Keywords',
            content:
                'FMN,The FMN Group,Flour Mills of Nigeria,Flour Mills of Nigeria Plc, Flour Mills,Flour Business,Flour Company, Flour Distributor,Flour Companies in Nigeria,Flour Business in Nigeria, Flour Recipe,Flour Bag,Largest Flour Mill in Nigeria,List of Flour Mills In Nigeria,Flour food processing company,',
        },
        {
            property: 'og:image',
            content: 'https://www.fmnplc.com/_nuxt/img/fmn-logo-white.ce6c4b3.png',
        },
        {
            property: 'og:title',
            content: 'FMN | Flour Mills of Nigeria Plc',
        },
        {
            property: 'og:site_name',
            content: 'FMN',
        },
        {
            property: 'og:description',
            content:
                'Feeding and Enriching Lives Every Day',
        },
        {
            property: 'og:url',
            content: 'https://www.fmnplc.com/',
        },
        { name: 'theme-color', content: '#007B47' },
      ],
    },
  },
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
    'primeicons/primeicons.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})