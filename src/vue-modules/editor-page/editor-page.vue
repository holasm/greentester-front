<template lang=pug>
.soso
  .nav
  .row.h-100p.no-plr
    .col.editor-container.no-plr.md-8.md-o-2
      editor(type='sided', ref="editor")
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
  }
}
.h-100p{
  height: 100%;
}
</style>
