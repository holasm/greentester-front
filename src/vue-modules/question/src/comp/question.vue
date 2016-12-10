<template lang=pug>
section
  .question
    .panel
      .panel-header.question-header
        span(v-show="show") Header
        ul
          li.marks 
            span(v-show="show") 2 marks question
          li.views
            span(v-show="show") 1k views
      .panel-content.question-content(ref='content')
        .question-text(v-show="show" v-html="text")
        br
        .options
          .row
            .col.sm-12.md-6
              .option.wrong
                div(v-html="text")
                .opttion-no a
            .col.sm-12.md-6
              .option.correct
                .opttion-no B
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            .col.sm-12.md-6
              .option
                .opttion-no c
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            .col.sm-12.md-6
              .option
                .opttion-no d
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        br
        .navigation
          .prev previous
          .next next
        br
</template>

<script>
export default {
  name: 'question',
  data: function () {
    return {
      show: false,
      text: ''
    }
  },
  mounted () {
    var self = this
    window.setTimeout(() => {
      self.show = true
      var text = 'x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.'
      text = window.katex.renderToString(text, { displayMode: true })
      self.text = text
      // window.MathJax.Hub.Typeset([ 'Typeset', window.MathJax.Hub, self.$el ])
    }, 10)
    // window.MathJax.Hub.Register.StartupHook('End', function () {
    //   self.show = true
    //   console.log('oh hoo')
    // })
  }
}
</script>

<style lang=scss>
.question-header{
  height: 30px;
}
.question-content{
  min-height: 300px;
}
</style>
