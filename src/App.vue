<template xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div id="app">
    <header>
      <nav>
        <div class="nav-a">
          <h1>
            <a href="#"><img src="./assets/img/logo.jpg" alt="锤子科技" title="锤子科技"></a>
          </h1>
          <div>
            <!--一级导航-->
            <ul>
              <li>在线商城</li>
              <li>坚果 Pro 2</li>
              <li>坚果 Pro</li>
              <li>Smartisan OS</li>
              <li>欢喜晕</li>
              <li>应用下载</li>
              <li>官方论坛</li>
            </ul>
            <!--字体图标-->
            <span class="liner"></span>
              <span class="iconfont">&#xe67a;</span>
            <!--右上角购物车-->
            <el-popover
              ref="popover1"
              placement="bottom"
              offset="1"
              trigger="hover">
              <ul>
                <div class="div1" v-if="shoppingArr.length===0">
                  <h2>购物车为空</h2>
                  <p>您还没有选购任何商品，现在前往商城选购吧</p>
                </div>
                <div class="div2" v-if="shoppingArr.length>0">
                  <li v-for="(item, index) in shoppingArr" :key="index">
                    <div>
                      <img :src="item.ali_image" alt="">
                      <div>
                        <router-link tag="p" :to="{name:'commodityDetails', params: {id: item.sku_id}}">{{item.title}}</router-link>
                        <p>
                          <span>{{item.spec_json.show_name}}</span>
                          <span class="del" @click="delCommodity(index)">X</span>
                        </p>
                        <p>
                          <span>￥</span>
                          <span>{{item.sl*item.price | current}}</span>
                          <span>x {{item.sl}}</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </div>
                <div class="div3">
                  <div>
                    <p>共计 <span>{{comQuantity}}</span> 件商品</p>
                    <p>合计：<span>￥ </span><span>{{totalPrices | current}}</span></p>
                  </div>
                  <div>
                    <el-button type="primary">去购物车</el-button>
                  </div>
                </div>
              </ul>
            </el-popover>
            <a href="#" id="dingwei"  v-popover:popover1>
              <span class="iconfont">&#xe600;</span>
              <span>{{comQuantity}}</span>
            </a>
            <!--右上角购物车结束-->
          </div>
        </div>
      </nav>
      <nav>
        <div class="nav-b">
          <ul>
            <!--二级导航-->
            <li>首页</li>·
            <li>手机</li>·
            <li>“足迹”手触感</li>·
            <li>“足迹”保护套</li>·
            <router-link to="/" tag="li">官方配件</router-link>·
            <li>空气净化器</li>·
            <li>品牌周边</li>·
            <li>第三方商品</li>·
            <li>全部</li>·
            <li>服务</li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      iTimer: null
    }
  },
  methods: {
    delCommodity (index) {
      this.$store.commit('delCommodity', index)
    }
  },
  beforeUpdate () {
    // 数据更新时判断this.$store.state.showShoppingTrolley是否为true，为true则显示购物车并在3秒后自动隐藏
    if (this.$store.state.showShoppingTrolley) {
      this.$store.commit('hideShoppingTrolley')
      // 计算定位的lfet值，将购物车的left值设置为与dingwei元素的lfet值一致
      let dingwei = document.getElementById('dingwei')
      dingwei = dingwei.offsetLeft - 347
      this.$refs.popover1.$refs.popper.style.position = 'absolute'
      this.$refs.popover1.$refs.popper.style.display = 'block'
      this.$refs.popover1.$refs.popper.style.left = dingwei + 'px'
      this.$refs.popover1.$refs.popper.style.top = '74px'
      let _this = this
      clearTimeout(this.iTimer)
      // 2秒后关闭显示的购物车
      this.iTimer = setTimeout(() => {
        _this.$refs.popover1.$refs.popper.style.display = 'none'
      }, 2000)
    }
  },
  computed: {
    comQuantity () {
      return this.$store.state.comQuantity
    },
    shoppingArr () {
      return this.$store.state.shoppingArr
    },
    totalPrices () {
      return this.$store.state.totalPrices
    }
  }
}
</script>

<style lang="scss">
  #app{
    min-width: 1220px;
    >header{
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      >nav:nth-child(1){
        background: #000;
        >.nav-a{
          /*position: relative;*/
          height: 100px;
          width: 1220px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          >div{
            display: flex;
            >ul{
              display: flex;
              >li{
                color: #c8c8c8;
                padding: 0 25px;
                cursor: pointer;
              }
              >li:hover{
                color: #fff;
              }
            }
            >span:nth-child(3){
              margin-right: 40px;
              cursor: pointer;
            }
            >span:nth-child(3):hover{
              color: #fff;
            }
            >.liner{
              border-left: 1px solid #363636;
              height: 13px;
              margin: 4px 40px 0 20px;
            }
            >span, a>span{
              font-size: 20px;
              font-family: iconfont;
              color: #c8c8c8;
            }
            >a:hover>span:nth-child(1){
              color: #fff;
            }
            >a{
              display: flex;
              >span:nth-child(2){
                margin: 0 10px 0 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #c8c8c8;
                font-size: 12px;
                color: #fff;
                cursor: pointer;
              }
            }
          }
          >h1{
            width: 40px;
            height: 40px;
          }
        }
      }
      >nav:nth-child(2){
        >.nav-b{
          padding: 31px 0;
          height: 28px;
          width: 1220px;
          margin: 0 auto;
          line-height: 28px;
          >ul{
            display: flex;
            >.router-link-active{
              font-weight: 900;
            }
            >li{
              padding: 0 19px;
              cursor: pointer;
            }
            >li:hover{
              color: #5d8bc2;
            }
            >li:first-child{
              padding-left: 15px;
            }
          }
        }
      }
    }
  }
</style>
