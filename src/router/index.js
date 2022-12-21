import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'
import Search from '@/views/Search/Search'
import Order from '@/views/Order/Order'
import Profile from '@/views/Profile/Profile'
import Login from '@/views/Login/Login'
import Shop from '@/views/Shop/Shop'
import ShopGoods from '@/views/Shop/ShopGoods/ShopGoods'
import ShopInfo from '@/views/Shop/ShopInfo/ShopInfo'
import ShopRating from '@/views/Shop/ShopRating/ShopRating'
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
    {
      path:'/shop',
      name:'商店',
      component:Shop,
      children:[
        {
          path:'',
          redirect:'/shop/goods'
        },
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/rating',
          component: ShopRating
        },
        {
          path: '/shop/info',
          component: ShopInfo
        }
      ]
    }
  ]
})
