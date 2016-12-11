import _ from 'lodash'
import localStore from './../../libs/local-store'
module.exports = {
  methods: {
    update: _.debounce(function (e) {
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
    setCaretPosition: function (caretPos) {
      var elem = this.$refs.editArea
      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange()
          range.move('character', caretPos)
          range.select()
        } else {
          if (elem.selectionStart) {
            elem.focus()
            elem.setSelectionRange(caretPos, caretPos)
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
