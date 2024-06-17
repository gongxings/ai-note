<template>
  <a-popover placement="bottom" trigger="click">
    <template #content>
      <ul class="dropdown">
        <li class="dropdown__opeartion" @click="handleGenerate">
          <span>生成大纲</span>
        </li>
        <li class="dropdown__opeartion" @click="handleContinue">
          <span>智能续写</span>
        </li>
      </ul>
    </template>
    <a-tooltip placement="top">
      <template #title>
        <span>AI生成</span>
      </template>
      <div class="tools__button">AI</div>
    </a-tooltip>
  </a-popover>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
const props = defineProps(['editor'])
const content = ref('')
const md = MarkdownIt()
async function handleGenerate() {
  const reqData = {
    inputs: { research_topic: '中国新能源汽车产业国际竞争力研究' },
    response_mode: 'blocking',
    user: 'abc-123',
  }
  const difyUrl = '/dify-api/completion-messages'
  try {
    const { answer } = await $fetch(difyUrl, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer app-8uET6oAOnCcW7tzsvClCDJLU',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
    })
    // console.log(response, 'response')
    content.value = answer
    // if (!response.data) {
    //   throw new Error('Network response was not ok')
    // }
    // const reader = response.body.getReader()
    // const decoder = new TextDecoder()
    // let done = false

    // while (!done) {
    //   const { value, done: doneReading } = await reader.read()
    //   done = doneReading
    //   content.value += decoder.decode(value, { stream: true })
    // }
    props.editor.commands.insertContent(md.render(content.value))
    // props.editor.commands.insertContent([
    //   {
    //     type: 'heading',
    //     content: [
    //       {
    //         type: 'text',
    //         text: '中国新能源汽车产业国际竞争力研究',
    //       },
    //     ],
    //   },
    //   {
    //     type: 'paragraph',
    //     content: [
    //       {
    //         type: 'text',
    //         text: md.render(content.value),
    //       },
    //     ],
    //   },
    // ])
  } catch (error) {
    // 错误处理
    console.error('请求出错:', error)
  }
}
async function handleContinue() {
  const { state } = props.editor.view
  const { from } = state.selection
  // 获取光标以上的内容
  const content = state.doc.textBetween(0, from, '\n')
  // console.log('query', content)
  const reqData = {
    inputs: { query: content },
    response_mode: 'blocking',
    user: 'abc-123',
  }
  const difyUrl = '/dify-api/completion-messages'
  try {
    const { answer } = await $fetch(difyUrl, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer app-ZWJageB5QuGBpCXRb6qW2cpT',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
    })
    props.editor.commands.insertContentAt(from, answer)
  } catch (error) {
    // 错误处理
    console.error('请求出错:', error)
  }
}
</script>

<style></style>
