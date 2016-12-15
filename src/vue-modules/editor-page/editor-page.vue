<template lang=pug>
.soso
  .nav.up-2
    .layout
      .hambarger.sm-hide-up
        i.glyphicon.glyphicon-align-justify
      router-link(to="/editor") 
        .brand Karicha
      .links.md-hide-down
        ul.link-group
          li.link
            i.glyphicon.glyphicon-search
          router-link(to="/#") 
            li.link Home
          li.link All
          li.link Category
      .links.sm-hide-up
        ul.link-group
          li.link
            i.glyphicon.glyphicon-search
  .row.h-100p
    .col.editor-container.sm-12
      editor(type='tabbed', ref="editor")
</template>

<script>
import editor from './../editor'
export default {
  name: 'editor-page',
  components: {
    editor
  }
}
</script>

<style scoped lang=scss>
.soso{
  position: fixed;
  height: 100%;
  width: 100%;
  .nav{
    height: 50px;
  }
  .editor-container{
    height: calc(100% - 50px);
    textarea {
      resize: none;
      background: red;
    }
  }
}
.h-100p{
  height: 100%;
}
</style>
