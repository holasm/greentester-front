<template lang=pug>
li.tab-item(v-bind:class="{active: isActive}")
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
  mounted () {
    this.isActive = this.active
    this.id = this.$el.getAttribute('id')
    this.$on('activate:tab', function (id) {
      if (id !== this.id) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    })
  }
}
</script>

<style lang=scss>
.tab-item{
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: none;
  &.active{
    display: block;
  }
}
</style>
