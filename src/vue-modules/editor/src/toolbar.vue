<template lang=pug>
.toolbar
  ul.toolbar
    li
      .ctrl(@click="addHeader")
        .i.glyphicon.glyphicon-header
      .downarrow
        .i.glyphicon.glyphicon-chevron-down
    li
      .ctrl(@click="makeBold")
        .i.glyphicon.glyphicon-bold
    li
      .ctrl(@click="makeItalic")
        .i.glyphicon.glyphicon-italic
    li
      .separator
    li
      .ctrl(@click="addCode")
        .i.glyphicon.glyphicon-console
    li
      .ctrl(@click="addComment")
        .i.glyphicon.glyphicon-comment
    li
      .ctrl(@click="addLink")
        .i.glyphicon.glyphicon-link
    li
      .ctrl(@click="addImage")
        .i.glyphicon.glyphicon-picture
    li
      .separator
    li
      .ctrl(@click="addBulletList")
        .i.glyphicon.glyphicon-list
    li
      .ctrl(@click="addTable")
        .i.glyphicon.glyphicon-th
    li
      .ctrl(@click="addHorizontalLine")
        .i.glyphicon.glyphicon-option-horizontal
</template>

<script>
export default {
  name: 'toolbar',
  props: {
    parent: Object
  },
  mounted () {
    console.log(this.parent.$refs)
  },
  methods: {
    addHeader: function () {
      this.parent.$refs.mdEditArea.addHeader()
    },
    makeBold: function () {
      this.parent.$refs.mdEditArea.makeBold()
    },
    makeItalic: function () {
      this.parent.$refs.mdEditArea.makeItalic()
    },
    addCode: function () {
      this.parent.$refs.mdEditArea.addCode()
    },
    addComment: function () {
      this.parent.$refs.mdEditArea.addComment()
    },
    addLink: function () {
      this.parent.$refs.mdEditArea.addLink()
    },
    addImage: function () {
      this.parent.$refs.mdEditArea.addImage()
    },
    addBulletList: function () {
      this.parent.$refs.mdEditArea.addBulletList()
    },
    addTable: function () {
      this.parent.$refs.mdEditArea.addTable()
    },
    addHorizontalLine: function () {
      this.parent.$refs.mdEditArea.addHorizontalLine()
    }
  }
}
</script>

<style lang=scss>
  
</style>
