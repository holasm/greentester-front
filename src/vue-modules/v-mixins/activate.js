function noop () {}
module.exports = {
  props: {
    active: Boolean,
    activStatus: {
      type: Function,
      default: noop
    }
  },
  data: () => {
    return {
      isActive: false,
      id: ''
    }
  },
  methods: {
    activate: function (e) {
      e.preventDefault()
      e.stopPropagation()
      this.isActive = true
      this.$emit('activated')
      this.activStatus(this.isActive, this.id)
    },
    toogleActive: function (e) {
      e.preventDefault()
      e.stopPropagation()
      this.isActive = !this.isActive
      if (this.isActive) {
        this.$emit('activated')
      } else {
        this.$emit('deactivated')
      }
      this.activStatus(this.isActive, this.id)
    },
    addClass: function (el, className) {
      el.className += ' ' + className
    },
    hasClass: function (el, cls) {
      for (var i = el.classList.length; i > -1; --i) {
        if (el.classList[i] === cls) {
          return true
        }
      }
      return false
    },
    removeClass: function (el, className) {
      var ret = ''
      for (var i = el.classList.length; i > -1; --i) {
        if (el.classList[i] !== className && el.classList[i] !== undefined) {
          ret += ' ' + el.classList[i]
        }
      }
      el.className = ret
    }
  },
  mounted () {
    this.isActive = this.active
  }
}
