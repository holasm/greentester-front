module.exports = {
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  beforeupdate () {
    console.log('beforeupdate')
  },
  updated () {
    console.log('updated')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
