<template lang=pug>
 .dropdown(v-bind:class="{active: isActive}")
  .head(@click="toogleActive") {{ text }}
    i.glyphicon.glyphicon-chevron-down
  ul.dropdown-items.up-2(v-if="isActive")
    span(@click="toogleActive")
      slot
</template>

<script>
import activate from './../../../../v-mixins/activate'
export default {
  name: 'dropdown',
  mixins: [ activate ],
  props: {
    text: String
  },
  mounted () {
    var self = this
    window.addEventListener('click', function (e) {
      self.isActive = false
      self.$emit('deactivated')
    })
    this.$on('activated', function () {
      if (this.hasClass(this.$el.parentElement, 'link')) {
        this.addClass(this.$el.parentElement, 'active')
      }
    })
    this.$on('deactivated', function () {
      if (this.hasClass(this.$el.parentElement, 'link')) {
        this.removeClass(this.$el.parentElement, 'active')
      }
    })
  }
}
</script>

<style scoped lang=scss>
.dropdown{
  position: relative;
  cursor: pointer;
  /* color: black; */
  display: inline-block;
  user-select: none;
  i{
    padding-left: 6px;
    font-size: 0.8em;
    line-height: 50px;
  }
  .head{
    display: inline-block;
    font-style: none;
    text-decoration: none;
    /* height: 32px; */
    /* line-height: 32px; */
    /* color: black; */
    padding: 0px 12px;
    /* border:  1px solid #e3e3e3; */
    /* background: #f5f5f5; */
  }
  ul.dropdown-items{
    position: absolute;
    padding: 3px 0;
    margin: 0;
    margin-top: 3px;
    overflow: hidden;
    width: 170px;
    z-index: 1000;
    background: white;
    color: black;
    /* display: none; */

    &.active{
      display: block;
    }

    li.dropdown-item{
      /* background: red; */
      list-style: none;
      line-height: 30px;
      padding: 0 6px;
      &.active, &:hover{
        background: #f5f5f5;
      }
    }
  }
}
</style>
