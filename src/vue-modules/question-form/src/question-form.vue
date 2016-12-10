<template lang=pug>
.row
  .col
    tabs
      tab-heads(slot="heads")
        tab-head#1(active=true) item 1
        tab-head#2 item 2
        tab-head#3 item 2
        tab-head#4 item 2
      tab-items(slot="items")
        tab-item#1 
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  Ut enim ad minim veniam,
        tab-item#2
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Ut enim ad minim veniam
        tab-item#3
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Ut enim ad minim veniam
        tab-item#4
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Ut enim ad minim veniam

      <!-- .header -->
</template>

<script>
import tabs, { tabHeads, tabHead, tabItems, tabItem } from '../../tabs'
export default {
  name: 'question-form',
  components: {
    tabs,
    'tab-heads': tabHeads,
    'tab-head': tabHead,
    'tab-items': tabItems,
    'tab-item': tabItem
  }
}
</script>
<style scoped lang=scss>

</style>
