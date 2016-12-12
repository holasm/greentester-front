import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. Define route components.
import App from './App'
import Editor from './vue-modules/editor-page'
import Qform from './vue-modules/qform'

// 2. Define some routes
const routes = [
  { path: '/', component: App },
  { path: '/editor', component: Editor },
  { path: '/qform', component: Qform }
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes // short for routes: routes
})

export default router
