<template lang=pug>
ul.tab-heads
  slot
  slot(name="toolbar")
</template>

<script>
export default {
  name: 'tab-heads'
}
</script>

<style lang=scss>
.tab-heads{
  position: relative;
  margin: 0;
  padding: 10px 20px 0;
  display: block;
  overflow: hidden;
  height: 42px;

li.tab-toolbar{
  list-style: none;
  right: 0;
  top: 0;
  height: 100%;
}
ul.toolbar{
  position: absolute;
  display: block;
  height:30px;
  bottom: 0;
  right: 0;
  li{
    position: relative;
    float: left;
    list-style: none;
    line-height: 30px;
    font-size: 0.84em;
    bottom: 0;
    padding: 0 4px;
    &:first-child{
      padding-left: 0;
    }
    &:last-child{
      padding-right: 0;
    }
  }
  .btn{
    height: 24px;
    line-height: 24px;
    background: #e3e3e3;
    display: inline-block;
    padding: 0 10px;
    margin: 0 6px;
    font-size: 0.9em;
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    &:active{
      background: #aaa;
    }
    &:first-child{
      margin-left: 0;
    }
    &:last-child{
      margin-right: 0;
    }
  }
}
}
</style>
