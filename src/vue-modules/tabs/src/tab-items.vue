<template lang=pug>
ul.tab-items
  slot
</template>

<script>
export default {
  name: 'tab-items'
}
</script>

<style lang=scss>
.tab-items{
  position: relative;
  display: block;
  margin: 0;
  /* padding: 0 16px; */
  padding: 0;
  border-top: 1px solid #aaa;
  top: -1px;
  height: calc(100% - 42px);
}
</style>
