import Vue from 'vue'
import router from './router'

window.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
