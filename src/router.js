import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import platform from './views/Platform.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/platform',
      name: 'platform',
      component: platform
    }
  ]
})
