/**
 * Author：Xavier;
 * Create  Time：2018-01-30 11:35;
 * Description：
 */
import Vue from 'vue'
Vue.filter('current', value => {
  return parseFloat(value).toFixed(2)
})
Vue.filter('dataId', (obj, id) => {
  return obj
})
