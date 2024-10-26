// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/app.scss'],
  modules: ['@nuxt/ui'],
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL
    }
  }
})
