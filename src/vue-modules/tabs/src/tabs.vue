<template lang=pug>
div.tabs
  slot(name="heads")
  slot(name="items")
</template>

<script>
export default {
  name: 'tabs',

  mounted () {
    this.$on('activate:tab', function (id) {
      this.$children.forEach((el) => {
        el.$children.forEach((item) => {
          item.$emit('activate:tab', id)
        })
      })
    })
  }
}
</script>

<style lang=scss>
.tabs{
  position: relative;
  box-sizing:  border-box;
  height: 100%;
}
</style>
