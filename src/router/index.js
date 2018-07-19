import Vue from 'vue'
import Router from 'vue-router'

// Global
import Home from '@/views/Home'
import CGU from '@/views/CGU'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cgu/',
      name: 'CGU',
      component: CGU
    }
  ]
})
