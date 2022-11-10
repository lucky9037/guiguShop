<template>
     <div class="msite">
        <!--首页头部-->
         <HeaderTop :title='address.name'>
          <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
           <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
         </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav" v-if="categorys.length">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(items,index2) in item" :key="index2">
                  <div class="food_container">
                    <img :src="imgBaseUrl+items.image_url">
                  </div>
                  <span>{{items.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <img v-else src="./images/msite_back.svg" alt="back">
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
         <ShopList/>
        </div>
</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/headerTop.vue';
import ShopList from '../../components/ShopList/shopList.vue';
import {mapState} from 'vuex';
export default {
components: {
    HeaderTop,
    ShopList
},
data() {
return {
  imgBaseUrl: 'https://fuss10.elemecdn.com'
};
},
 mounted() {
  this.$store.dispatch('getCategorys')  //商品信息
  this.$store.dispatch("getShopList")  //商铺列表
 },
 methods:{},
 watch:{
   categorys(){
     this.$nextTick(()=>{  //dom页面更新之后立即调用
     //创建一个Swiper实例对象，来实现轮播
     new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
      el: '.swiper-pagination',
    },
  })
   })
   }
 },
 computed:{
   ...mapState(['address','categorys']),
  //  遍历商品列表
   categorysArr(){
    const {categorys} = this
    let arr = []
    let minArr = []
     categorys.forEach((items) => {
       if(minArr.length===8){
         minArr = []
       }
       if(minArr.length===0){
         arr.push(minArr)
       }
      //  将当前分类保存到小数组中
       minArr.push(items)
     });
     return arr
   }

 }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../assets/stylus/mixins.styl"
       .msite  
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
           
</style>