<template lang=pug>
li.tab-head(@click="activate", v-bind:class="{active: isActive}")
  slot
</template>

<script>
export default {
  name: 'tab-item',
  props: {
    active: {
      type: Boolean
    }
  },
  data: () => {
    return {
      id: '',
      isActive: false
    }
  },
  methods: {
    activate: function () {
      this.isActive = true
      var id = this.$el.getAttribute('id')
      this.$parent.$parent.$emit('activate:tab', id)
    }
  },
  mounted () {
    this.isActive = this.active
    this.id = this.$el.getAttribute('id')
    this.$on('activate:tab', function (id) {
      if (window.String(id).trim() !== this.id) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    })
  }
}
</script>

<style lang=scss>
.tab-head{
  box-sizing:  border-box;
  position: relative;
  margin: 0;
  padding: 0;
  float: left;
  list-style: none;
  padding: 6px 20px;
  color: blue;
  margin: 0 2px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  cursor: pointer;
  bottom: -2px;
  user-select: none;
  -webkit-user-select: none;
  &:hover{
    background: #f8f8f8;
  }
  a{
    color: black;
    text-decoration: none;
  }
  &.active{
    position: relative;
    background: white;
    border-left: 1px solid #aaa;
    border-top: 1px solid #aaa;
    border-right: 1px solid #aaa;
    border-bottom: 1px solid white;
    color: black;
    z-index: 10;
    cursor: default;
    /* top: 1px; */
  }
}
</style>
