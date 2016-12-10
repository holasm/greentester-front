<template lang=pug>
ul.tab-heads
  slot
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
/*   background: red; */
}
</style>
