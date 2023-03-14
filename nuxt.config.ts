// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/main.scss'],
  app: {
    head: {
      title: 'This is title of my website',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
          rel: 'stylesheet',
        },
        { rel: 'icon', href: '/logo.svg' },
      ],
    },
  },
  modules: ['@vueuse/nuxt'],
});
