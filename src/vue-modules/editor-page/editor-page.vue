<template lang=pug>
.soso
  .nav
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
    height: 40px;
  }
  .editor-container{
    height: calc(100% - 40px);
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
