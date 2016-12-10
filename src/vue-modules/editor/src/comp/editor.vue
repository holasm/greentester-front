<template lang=pug>
.layout
  .row
    .col.md-8.md-o-2
      //- mdview(:text="input")
    .col.xs-12.md-6
      .panel.editor
        .panel-header Markdown editor
        .panel-content 
          textarea.su-editor-area(ref='editArea', :value="input", v-bind:style="computedStyle", 
            @input="update"
            @keydown.tab="keyTab"
          )
    .col.xs-12.md-6
      .preview
        .panel
          .panel-content
            mdview(:text="input")
</template>

<script>
import _ from 'lodash'
import mdview from '../../../mdview'
import localStore from './../../libs/local-store'
export default {
  name: 'editor',

  data () {
    return {
      input: '',
      computedStyle: {
        height: '200px'
      }
    }
  },

  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
      localStore.set('editor-content', this.input)
    }, 300),
    keyTab: function (e) {
      var start = this.$refs.editArea.selectionStart
      var end = this.$refs.editArea.selectionEnd
      if (start === end) {
        this.input = this.input.substr(0, start) + '\t' + this.input.slice(end, this.input.length)
      } else {
        console.log('hehe')
      }
      this.update(e)
    },
    clearLocalStorage: () => {
      localStore.set('editor-content', '')
      localStore.set('timestamp', '')
    },
    locations: function (substring, string) {
      var a = []
      var i = -1
      while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i)
      return a
    }
  },

  /* using localstorage restore previous text if not timeout */
  created () {
    var d = new window.Date()
    var content = localStore.get('editor-content')
    var remainingLife = localStore.get('timestamp')

    if (!remainingLife || remainingLife === '') {
      localStore.set('timestamp', d.getTime())
    }
    if (content !== '') {
      this.input = content
    }
  },

  mounted () {
    this.computedStyle = {
      height: this.$refs.editArea.scrollHeight + 'px'
    }
  },

  components: {
    mdview
  }
}
</script>

<style lang=scss>
.row{
  padding: 0;
}
.panel.editor{
  .panel-header{
    height: 50px;
    line-height: 50px;
    font-size: 1.1em;
  }
}
.su-editor-area{
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 200px;
  line-height: 25px;
  font-size: 0.99em;
  padding: 6px;
  margin: 0;
  display: block;
}

.panel-content{
  padding: 10px;
}

.preview {
  .panel-content {
    min-height: 250px;
    overflow-x: auto;
  }
} // ./preview
</style>
