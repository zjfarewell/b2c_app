<template>
  <div id="app">
    <ul class="app-list" v-show="onoff">
      <router-link to="/home" tag="li">
        <i class="iconfont icon-yemian"></i>
        <div>主页</div>
      </router-link>
      <router-link to="/pro_list" tag="li">
        <i class="iconfont icon-liebiao"></i>
        <div>列表</div>
      </router-link>
      <router-link to="/shop_cart" tag="li">
        <i class="iconfont icon-gouwuche"></i>
        <div>购物车</div>
      </router-link>
      <router-link to="/user" tag="li">
        <i class="iconfont icon-wode"></i>
        <div>我的</div>
      </router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      onoff:true
    }
  },
  components: {
  },
  updated(){/*该生命周期（钩子函数的作用）
  
  */

    //console.log(this.$store.state.navOnoff)
    //使用状态管理控制是否显示底部导航&路由
    this.onoff = this.$store.state.navOnoff;
    //this.$store.commit('changeNavOnoff',true);//是否显示底部路由
  }
}
</script>

<style>
  @import './assets/fonts/iconfont.css';
  #app{
    width: 750px;
    overflow: hidden;
  }
  .app-list{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 750px;
    height: 98px;
    padding: 0 58px;
    background: #2d9481;
    overflow: hidden;
  }
  .app-list li{
    float: left;
    width: 98px;
    height: 98px;
    margin-right: 60px;
    text-align: center;
    font-size: 25px;
    color: #fff;
  }
  .app-list li .iconfont{
    font-size: 40px;
    color: #fff;
    line-height: 65px;
  }
  .app-list li:nth-last-child(1){
    margin-right: 0!important;
  }
</style>
