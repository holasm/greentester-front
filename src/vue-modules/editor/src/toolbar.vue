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
      .ctrl(@click="addComment")
        .i.glyphicon.glyphicon-comment
    li
      .ctrl(@click="addCode")
        .i.glyphicon.glyphicon-console
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
    li
      .separator
    li
      .ctrl(@click="addEquation")
        .i.glyphicon.glyphicon-usd
</template>

<script>
export default {
  name: 'toolbar',
  props: {
    parent: Object
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
    },
    addEquation: function () {
      this.parent.$refs.mdEditArea.addEquation()
    }
  }
}
</script>

<style scoped lang=scss>
$padding: 4px;
$height: 36px;
.toolbar{
  height: $height;
  background: #f5f5f5;
  margin-bottom: 16px;
  overflow-x: auto;
  ul.toolbar{
    margin: 0;
    padding: 0;
    overflow: hidden;
    padding: 0 $padding;
    li{
      float: left;
      position: relative;
      display: inline-block;
      height: $height;
      padding: $padding 0;
      .separator{
        float: left;
        width: 20px;
        background: red;
      }
      .ctrl{
        float: left;
        height: $height - 2*$padding;
        position: relative;
        line-height: $height - 2*$padding;
        width: $height - 2*$padding;
        text-align: center;
        margin-left: 3px;
        // background: green;
        &:hover{
          // box-shadow: inset 1px 1px 1px #ddd, inset -1px -1px 1px #ddd;
          background: #ededed;
          cursor: pointer;
        }
        &:active{
          // box-shadow: inset 1px 1px 1px #aaa, inset -1px -1px 1px #aaa;
          background: #ddd;
          cursor: pointer;
        }
        &:hover + .downarrow{
          background: #ededed;
        }
        &:active + .downarrow{
          // background: #ddd;
        }
        .i{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.8em;
        }
      }
      .downarrow{
        float: left;
        height: $height - 2*$padding;
        position: relative;
        line-height: $height - 2*$padding;
        width: 16px;
        text-align: center;
        margin-left: 3px;
        left: -3px;
        &:hover{
          // box-shadow: inset 1px 1px 1px #ddd, inset -1px -1px 1px #ddd;
          background: #ededed;
          cursor: pointer;
        }
        &:active{
          // box-shadow: inset 1px 1px 1px #aaa, inset -1px -1px 1px #aaa;
          background: #ddd;
          cursor: pointer;
        }
        &:hover ~ .ctrl{
          background: #ededed;
        }
        &:active + .ctrl{
          // background: #ddd;
        }
        .i{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.6em;
        }
      }
    }
  }
}
</style>
