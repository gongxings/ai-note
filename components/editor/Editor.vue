<template>
  <div v-if="editor">
    <a-button
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >
      bold
    </a-button>
    <a-button
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor.isActive('italic') }"
      @click="editor.chain().focus().toggleItalic().run()"
    >
      italic
    </a-button>
    <a-button
      :disabled="!editor.can().chain().focus().toggleStrike().run()"
      :class="{ 'is-active': editor.isActive('strike') }"
      @click="editor.chain().focus().toggleStrike().run()"
    >
      strike
    </a-button>
    <a-button
      :disabled="!editor.can().chain().focus().toggleCode().run()"
      :class="{ 'is-active': editor.isActive('code') }"
      @click="editor.chain().focus().toggleCode().run()"
    >
      code
    </a-button>
    <a-button @click="editor.chain().focus().unsetAllMarks().run()"> clear marks </a-button>
    <a-button @click="editor.chain().focus().clearNodes().run()"> clear nodes </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('paragraph') }"
      @click="editor.chain().focus().setParagraph().run()"
    >
      paragraph
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      h1
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      h2
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
    >
      h3
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
    >
      h4
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
    >
      h5
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
    >
      h6
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('bulletList') }"
      @click="editor.chain().focus().toggleBulletList().run()"
    >
      bullet list
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('orderedList') }"
      @click="editor.chain().focus().toggleOrderedList().run()"
    >
      ordered list
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('codeBlock') }"
      @click="editor.chain().focus().toggleCodeBlock().run()"
    >
      code block
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('blockquote') }"
      @click="editor.chain().focus().toggleBlockquote().run()"
    >
      blockquote
    </a-button>
    <a-button @click="editor.chain().focus().setHorizontalRule().run()"> horizontal rule </a-button>
    <a-button @click="editor.chain().focus().setHardBreak().run()"> hard break </a-button>
    <a-button
      :disabled="!editor.can().chain().focus().undo().run()"
      @click="editor.chain().focus().undo().run()"
    >
      undo
    </a-button>
    <a-button
      :disabled="!editor.can().chain().focus().redo().run()"
      @click="editor.chain().focus().redo().run()"
    >
      redo
    </a-button>
  </div>
  <bubble-menu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
    <a-button
      :class="{ 'is-active': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >
      bold
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('italic') }"
      @click="editor.chain().focus().toggleItalic().run()"
    >
      italic
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('strike') }"
      @click="editor.chain().focus().toggleStrike().run()"
    >
      strike
    </a-button>
  </bubble-menu>
  <editor-content :editor="editor" />
  <div v-if="editor" class="character-count">
    {{ editor.storage.characterCount.characters() }}/{{ limit }} characters
    <br />
    {{ editor.storage.characterCount.words() }} words
  </div>
  <floating-menu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
    >
      H1
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
    >
      H2
    </a-button>
    <a-button
      :class="{ 'is-active': editor.isActive('bulletList') }"
      @click="editor.chain().focus().toggleBulletList().run()"
    >
      Bullet List
    </a-button>
    <button
      @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()"
    >
      insertTable
    </button>
    <button @click="editor.chain().focus().addColumnBefore().run()">addColumnBefore</button>
    <button @click="editor.chain().focus().addColumnAfter().run()">addColumnAfter</button>
    <button @click="editor.chain().focus().deleteColumn().run()">deleteColumn</button>
    <button @click="editor.chain().focus().addRowBefore().run()">addRowBefore</button>
    <button @click="editor.chain().focus().addRowAfter().run()">addRowAfter</button>
    <button @click="editor.chain().focus().deleteRow().run()">deleteRow</button>
    <button @click="editor.chain().focus().deleteTable().run()">deleteTable</button>
    <button @click="editor.chain().focus().mergeCells().run()">mergeCells</button>
    <button @click="editor.chain().focus().splitCell().run()">splitCell</button>
    <button @click="editor.chain().focus().toggleHeaderColumn().run()">toggleHeaderColumn</button>
    <button @click="editor.chain().focus().toggleHeaderRow().run()">toggleHeaderRow</button>
    <button @click="editor.chain().focus().toggleHeaderCell().run()">toggleHeaderCell</button>
    <button @click="editor.chain().focus().mergeOrSplit().run()">mergeOrSplit</button>
    <button @click="editor.chain().focus().setCellAttribute('colspan', 2).run()">
      setCellAttribute
    </button>
    <button @click="editor.chain().focus().fixTables().run()">fixTables</button>
    <button @click="editor.chain().focus().goToNextCell().run()">goToNextCell</button>
    <button @click="editor.chain().focus().goToPreviousCell().run()">goToPreviousCell</button>
  </floating-menu>
</template>

<script>
import {
  Editor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
  NodeViewContent,
  NodeViewWrapper,
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import CharacterCount from '@tiptap/extension-character-count'
// import Collaboration from "@tiptap/extension-collaboration";
// import Placeholder from "@tiptap/extension-placeholder";

export default defineComponent({
  name: 'Editor',
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },

  data() {
    return {
      editor: null,
      limit: 280,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
        CharacterCount.configure({
          limit: this.limit,
        }),
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
})
</script>
