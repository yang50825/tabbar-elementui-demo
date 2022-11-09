<template>
  <div>
    <MyHeader title="tabbar案例-elementui版本"></MyHeader>
    <div class="main_box">
      <router-view></router-view>
    </div>
    <MyTabBar :arr="tabList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyTabBar from './components/MyTabBar'
export default {
  data() {
    return {
      tabList: [
        // 底部导航的数据test123
        {
          iconText: 'el-icon-document',
          text: '商品列表',
          url: '/myGoodsList',
        },
        {
          iconText: 'el-icon-search',
          text: '商品搜索',
          url: '/myGoodsSearch',
        },
        {
          iconText: 'el-icon-user',
          text: '我的信息',
          url: '/myUserInfo',
        },
      ],
    }
  },
  components: {
    MyHeader,
    MyTabBar,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.main_box {
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>
