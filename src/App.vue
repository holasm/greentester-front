<template lang=pug>
#app
  .layout
    .row
      question
</template>

<script>
import question from './vue-modules/question'
export default {
  name: 'app',

  components: {
    question
  }
}
</script>

<style lang=scss>
/* @import "./../node_modules/bourbon"; */
/* @import "./../static/bower_components/karicha/styles/css/main.css"; */

</style>
