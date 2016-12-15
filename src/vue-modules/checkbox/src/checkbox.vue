<template lang=pug>
.checkbox(v-bind:class="{active: isActive}", @click="toogleActive")
  .inner
  .checkbox-sign
    i.glyphicon.glyphicon-ok
    i.glyphicon.glyphicon-remove
  .mid-helper 1
</template>

<script>
import activate from './../../v-mixins/activate'
export default {
  name: 'checkbox',
  mixins: [ activate ]
}
</script>

<style scoped lang=scss>
.checkbox{
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  height: 20px;
  width: 40px;
  margin: 0 6px;
  line-height: 20px;
  border-radius: 20px;
  cursor: pointer;
  background: white;
  box-shadow: 0 0 1px #444;
  &.active{
    box-shadow: 0 0 5px #3f51b5;
    .inner{
      background: #3f51b5;
      left: calc(100% - 2px);
      transform: translateX(-100%)
    }
    .checkbox-sign i.glyphicon.glyphicon-ok{
      color: #1bc31b;
    }
  }
  .inner{
    width: 16px;
    height: 16px;
    position: absolute;
    left: 2px;
    top:  2px;
    border-radius: 50%;
    background: #bbb;
    z-index: 11;
    /* transition: left 0.3s */
  }
  .checkbox-sign{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0 4px;
    font-size: 0.75em;
    z-index: 10;
    i{
      line-height: 20px;
      line-height: 20px;
    }
    i.glyphicon.glyphicon-ok{
      float: left;
      top: 50%;
      transform: translateY(-50%)
    }
    i.glyphicon.glyphicon-remove{
      float: right;
      color: hotpink;
      top: 50%;
      transform: translateY(-50%)
    }
  }
  .mid-helper{
    color: transparent;
    user-select: none;
  }
}
</style>
