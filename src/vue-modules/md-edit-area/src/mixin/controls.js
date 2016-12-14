// import _ from 'lodash'
import localStore from './../../libs/local-store'

module.exports = {
  data: () => {
    return {
      selStartPos: 0,
      selEndPos: 0,
      dirty: false,
      scrollPos: 0
    }
  },
  updated () {
    if (this.dirty) {
      console.log(this.scrollPos)
      this.setSelection(this.selStartPos, this.selEndPos)
      this.dirty = false
    }
  },
  methods: {
    addHeader: function () {
      this.addMarker('# ', ' #', 'Header', '# '.length, '# '.length + 'Header'.length)
    },
    makeItalic: function () {
      this.addMarker('*', '*', '')
    },
    addCode: function () {
      this.addMarker('`', '`', '')
    },
    addComment: function () {
      this.addMarker('>', '', '')
    },
    makeBold: function () {
      this.addMarker('**', '**', 'Bold', '**'.length, '##'.length + 'Bold'.length)
    },
    addLink: function () {
      this.addMarker('[', '](url)', '')
    },
    addImage: function () {
      this.addMarker('![Alt text](', ' "Optional title")',
        'https://path_to_file.png',
        '![Alt text]('.length,
        '![Alt text]('.length + 'https://path_to_file.png'.length
      )
    },
    addBulletList: function () {
      this.addMarker('\n- ', '')
    },
    addTable: function () {
      var str = '| First Header  | Second Header |\n' +
        '| ------------- | ------------- |\n' +
        '| Content Cell  | Content Cell  |\n' +
        '| Content Cell  | Content Cell  |\n'
      this.addMarker('\n' + str, '', '')
    },
    addHorizontalLine: function () {
      this.addMarker('\n------\n', '', '')
    },
    addEquation: function () {
      this.addMarker('$$', '$$', '\\Pi = 3.124', '$$'.length, '$$'.length + '\\Pi = 3.124'.length)
    },
    addMarker (openingTag, closingTag, midToken, selStartPos, selEndPos) {
      var endPoints = this.getEndPoints()
      if (endPoints.start === endPoints.end) {
        this.input = this.addTagAtStartAndEnd(openingTag, midToken + closingTag, false)
        if (selStartPos !== undefined || selEndPos !== undefined) {
          if (selStartPos !== undefined && selEndPos !== undefined) {
            this.selStartPos = endPoints.start + selStartPos
            this.selEndPos = endPoints.start + selEndPos
          } else {
            console.error('Not enougn args provided')
          }
        } else {
          this.selStartPos = endPoints.start + openingTag.length
          this.selEndPos = endPoints.start + openingTag.length
        }
        this.scrollPos = this.$refs.editArea.scrollTop
        this.dirty = true
      } else { // range selected
        this.input = this.addTagAtStartAndEnd(openingTag, closingTag, true)
      }
      this.setValue(this.input)
      localStore.set('editor-content', this.input)
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
    getEndPoints () {
      return {
        start: this.$refs.editArea.selectionStart,
        end: this.$refs.editArea.selectionEnd
      }
    }
  }
}
