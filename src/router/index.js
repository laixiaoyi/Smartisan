import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import commodityDetails from '@/components/commodityDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // 首页路由
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // 商品详情页
      path: '/Details/:id',
      name: 'commodityDetails',
      component: commodityDetails
    }
  ]
})
