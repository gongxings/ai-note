// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  modules: [
    '@ant-design-vue/nuxt',
    'nuxt-icon',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  plugins: [],
  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
    {
      prefix: 'Awesome',
      path: resolve('./components/awesome'),
      global: true,
    },
  ],
  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  antd: {
    // Options
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true },
})
