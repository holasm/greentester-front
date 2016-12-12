<template lang=pug>
div.md-edit-area
  textarea.md-textarea(ref='editArea', :value="input",
    @input="update"
    @keydown.tab.prevent="keyTab"
  )
</template>
  <!-- #editor(@keyup="update", ref='editArea') {{input}} -->

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
      input: ''
    }
  },
  mounted () {
    this.computedStyle = {
      // height: this.$refs.editArea.scrollHeight + 'px'
    }
    /* eslint-disable */
    // new window.Medium({
    //   element: document.getElementById('editor')
    // })
    /* eslint-enable */
  }
}
</script>

<style lang=scss>
.md-textarea{
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
  line-height: 25px;
  font-size: 0.96em;
  padding: 6px;
  margin: 0;
  display: block;
}
#editor{
  height: 200px;
  width: 100%;
  background: #e3e3e3;
  overflow-y: auto;
  padding: 12px;
}
</style>
