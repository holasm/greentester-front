// import _ from 'lodash'
import localStore from './../../libs/local-store'
module.exports = {
  data: () => {
    return {
      cursorPos: 0,
      dirty: false,
      scrollPos: 0
    }
  },
  updated () {
    if (this.dirty) {
      this.setCaretPosition(this.cursorPos)
      this.dirty = false
    }
  },
  methods: {
    addHeader: function () {
      this.addMarker('##', '')
    },
    makeItalic: function () {
      this.addMarker('*', '*')
    },
    addCode: function () {
      this.addMarker('`', '`')
    },
    addComment: function () {
      this.addMarker('>', '')
    },
    makeBold: function () {
      this.addMarker('**', '**')
    },
    addLink: function () {
      this.addMarker('[', '](url)')
    },
    addImage: function () {
      this.addMarker('![Alt text](', 'https://path_to_file.png "Optional title")')
    },
    addBulletList: function () {
      this.addMarker('\n- ', '')
    },
    addTable: function () {
      var str = '| First Header  | Second Header |\n' +
        '| ------------- | ------------- |\n' +
        '| Content Cell  | Content Cell  |\n' +
        '| Content Cell  | Content Cell  |\n'
      this.addMarker('\n' + str, '')
    },
    addHorizontalLine: function () {
      this.addMarker('\n------\n', '', 7)
    },
    addTagAtStartAndEnd (openingTag, closingTag, range) {
      var endPoints = this.getEndPoints()
      if (!range) {
        var str1 = this.input
        var ret1 = str1.slice(0, endPoints.start) + // consider space adjustment
        openingTag +
        closingTag +
        str1.slice(endPoints.end, str1.length)
        return ret1
      } else {
        var str = this.input
        var ret = str.slice(0, endPoints.start) +
        openingTag +
        str.slice(endPoints.start, endPoints.end) + // consider space adjustment
        closingTag +
        str.slice(endPoints.end, str.length)
        return ret
      }
    },
    addMarker (openingTag, closingTag, cursorPos) {
      var endPoints = this.getEndPoints()
      if (endPoints.start === endPoints.end) {
        this.input = this.addTagAtStartAndEnd(openingTag, closingTag, false)
        if (cursorPos !== undefined) {
          this.cursorPos = endPoints.start + cursorPos
        } else {
          this.cursorPos = endPoints.start + openingTag.length
        }
        this.dirty = true
      } else { // range selected
        this.input = this.addTagAtStartAndEnd(openingTag, closingTag, true)
      }
      this.setValue(this.input)
      localStore.set('editor-content', this.input)
    },
    getEndPoints () {
      return {
        start: this.$refs.editArea.selectionStart,
        end: this.$refs.editArea.selectionEnd
      }
    }
  }
}
