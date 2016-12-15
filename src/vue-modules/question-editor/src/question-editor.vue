<template lang=pug>
div
  .row.no-plr
    .col.p-8
      .editor-container.h-400.sm-12.up-2
        editor(type='tabbed', ref="editor")
          li.tab-toolbar(slot="tab-toolbar")
            ul.toolbar
              li.faded 
                span.no-select id: 
                b 4a6d4asd4a456d4a5sda4sd446asd4asd
              li.no-select Saved draft
              li
                .btn CATEGORY
  .row.p-8
    .col.no-plr.h-50.up-2
  .row.no-plr
    .col.sm-12.lg-6
      .col.no-plr.p-8
        .editor-container.h-250.up-2
          editor(type='tabbed', ref="editor", previewClass="")
            li.tab-toolbar(slot="tab-toolbar")
              ul.toolbar
                li
                  b Option 1
                li
                  checkbox
    .col.sm-12.lg-6
      .col.no-plr.p-8
        .editor-container.h-250.up-2
          editor(type='tabbed', ref="editor", previewClass="")
            li.tab-toolbar(slot="tab-toolbar")
              ul.toolbar
                li
                  b Option 1
                li
                  checkbox
    .col.sm-12.lg-6
      .col.no-plr.p-8
        .editor-container.h-250.up-2
          editor(type='tabbed', ref="editor", previewClass="")
            li.tab-toolbar(slot="tab-toolbar")
              ul.toolbar
                li
                  b Option 1
                li
                  checkbox
    .col.sm-12.lg-6
      .col.no-plr.p-8
        .editor-container.h-250.up-2
          editor(type='tabbed', ref="editor", previewClass="")
            li.tab-toolbar(slot="tab-toolbar")
              ul.toolbar
                li
                  b Option 1
                li
                  checkbox
  .row.p-8
    .col.no-plr.h-50.up-2
</template>

<script>
import tabs, { tabHeads, tabHead, tabItems, tabItem } from '../../tabs'
import editor from './../../editor'
import checkbox from './../../checkbox'
export default {
  name: 'question-editor',

  components: {
    checkbox,
    editor,
    tabs,
    'tab-heads': tabHeads,
    'tab-head': tabHead,
    'tab-items': tabItems,
    'tab-item': tabItem
  }
}
</script>

<style scoped lang=scss>

.form-group.small{
  input{
    height: 20px;
    line-height: 20px;
    font-size: 1.1em;
    padding: 10px;
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
</style>
