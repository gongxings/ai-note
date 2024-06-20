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
  routeRules: {
    'docs/': { prerender: true },
  },
  content: {
    sources: {
      content: {
        // 指定了内容的驱动类型。'fs' 表示使用文件系统作为内容的来源，这是最常见的情况，意味着你的内容存储在项目的某个目录下，如 'content/'。
        driver: 'fs',
        prefix: '/docs', // All contents inside this source will be prefixed with `/docs`
        base: resolve(__dirname, 'content'),
      },
    },
    documentDriven: {
      navigation: true,
      page: true,
      surround: true,
      // Will use `theme` global to search for a fallback `layout` key. // 布局回退配置
      layoutFallbacks: ['DocLayout'],
      // Will inject `[...slug].vue` as the root page.
      injectPage: true,
    },
    navigation: {
      fields: ['author', 'publishedAt'],
    },
    markdown: {
      // defaultLayout: 'docLayout',
      // Object syntax can be used to override default options
      remarkPlugins: {
        // Override remark-emoji options
        'remark-emoji': {
          emoticon: true,
        },
        // Disable remark-gfm
        'remark-gfm': false,
        // Add remark-oembed
        // 'remark-oembed': {
        //   // Options
        // },
      },
    },
  },
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
    pageTransition: { name: 'pages', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true },
})
