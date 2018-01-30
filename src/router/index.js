import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 首页路由
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
