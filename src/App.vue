<template>
  <div id="app">
    <!--导航条-->
    <div class="nav">
      <el-row type="flex" justify="start">
        <el-col :span="7">
          <router-link to="wowprice"  id="nav-title">
            WoW Price
          </router-link>
        </el-col>
        <el-col :offset="2">
          <el-menu theme="dark" mode="horizontal" :router="isrouter">
            <el-menu-item index="wowprice">
              萨血兑换物价信息
            </el-menu-item>
            <el-menu-item index="wowtoken">
              时光徽章
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!--内容区-->
    <div class="content">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  import wowtoken from './components/wowtoken'
  import wowprice from './components/wowprice.vue'
  export default {
    name: 'app',
    data() {
      return {
        isrouter: true,
      }
    },
    methods: {
      
    },
    components: {
      wowprice,
      wowtoken
    }
  }

</script>

<style>
  body{
    margin: 0;
    background-color: #EFF2F7;
  }
  .nav {
    background-color: #324057;
  }
  #nav-title {
    display: block;
    text-align: center;
    margin: auto;
    font-size: 24px;
    font-family: "Helvetica Neue";
    font-weight: bold;
    color: #BFCBD9;
    text-decoration: none;
    line-height: 60px;
  }
  .content{
    background-color: #D3DCE6;
  }
</style>
