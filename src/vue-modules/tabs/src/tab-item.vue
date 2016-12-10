<template lang=pug>
li.tab-item
  slot
</template>

<script>
export default {
  name: 'tab-item'
}
</script>

<style lang=scss>
.tab-item{
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
}
</style>
