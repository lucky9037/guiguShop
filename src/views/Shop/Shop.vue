<template>
  <div>
    <shopHeader></shopHeader>
    <div class="tabs">
      <div class="tab_item">
        <router-link to='/shop/goods'>点餐</router-link>
      </div>
      <div class="tab_item">
        <router-link to='/shop/rating'>评价</router-link>
      </div>
      <div class="tab_item">
        <router-link to='/shop/info'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import shopHeader from '../../components/shopHeader/shopHeader.vue'
export default {
  components: {
    shopHeader
  },
  data () {
    return {};
  },
  mounted () {
    this.$store.dispatch('getGoodsList')
  },
  methods: {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixins.styl'
.tabs
  height 40px
  line-height 40px
  bottom-border-1px(rgba(7, 17, 27, 0.1))
  .tab_item
    float left
    width 33.33333%
    text-align center
    font-size 14px
    color rgb(77, 85, 93)
    a
      display block
      &.router-link-active
        color #02a774
</style>