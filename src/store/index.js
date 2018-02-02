/**
 * Author：Xavier;
 * Create  Time：2018-01-30 09:00;
 * Description：
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    // 购物总数量
    comQuantity: 0,
    // 购物总价格
    totalPrices: 0,
    // 该值用于控制购物车是否显示
    showShoppingTrolley: false,
    // 购物车中的商品
    shoppingArr: []
  },
  mutations: {
    joinshopping (state, val) {
      state.showShoppingTrolley = true
      console.log(val)
      function Quantity (arr) {
        // 遍历购物车中的商品，计算总数量和总价格
        let zsl = 0
        let zjg = 0
        for (let i = 0; i < arr.length; i++) {
          zsl += arr[i].sl
          zjg += arr[i].sl * arr[i].price
        }
        state.comQuantity = zsl
        state.totalPrices = zjg
      }
      // 判断购物车数组shoppingArr是否为空
      if (state.shoppingArr.length === 0) {
        val.sl = 1
        state.shoppingArr.push(val)
        Quantity(state.shoppingArr)
        return
      }
      // 判断购物车数组shoppingArr是否存在要添加的商品，如果存在则将该商品数量++
      var sum = 0
      for (let i = 0; i < state.shoppingArr.length; i++) {
        if (state.shoppingArr[i].sku_id === val.sku_id) {
          state.shoppingArr[i].sl++
          Quantity(state.shoppingArr)
          sum = 0
          break
        } else {
          sum = 1
        }
      }
      // 将购物车数组shoppingArr中不存在的商品对象添加到该数组
      if (sum) {
        val.sl = 1
        state.shoppingArr.push(val)
        Quantity(state.shoppingArr)
      }
    },
    // 隐藏购物车
    hideShoppingTrolley (state) {
      state.showShoppingTrolley = false
    },
    // 删除单条商品
    delCommodity (state, index) {
      state.shoppingArr.splice(index, 1)
      // 遍历购物车中的商品，计算总数量和总价格
      function Quantity (arr) {
        let zsl = 0
        let zjg = 0
        for (let i = 0; i < arr.length; i++) {
          zsl += arr[i].sl
          zjg += arr[i].sl * arr[i].price
        }
        state.comQuantity = zsl
        state.totalPrices = zjg
      }
      Quantity(state.shoppingArr)
    }
  }
})
export default store
