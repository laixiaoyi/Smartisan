<template>
  <div class="mian">
    <ul>
      <!--商品列表排序-->
      <li>综合排序</li>
      <span>·</span>
      <li>销量排序</li>
      <span>·</span>
      <li>价格低到高</li>
      <span>·</span>
      <li>价格高到底</li>
    </ul>
    <!--商品列表组件-->
    <div>
      <commodity-list v-for="(item, index) in commodityList" :key="index" :commodityList="item"></commodity-list>
    </div>
  </div>
</template>

<script>
import commodityList from './commodityList'
export default {
  name: 'Home',
  components: {
    commodityList
  },
  data () {
    return {
      commodityList: []
    }
  },
  created () {
    // 请求商品列表数据
    this.axios.get(global.globalData.url + 'list').then(res => {
      this.commodityList = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mian{
    width: 1220px;
    margin: 0 auto;
    border-top: 1px solid #ccc;
    >ul{
      display: flex;
      height: 60px;
      line-height: 60px;
      >span{
        margin: 0 21px;
        font-size: 20px;
      }
      >li{
        font-size: 12px;
        cursor: pointer;
        color: #9d9d9d;
      }
      >li:hover{
        color: #5d8bc2;
      }
      >li:first-child{
        margin-left: 9px;
        color: #5d8bc2;
      }
    }
    >div{
      display: flex;
      width: 100%;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
</style>
