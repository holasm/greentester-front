<template lang=pug>
.layout
  .row.md-editor-sided.mt-16(v-if="type == 'sided'")
    .col.xs-12.md-6
      toolbar(:parent='self')
      md-edit-area(:setValue="setValue", ref="mdEditArea")
    .col.xs-12.md-6
      .preview.up-2
        md-view(:value="input")
  tabs.md-editor-tabbed(v-if="type == 'tabbed'")
    tab-heads(slot="heads")
      tab-head#1(active=true) Editor
      tab-head#2 Preview
      tab-head#3 Html
    tab-items(slot="items")
      tab-item#1(active=true)
        toolbar(:parent='self')
        md-edit-area(:setValue="setValue", ref="mdEditArea")
      tab-item#2
        .col.md-8.md-o-2.up-2.p-24.mb-32
          md-view(:value="input", :setHtml="setHtml")
      tab-item#3
        md-html(:html="html")
  .row.md-editor-up-down(v-if="type == 'up-down'")
    toolbar(:parent='self')
    md-edit-area(:setValue="setValue")
    br
    .col.up-2.mb-16.p-16
      md-view(:value="input")
</template>

<script>
import mdView from '../../md-view'
import mdHtml from '../../md-html'
import mdEditArea from '../../md-edit-area'
import toolbar from './toolbar'
import tabs, { tabHeads, tabHead, tabItems, tabItem } from '../../tabs'
// import hooks from './../../../v-debug/hooks'
export default {
  name: 'editor',

  props: {
    type: {
      type: String,
      default: 'tabbed'
    }
  },
  data: function () {
    return {
      input: '', // the markdown text
      html: '',
      self: this
    }
  },
  methods: {
    setValue: function (data) {
      this.input = data
    },
    setHtml: function (data) {
      this.html = data
    }
  },
  components: {
    'md-view': mdView,
    'md-html': mdHtml,
    'md-edit-area': mdEditArea,
    tabs,
    'tab-heads': tabHeads,
    'tab-head': tabHead,
    'tab-items': tabItems,
    'tab-item': tabItem,
    toolbar
  }
}
</script>

<style lang=scss>
@import "./scss/index";
</style>
