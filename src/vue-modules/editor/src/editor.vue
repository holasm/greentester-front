<template lang=pug>
.editor-page
  .editor-wrapper
    .editor-layout
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
            tab-head#3(v-if="showHtml") Html
            slot(name="tab-toolbar")
          tab-items(slot="items")
            tab-item#1.editor-container(active=true)
              toolbar(:parent='self')
              md-edit-area(:setValue="setValue", ref="mdEditArea")
            tab-item#2.overflow-scroll
              .col
                md-view(:value="input", :setHtml="setHtml")
            tab-item#3.overflow-scroll(v-if="showHtml")
              md-html(:html="html")
        <!-- top-down editor -->
        .row.md-editor-top-down(v-if="type == 'top-down'")
          toolbar(:parent='self')
          md-edit-area(:setValue="setValue")
          br
          .col.up-2.mb-16.plr-16
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
      default: 'sided'
    },
    previewClass: {
      type: String,
      default: ''
    },
    showHtml: {
      type: Boolean,
      default: false
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
.tabs{
    li{
      &.tab-head{
        color: black;
        border: none;
        height: 100%;
        &.active{
          border-bottom: 4px solid #f93195;
          color: #f93195;
        }
        &.tab-item{
          height: 100%;
        }
      }
    }
  ul{
    &.tab-items{
      /* height: 100%;  */
      border-top: none;
      &.scroll-overflow-top{
        box-shadow: inset 0 3px 2px -2px rgba(200,200,200,0.5);
      }
      &.scroll-overflow-bottom{
        box-shadow: inset 0 -3px 2px -2px rgba(200,200,200,0.5);
      }
      &.scroll-overflow-top-bottom{
        box-shadow: inset 0 3px 2px -2px rgba(200,200,200,0.5) inset 0 -3px 2px -2px rgba(200,200,200,0.5);
      }

    }
    border-bottom: none;
  }
}
.editor-page{
  /* position: fixed; */
  width: 100%;
  height: 100%;
  .editor-wrapper{
    height: 100%;
    position: relative;
    /* padding: 16px; */
    .editor-layout{
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
}
.editor-content{
  width: 100%;
  height: 100%;
  padding: 0;
  /* padding-bottom: 12px; */
  /* background: crimson; */
  .md-editor-tabbed{
    height: 100%;
    /* padding: 0 16px; */
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
    padding-bottom: 10px;
    .preview-container{
      height: 100%;
      overflow-y: auto;
      padding: 5px;
      /* box-shadow: inset 0px -2px 4px 1px #aaa; */
    }
    .editor-container{
      height: 100%;
      padding: 5px;
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
