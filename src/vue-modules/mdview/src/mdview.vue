<template lang=pug>
div.mdview
  div(v-html="compiledMarkdown")
</template>

<script>
import showdown from 'showdown'
export default {
  name: 'mdview',

  props: {
    text: {
      type: String
    }
  },

  data: () => {
    return {
      compiledHtml: '',
      compileHtmlMath: ''
    }
  },

  computed: {
    compiledMarkdown: function () {
      var mdText = this.text
      if (showdown) {
        showdown.extensions.newline = this.newline
      }
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

  watch: {
    // highlight the code syntax
    compiledMarkdown: function (val, old) {
      var self = this
      this.$nextTick(() => {
        self.afterCompileProcess()
      }) // $nextTick
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
      var reEXP = /(\$\$\$.*?\$\$\$)|(\$\$.*?\$\$)/ig
      // collect the tokens
      while (!error) {
        ret = new window.Object()
        result = reEXP.exec(mdText) // = tempText.slice(result[0].length))
        if (!result) {
          error = true
          break
        }
        // console.log(result)
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
        if (el.group === 1) { // $$ __ $$
          token = token.slice(3).trim(' ')
          token = token.slice(0, token.length - 3).trim(' ')
          try {
            katexCompiled = window.katex.renderToString(token, { displayMode: true })
          } catch (err) {
            console.error(err)
          }
          mdText = this.replaceRange(mdText, el.start, el.end, katexCompiled)
        } else if (el.group === 2) { // $ __ $
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

      // nested list support khota
      var br = this.$el.querySelectorAll('ul br, ol br')
      br.forEach(function (el, index) {
        el.parentElement.removeChild(el) // remove unnecessary <br> tag
      })
    },
    /* eslint-disable */
    newline: function () {
      return [{
        type: 'lang',
        filter: function (text) {
          return text.replace(/^( *(\d+\.  {1,4}|[\w\<\'\">\-*+])[^\n]*)\n{1}(?!\n| *\d+\. {1,4}| *[-*+] +|#|$)/gm,
            function (e) {
                return e.trim() + "  \n"
            })
        }
      }]
    } // ./newline
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
