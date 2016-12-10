<template lang=pug>
div.tabs
  slot(name="heads")
  slot(name="items")
</template>

<script>
export default {
  name: 'tabs',

  mounted () {
    this.$on('activate:tab:head', function (id) {
      this.$children.forEach((el) => {
        el.$children.forEach((item) => {
          item.$emit('activate:tab:head', id)
        })
      })
    })
  }
}
</script>

<style lang=scss>
.tabs{
  margin-top: 20px;
  position: relative;
  box-sizing:  border-box;
}
</style>
