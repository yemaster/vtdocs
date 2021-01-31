import Vue from 'vue'
import Router from 'vue-router'
import Maincontent from '../../../components/maincontent/maincontent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Maincontent
    },
    {
      path: '/:path',
      name: 'Main',
      component: Maincontent
    }
  ]
})
