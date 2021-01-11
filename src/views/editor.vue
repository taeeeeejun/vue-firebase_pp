<template>
    <v-sheet>
        <v-subheader>
            editor
        </v-subheader>
        <v-btn @click="toogle=!toogle">toogle</v-btn>
        <v-btn @click="read">read</v-btn>
        <editor :options="options" :initialValue="text" ref="editor"></editor>
        <viewer v-if="toogle" :initialValue="text"></viewer>
    </v-sheet>
</template>
<script>
export default {
  data () {
    return {
      options: {
        language: 'ko'
      },
      text: '# abcdefg',
      toogle: false
    }
  },
  methods: {
    read () {
      this.text = this.$refs.editor.invoke('getMarkdown')
      alert(this.$refs.editor.invoke('getMarkdown'))
    }
  }
}
</script>
