<template lang=pug>
div.md-edit-area
  textarea.md-textarea(ref='editArea', :value="input", v-bind:style="computedStyle", 
    @input="update"
    @keydown.tab.prevent="keyTab"
  )
</template>

<script>
import util from './mixin/util'
// import hooks from '../../v-debug/hooks'
import controls from './mixin/controls'
export default {
  name: 'md-edit-area',
  mixins: [util, controls],

  props: {
    setValue: {
      type: Function
    }
  },
  data () {
    return {
      input: '',
      computedStyle: {
        height: '100px'
      }
    }
  },
  mounted () {
    this.computedStyle = {
      // height: this.$refs.editArea.scrollHeight + 'px'
    }
  }
}
</script>

<style lang=scss>
.md-textarea{
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 150px;
  line-height: 25px;
  font-size: 0.99em;
  padding: 6px;
  margin: 0;
  display: block;
}
</style>
