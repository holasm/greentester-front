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
  padding: 16px 16px;
  border-top: 1px solid #aaa;
  top: -1px;
}
</style>
