import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'
import Search from '@/views/Search/Search'
import Order from '@/views/Order/Order'
import Profile from '@/views/Profile/Profile'
import Login from '@/views/Login/Login'
 Vue.use(Router)

export default new Router({
  routes: [

    // 路由重定向
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      meta:{
        isShowFooter:true
      }
    },
    {
      path: '/search',
      name: '搜索',
      component: Search,
      meta:{
        isShowFooter:true
      }
    },
    {
      path: '/order',
      name: '订单',
      component: Order,
      meta:{
        isShowFooter:true
      }
    },
    {
      path: '/profile',
      name: '个人中心',
      component: Profile,
      meta:{
        isShowFooter:true
      }
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
    },
  ]
})
