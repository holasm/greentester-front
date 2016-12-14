<template lang=pug>
.page
  include ./pug/nav
  .page.layout.c-e3
    include ./pug/navs
    tabs
      tab-heads(slot="heads")
        tab-head#1(active=true) Headers
        tab-head#2 Form
        tab-head#3 Qform
      tab-items(slot="items")
        tab-item#1.editor-container(active=true)
          include ./pug/header
        tab-item#2
          include ./pug/forms
        tab-item#3
          .row.no-plr
            .col.p-8
              .editor-container.h-400.sm-12.up-2
                editor(type='tabbed', ref="editor")
          .row.p-8
            .col.no-plr.h-50.up-2
          .row.no-plr
            .col.sm-12.md-6
              .col.no-plr.p-8
                .editor-container.h-300.up-2
                  editor(type='tabbed', ref="editor", previewClass="")
            .col.sm-12.md-6
              .col.no-plr.p-8
                .editor-container.h-300.up-2
                  editor(type='tabbed', ref="editor", previewClass="")
            .col.sm-12.md-6
              .col.no-plr.p-8
                .editor-container.h-300.up-2
                  editor(type='tabbed', ref="editor", previewClass="")
            .col.sm-12.md-6
              .col.no-plr.p-8
                .editor-container.h-300.up-2
                  editor(type='tabbed', ref="editor", previewClass="")
          .row.p-8
            .col.no-plr.h-50.up-2
  .row.c-e3
    .layout
      p.tac This is a demo page.
      p.tac No harm done.
</template>
<script>
import tabs, { tabHeads, tabHead, tabItems, tabItem } from '../../../tabs'
import dropdown, { dropdownItem } from '../dropdown'
import editor from './../../../editor'
export default {
  name: 'karicha',
  components: {
    dropdown,
    editor,
    'dropdown-item': dropdownItem,
    tabs,
    'tab-heads': tabHeads,
    'tab-head': tabHead,
    'tab-items': tabItems,
    'tab-item': tabItem
  }
}
</script>

<style scoped lang=scss>
@import "./scss/_index";
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
.tabs{
  ul{
    /* border-bottom: none; */
    &.tab-items{
      height: 100%; 
      border-top: none;
      box-shadow: inset 0 3px 2px -2px rgba(200,200,200,0.5);
    }
  }
  li{
    height: 100%;
    &.tab-head{
      color: black;
      border: none;
      &.active{
        border-bottom: 4px solid #f93195;
        color: #f93195;
      }
    }
    &.tab-item{
      padding-top: 16px;
    }
  }
}

</style>
