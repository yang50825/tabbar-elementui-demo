import Vue from 'vue'
import App from './App.vue'
// 引入组件
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'

// 全局引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入路由
import VueRouter from 'vue-router'

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

// 使用ElementUI
Vue.use(ElementUI)

// 使用路由
Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/',
    redirect: '/myGoodsList',
  },
  {
    path: '/myGoodsList',
    component: MyGoodsList,
  },
  {
    path: '/myGoodsSearch',
    component: MyGoodsSearch,
  },
  {
    path: '/myUserInfo',
    component: MyUserInfo,
  },
]

// 创建路由对象
const router = new VueRouter({
  routes,
})

// 自定义方法
// 自动获取聚焦
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
