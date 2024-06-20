<template>
  <main>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>未找到文档</h1>
      </template>
      <template #empty>
        <h1>什么也没有</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup>
onMounted(async () => {
  console.log('页面加载了')
})
</script>

<style></style>
