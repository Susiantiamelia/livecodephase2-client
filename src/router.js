import Vue from 'vue'
import Router from 'vue-router'
import platform from './views/Platform.vue'
import article from './views/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/platform',
      name: 'platform',
      component: platform
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
