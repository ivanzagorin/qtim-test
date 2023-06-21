import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.png' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/assets/img/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900'
        }
      ],
      script: [
        { src: 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
        { src: 'assets/vendor/glightbox/js/glightbox.min.js', body: true },
        { src: 'assets/vendor/isotope-layout/isotope.pkgd.min.js', body: true },
        { src: 'assets/vendor/swiper/swiper-bundle.min.js', body: true },
        { src: 'assets/vendor/php-email-form/validate.js', body: true },
        { src: 'assets/js/main.js', body: true }
      ]
    }
  },
  css: [
    '~/assets/vendor/animate.css/animate.min.css',
    '~/assets/vendor/bootstrap/css/bootstrap.min.css',
    '~/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '~/assets/vendor/boxicons/css/boxicons.min.css',
    '~/assets/vendor/glightbox/css/glightbox.min.css',
    '~/assets/vendor/swiper/swiper-bundle.min.css',
    '~/assets/css/style.css'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  }
})
