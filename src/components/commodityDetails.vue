/**
* Author：Xavier;
* Create  Time：2018-01-30 14:57;
* Description：
*/

<template>
  <ul class="commodityDetails">
    <!--商品列表-->
    <li v-for="(item, index) in oDetails" :key="index" v-if="item.sku_id==routeId">
      <ul>
        <li v-for="(item1, index1) in item.ali_images" :key="index1"><img :src="item1" alt=""></li>
      </ul>
      <p><img :src="item.ali_images[0]" alt=""></p>
      <div>
        <div>
          <h1>{{item.title}}</h1>
          <h2>{{item.sub_title}}</h2>
          <span>￥<span>{{item.price}}</span></span>
        </div>
        <div>
          <span>颜色选择</span>
          <ul>
            <router-link tag="li" v-for="(item2, index2) in item.sku_list" :key="index2" :to="{name:'commodityDetails', params: {id: item2.id}}">
              <img :src="item2.image" alt="">
            </router-link>
          </ul>
        </div>
        <div>
          fdsa
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'commodity-details',
  data () {
    return {
      oDetails: {},
      routeId: 0
    }
  },
  methods: {
    getCode () {
      this.axios.get(global.globalData.url + 'detail').then(res => {
        this.oDetails = res.data
        console.log(this.oDetails)
      })
    }
  },
  created () {
    this.getCode()
    this.routeId = this.$route.params.id
  },
  watch: {
    $route () {
      this.routeId = this.$route.params.id
    }
  }
}
</script>

<style scoped lang="scss">
  .commodityDetails{
    display: flex;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 60px;
    min-height: 600px;
    margin-bottom: 60px;
    >li{
      display: flex;
      >div{
        padding: 80px 0;
        width: 558px;
        >div:nth-child(1){
          width: 100%;
          position: relative;
          border-bottom: 1px solid rgba(0,0,0,.08);
          >h1{
            width: 420px;
            font-size: 24px;
            line-height: 30px;
            color: #000;
            padding: 0 0 20px;
          }
          >h2{
            width: 420px;
            color: #999;
            font-size: 14px;
            line-height: 18px;
            padding-bottom: 28px;
          }
          >span{
            position: absolute;
            right: 20px;
            top: 50%;
            display: block;
            color: #d44d44;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            text-align: right;
            >span{
              font-size: 26px;
            }
          }
        }
        >div:nth-child(2){
          margin-top: 30px;
          display: flex;
          >span{
            display: inline-block;
            width: 90px;
            height: 39px;
            line-height: 39px;
            color: #666;
            font-size: 14px;
          }
          >ul{
            display: flex;
            width: 100%;
            padding-bottom: 30px;
            border-bottom: 1px dashed #ccc;
            >li{
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 36px;
              height: 36px;
              border: 2px solid #dcdcdc;
              border-radius: 50%;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              margin-right: 20px;
              >img{
                width: 25px;
                height: 25px;
                border-radius: 50%;
              }
            }
            >.router-link-active{
              border: 2px solid #868686;
            }
          }
        }
      }
      >p{
        padding-left: 10px;
        width: 460px;
        height: 440px;
      }
      >ul{
        >li{
          width: 54px;
          height: 54px;
          margin-top: 10px;
          padding: 12px;
          border: 1px solid rgba(0,0,0,.06);
          border-radius: 5px;
          cursor: pointer;
        }
        >li:first-child{
          margin: 0;
        }
      }
    }
  }
</style>
