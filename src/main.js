// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
// 引入element-ui插件中部分组件
import { Button, InputNumber } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.scss'
import './config/global'
import './config/filter'
import './config/interceptor'

Vue.config.productionTip = false
// 使用部分element-ui组件
Vue.use(Button)
Vue.use(InputNumber)
// 使用axios插件
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
