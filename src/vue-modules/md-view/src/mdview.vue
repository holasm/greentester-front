<template lang=pug>
div.mdview
  div(v-html="compiledMarkdown")
</template>

<script>
import showdown from 'showdown'
export default {
  name: 'mdview',

  props: {
    value: {
      type: String,
      required: true
    },
    setHtml: {
      type: Function
    }
  },

  data: () => {
    return {
      compiledHtml: ''
    }
  },

  computed: {
    compiledMarkdown: function () {
      var mdText = this.value
      // if (showdown) {
      //   showdown.extensions.newline = this.newline
      // }

      /*
       * Put the compilation in another file and run using web workers
       * Proposal:
       *  Try to do selective compilatin. compile atmost 100 line at once.
       *  create bucket of atmost 100 lines and compile them and catch them
       *  resue the catched text. recompile the range between which modification is done
       */

      this.converter = this.converter || new showdown.Converter()
      this.converter.setFlavor('github')
      // compile markdown and math equation separately
      mdText = this.compileMath(mdText)

      /* using katex render $$ text $$ */
      this.compiledHtml = this.converter.makeHtml(mdText, { sanitize: true })

      // combine and return the result
      // window.katex.renderToString(html)
      return this.compiledHtml
    }
  },

  updated () {
    this.afterCompileProcess() // do the after render processing/beautification
    if (typeof this.setHtml === 'function') {
      this.setHtml(this.compiledMarkdown)
    }
  },

  methods: {
    // returns mdText with math eq markers
    compileMath (mdText) {
      var arr = []
      var error = false
      var ret = {}
      var i
      var result
      // var tt = window.katex.renderToString(mdText)
      var reEXP = /(\$\$\$(.|\n)*?\$\$\$)|(\$\$(.|\n)*?\$\$)/ig
      // var reEXP$$Start = /^(?!\\$\$\$)(\$\$\$)/ig
      // var reEXP$$End = /(\$\$\$(.|\n)*?\$\$\$)|(\$\$.*?\$\$)/ig
      // collect the tokens
      while (!error) {
        ret = new window.Object()
        result = reEXP.exec(mdText) // = tempText.slice(result[0].length))
        if (!result) {
          error = true
          break
        }
        ret.match = result[0]
        ret.start = result.index
        ret.end = ret.start + result[0].length
        i = result.length
        while (--i) {
          if (result[i] !== undefined) {
            ret.group = i
          }
        }
        arr.push(ret)
      }

      // process the token and replace in the markdown text
      for (var l = arr.length - 1; l >= 0; l--) {
        var el = arr[l]
        var token = mdText.slice(el.start, el.end)
        var katexCompiled = ''
        if (el.group === 1) { // $$$ __ $$$
          token = token.slice(3).trim(' ')
          token = token.slice(0, token.length - 3).trim(' ')
          try {
            katexCompiled = window.katex.renderToString(token, { displayMode: true })
          } catch (err) {
            console.error(err)
          }
          mdText = this.replaceRange(mdText, el.start, el.end, katexCompiled)
        } else if (el.group === 3) { // $$ __ $$
          token = token.slice(2).trim(' ')
          token = token.slice(0, token.length - 2).trim(' ')
          try {
            katexCompiled = window.katex.renderToString(token)
          } catch (err) {
            console.error(err)
          }
          mdText = this.replaceRange(mdText, el.start, el.end, katexCompiled)
        }
      }

      return mdText
    },
    replaceRange: function (s, start, end, substitute) {
      return s.substring(0, start) + substitute + s.substring(end)
    },
    afterCompileProcess: function () {
      // highlight the codes
      var code = this.$el.querySelectorAll('pre code')
      code.forEach(function (el, index) {
        window.hljs.highlightBlock(el)
      })
    }
    /* eslint-disable */
    // newline: function () {
    //   return [{
    //     type: 'lang',
    //     filter: function (text) {
    //       return text.replace(/^( *(\d+\.  {1,4}|[\w\<\'\">\-*+])[^\n]*)\n{1}(?!\n| *\d+\. {1,4}| *[-*+] +|#|$)/gm,
    //         function (e) {
    //             return e.trim() + "  \n"
    //         })
    //     }
    //   }]
    // } // ./newline
    /* eslint-enable */
  },

  created () {
    if (showdown) {
      showdown.extensions.newline = this.newline
    }
    this.converter = new showdown.Converter()
    this.converter.setFlavor('github')
  },

  mounted () {
    this.afterCompileProcess()
  }
}
</script>

<style lang=scss>
@import "scss/index";
</style>
