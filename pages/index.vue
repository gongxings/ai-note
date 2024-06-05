<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'default' })
useHead({
  titleTemplate: '',
  title: awesome?.name || 'Nuxt 3 Awesome Starter',
})
</script>

<template>
  <EEditor />
</template>
