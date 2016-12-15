<template lang=pug>
.page
  include ./pug/nav
  .page.layout.c-e3
    tabs(ref="tabs")
      tab-heads(slot="heads")
        tab-head#1(active=true) 
          router-link(to="/karicha/1") Headers
        tab-head#2 
          router-link(to="/karicha/2") Form
        tab-head#3
          router-link(to="/karicha/3") Editor
        tab-head#4
          router-link(to="/karicha/4") Qform
      tab-items(slot="items")
        tab-item#1.editor-container(active=true)
          include ./pug/header
        tab-item#2
          include ./pug/forms
        tab-item#3
          .question-container.h-500
            editor(type='tabbed', ref="editor", previewClass="")
        tab-item#4
          question-editor(questionId='', edit='true')

  .row.c-e3
    .layout
      p.tac This is a demo page.
      p.tac No harm done.
</template>
<script>
import tabs, { tabHeads, tabHead, tabItems, tabItem } from '../../../tabs'
import dropdown, { dropdownItem } from '../dropdown'
import editor from './../../../editor'
import checkbox from './../../../checkbox'
import questionEditor from './../../../question-editor'
export default {
  name: 'karicha',
  watch: {
    '$route': function (to, from) {
      var id = to.params.id
      if (id > 0 && id < 4) {
        this.$refs.tabs.$emit('activate:tab', id)
      }
    }
  },
  mounted () {
    var id = this.$route.params.id
    if (id > 0 && id < 4) {
      this.$refs.tabs.$emit('activate:tab', id)
    }
  },
  components: {
    dropdown,
    editor,
    checkbox,
    'dropdown-item': dropdownItem,
    tabs,
    'tab-heads': tabHeads,
    'tab-head': tabHead,
    'tab-items': tabItems,
    'tab-item': tabItem,
    'question-editor': questionEditor
  }
}
</script>

<style scoped lang=scss>
@import "./scss/_index";

.form-group.small{
  input{
    height: 20px;
    line-height: 20px;
    font-size: 1.1em;
    padding: 10px;
  }
}

.nav .links ul.link-group li.link.dropdown{
  padding: 0;
}
.dropdown-items{
  margin-left: -16px;
}
.page.layout{
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  background: white;

  .p-6{
    padding: 6px;
  }
}
.editor-container{
  padding: 0 16px
}
ul.toolbar li.faded{
  transition: color 0.3s;
  color: #aaa;
  &:hover{
    color: #111;
  }
}
.tabs{
  ul{
    /* border-bottom: none; */
    &.tab-items{
      height: 100%; 
      border-top: none;
      /* box-shadow: inset 0 3px 2px -2px rgba(200,200,200,0.5); */
    }
  }
  li{
    &.tab-head{
      height: 100%;
      color: black;
      border: none;
      &.active{
        border-bottom: 4px solid #f93195;
        color: #f93195;
        a{
          color: #f93195;
        }
      }
    }
    &.tab-item{
      height: 100%;
      padding-top: 16px;
    }
  }
}

</style>
