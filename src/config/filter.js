/**
 * Author：Xavier;
 * Create  Time：2018-01-30 11:35;
 * Description：
 */
import Vue from 'vue'
Vue.filter('current', value => {
  let num = parseFloat(value).toFixed(3) // 这里因为我需要两位小数所以做一个限制，你们看情况做小数位的限制
  let s = num.substring(0, (num.length - 1)) // 只取小数位2位
  return s && s.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
    return $1 + ','
  })
})
