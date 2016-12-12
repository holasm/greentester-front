<template lang=pug>
.editor-page
  .row.editor-nav.c-e3
  .editor-wrapper
    .editor-layout.up-2
      .row.editor-content
        <!--  -->
        .row.md-editor-sided(v-if="type == 'sided'")
          .col.xs-12.md-6.editor-container
            toolbar(:parent='self')
            md-edit-area(:setValue="setValue", ref="mdEditArea")
          .col.xs-12.md-6.preview-container
            .preview.up-2
              md-view(:value="input")
        <!-- tabbed editor -->
        tabs.md-editor-tabbed(v-if="type == 'tabbed'")
          tab-heads(slot="heads")
            tab-head#1(active=true) Editor
            tab-head#2 Preview
            tab-head#3 Html
          tab-items(slot="items")
            tab-item#1.editor-container(active=true)
              toolbar(:parent='self')
              md-edit-area(:setValue="setValue", ref="mdEditArea")
            tab-item#2.overflow-scroll
              .col.md-8.md-o-2.up-2.plr-24
                md-view(:value="input", :setHtml="setHtml")
            tab-item#3.overflow-scroll
              md-html(:html="html")
        <!-- top-down editor -->
        .row.md-editor-top-down(v-if="type == 'top-down'")
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

<style scoped lang=scss>
@import "./scss/index";
.editor-page{
  position: fixed;
  width: 100%;
  height: 100%;
  .editor-wrapper{
    height: calc(100% - 40px);
    position: relative;
    /* padding: 16px; */
    .editor-layout{
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
}
.editor-nav{
  height: 40px;
}
.editor-content{
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 16px;
  /* background: crimson; */
  .md-editor-tabbed{
    height: 100%;
    padding: 0 16px;
    .tab-items {
      .tab-item{
        padding: 18px 0 18px;
        /* overflow: auto; */
        height: 100%;
      }
    }
    .editor-container{
      height: 100%;
      .md-edit-area{
        height: calc(100% - 36px - 16px);
      }
    }
  }
  .md-editor-sided{
    position: relative;
    height: 100%;
    /* background: green; */
    padding-top: 16px;
    /* padding-bottom: 16px; */
    .preview-container{
      height: 100%;
      overflow-y: auto;
      padding: 5px 16px;
    }
    .editor-container{
      padding-top: 6px;
      height: 100%;
      .md-edit-area{
        height: calc(100% - 36px - 16px);
      }
    }
  }

  .md-editor-top-down{
    height: 100%;
    overflow-y: auto;
    padding: 16px;
    padding-bottom: 0;
    /* background: red; */
  }
}
.overflow-scroll{
  overflow-y: auto;
}
</style>
