<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mb-2 text-2xl font-semibold">
    <slot>{{ text }}</slot>
  </div>
</template>
