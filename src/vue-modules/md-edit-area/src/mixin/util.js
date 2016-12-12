import _ from 'lodash'
import localStore from './../../libs/local-store'
module.exports = {
  methods: {
    update: _.debounce(function (e) {
      // var str = this.$refs.editArea.innerText
      // this.setValue(str)
      // this.input = str
      // localStore.set('editor-content', str)

      this.setValue(e.target.value)
      this.input = e.target.value
      // place new doings in undo stack
      localStore.set('editor-content', e.target.value)
    }, 300),
    clearLocalStorage: () => {
      localStore.set('editor-content', '')
      localStore.set('timestamp', '')
    },
    keyTab: function (e) {
      document.execCommand('insertText', false, '\t')
    },
    setSelection: function (selStart, selEnd) {
      var elem = this.$refs.editArea
      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange()
          range.move('character', selStart)
          range.select()
          range.move('character', selEnd)
        } else {
          if (elem.selectionStart) {
            elem.focus()
            elem.scrollTop = this.scrollPos
            elem.setSelectionRange(selStart, selEnd)
          } else {
            elem.focus()
          }
        }
      }
    }
  },

  /* using localstorage restore previous text if not timeout */
  created () {
    var d = new window.Date()
    var content = localStore.get('editor-content')
    var remainingLife = localStore.get('timestamp')

    if (!remainingLife || remainingLife === '') {
      localStore.set('timestamp', d.getTime())
    }
    if (content !== '') { // initialize from localStorage
      this.input = content
      this.setValue(content)
    }
  }
}
