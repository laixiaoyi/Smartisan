/**
* Author：Xavier;
* Create  Time：2018-01-30 08:41;
* Description：
*/

<template>
    <ul>
      <!--商品列表-->
      <li>
        <!--跳转至商品详情页路由传参-->
        <router-link tag="a" href="javascript:;" :to="{name:'commodityDetails', params: {id: commodityList.sku_info[imageIndex].sku_id}}">
          <img :src="commodityList.sku_info[imageIndex].ali_image" alt="">
        </router-link>
        <p>{{commodityList.sku_info[imageIndex].title}}</p>
        <p>{{commodityList.sku_info[imageIndex].sub_title}}</p>
        <div>
          <a :class="{'active':index===imageIndex}" v-for="(itema, index) in commodityList.sku_info" :key="index" @click="specImage(index)"><img :src="itema.spec_json.image" alt=""></a>
        </div>
        <p class="price">￥<span>{{commodityList.sku_info[imageIndex].price | current}}</span></p>
      </li>
      <div class="button">
        <!--跳转至商品详情页路由传参-->
        <router-link tag="p" :to="{name:'commodityDetails', params: {id: commodityList.sku_info[imageIndex].sku_id}}">
          <el-button size="small">查看详情</el-button>
        </router-link>
        <el-button size="small" type="primary" @click="joinshopping(commodityList.sku_info[imageIndex])">加入购物车</el-button>
      </div>
    </ul>
</template>

<script>
export default {
  name: 'commodity-list',
  // 接收父级传递的数据
  props: ['commodityList'],
  data () {
    return {
      imageIndex: 0
    }
  },
  methods: {
    // 点击切换商品数据事件
    specImage (indexa) {
      this.imageIndex = indexa
    },
    // 将加入购物车的商品传到vuex中
    joinshopping (obj) {
      this.$store.commit('joinshopping', obj)
    }
  }
}
</script>

<style scoped lang="scss">
ul{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 25%;
  height: 430px;
  border-right: 1px solid #ccc;
  padding-top: 50px;
  position: relative;
    >li{
      >div{
        display: flex;
        justify-content: center;
        >a{
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15px;
          height: 15px;
          border: 1px solid #ccc;
          border-radius: 50%;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          margin: 30px 5px 0;
          >img{
            width: 7px;
            height: 7px;
            border-radius: 50%;
          }
        }
        >.active{
          border: 2px solid #ccc;
        }
      }
      >a{
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }
      >p{
        text-align: center;
        color: #000;
        margin-top: 10px;
      }
      >p:nth-child(3){
        font-size: 12px;
        color: #ccc;
      }
      >.price{
        margin-top: 20px;
        color: #d60c32;
        font-weight: 900;
        >span{
          font-size: 18px;
        }
      }
    }
  >.button{
    opacity: 0;
    width: 80%;
    background: #fff;
    display: flex;
    position: absolute;
    left: 10%;
    bottom: 30px;
    justify-content: center;
    >p{
      margin-right: 10px;
    }
  }
}
ul:hover{
  box-shadow: 0px 0px 50px 0px #e6e6e6 inset;
  transition: all 0.7s;
  >.button{
    opacity: 1;
    transition: all 0.7s;
  }
}
</style>
