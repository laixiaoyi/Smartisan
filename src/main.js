// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 引入element-ui插件中部分组件
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.scss'
import './config/global'
import './config/filter'

Vue.config.productionTip = false
// 使用部分element-ui组件
Vue.use(Button)
// 使用axios插件
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
