<script lang="ts" setup>
const { awesome } = useAppConfig()
</script>

<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <div
      class="mx-auto max-w-screen-2xl flex flex-1 flex-col items-center justify-between px-4 py-2 text-center text-xs text-gray-400 md:flex-row space-y-2 md:text-left md:space-y-0"
    >
      <div>
        Copyright ©
        {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
        {{ awesome?.author?.name || '' }}. All rights reserved.
      </div>
      <div>{{ awesome.name }}</div>
    </div>
  </footer>
</template>
