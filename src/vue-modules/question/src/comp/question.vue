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
        md-view(v-show="show", :value="text")
        br
        .options
          .row
            .col.sm-12.md-6
              .option.wrong
                md-view(v-show="show", :value="text")
                .opttion-no a
            .col.sm-12.md-6
              .option.correct
                .opttion-no B
                md-view(v-show="show", :value="text")
            .col.sm-12.md-6
              .option
                .opttion-no c
                md-view(v-show="show", :value="text")
            .col.sm-12.md-6
              .option
                .opttion-no d
                md-view(v-show="show", :value="text")
        br
        .navigation
          .prev previous
          .next next
        br
</template>

<script>
import mdView from './../../../md-view'
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
      var text = 'Q.3 A 1-h rainfall of 10 cm magnitude at a station has a return period of 50 years. The probability that a 1-h rainfall of magnitude 10 cm or more will occur in ehch of two successive years is:\n\nThis is working at last\n\n$$$\nx = \\sqrt{x} + 2x + 2 - 2 \\pi\n$$$'
      self.text = text
    }, 0)
  },
  components: {
    'md-view': mdView
  }
}
</script>

<style lang=scss>
.question-header{
  height: 30px;
}
.question-content{
  min-height: 300px;
  font-size: 1em;
  .options .col {
    padding: 10px 0;
  }
}
</style>
