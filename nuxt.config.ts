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
    '@nuxt/content',
  ],
  // routeRules: {
  //   '/docs/': { prerender: true },
  // },
  content: {},
  plugins: [],
  vite: {
    server: {
      proxy: {
        '/dify-api/': {
          target: 'https://api.dify.ai/v1/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dify-api/, ''),
        },
      },
    },
  },
  components: [
    {
      prefix: 'E',
      path: resolve('./components/editor'),
      global: true,
    },
  ],
  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true },
})
