/**
* Author：Xavier;
* Create  Time：2018-01-30 08:41;
* Description：
*/

<template>
    <ul>
      <!--商品列表-->
        <li>
          <a href="javascript:;">
            <img :src="commodityList.sku_info[imageIndex].ali_image" alt="">
          </a>
          <p>{{commodityList.sku_info[imageIndex].title}}</p>
          <p>{{commodityList.sku_info[imageIndex].sub_title}}</p>
          <div>
            <a :class="{'active':index===imageIndex}" v-for="(itema, index) in commodityList.sku_info" :key="index" @click="specImage(index)"><img :src="itema.spec_json.image" alt=""></a>
          </div>
          <p class="price">￥<span>{{commodityList.sku_info[imageIndex].price | current}}</span></p>
        </li>
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
      // console.log(this.imageIndex)
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
    }
</style>
