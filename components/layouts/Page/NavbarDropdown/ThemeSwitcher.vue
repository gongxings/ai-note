<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})
const currentStyle = toRef(props, 'type')

const availableThemes = [
  {
    key: 'light',
    text: 'Light',
  },
  {
    key: 'dark',
    text: 'Dark',
  },
  {
    key: 'system',
    text: 'System',
  },
]
</script>

<template>
  <div class="flex items-center">
    <HeadlessListbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="$colorMode.preference"
      as="div"
      class="relative flex items-center"
    >
      <HeadlessListboxLabel class="sr-only">Theme</HeadlessListboxLabel>
      <HeadlessListboxButton type="template">
        <AwesomeLink class="text-gray-600 dark:text-gray-400">
          <span class="flex items-center justify-center dark:hidden">
            <Icon name="uil:sun" />
          </span>
          <span class="hidden items-center justify-center dark:flex">
            <Icon name="uil:moon" />
          </span>
        </AwesomeLink>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
        class="dark:highlight-white/5 absolute right-0 top-full z-50 w-36 origin-top-right overflow-hidden rounded-lg bg-white p-1 py-1 text-sm text-gray-700 font-semibold shadow-lg outline-none ring-1 ring-gray-900/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-0"
      >
        <HeadlessListboxOption
          v-for="theme in availableThemes"
          :key="theme.key"
          :value="theme.key"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30': $colorMode.preference === theme.key,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30': $colorMode.preference !== theme.key,
          }"
        >
          <span class="mr-2 flex items-center text-sm">
            <Icon v-if="theme.key === 'light'" name="uil:sun" />
            <Icon v-else-if="theme.key === 'dark'" name="uil:moon" />
            <Icon v-else-if="theme.key === 'system'" name="uil:laptop" />
          </span>
          {{ theme.text }}
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="$colorMode.preference"
      class="w-full border border-gray-900/10 rounded bg-transparent px-2 py-1 pr-3 text-gray-700 outline-none dark:border-gray-50/[0.2] dark:text-gray-300"
    >
      <option v-for="theme in availableThemes" :key="theme.key" :value="theme.key">
        {{ theme.text }}
      </option>
    </select>
  </div>
</template>
