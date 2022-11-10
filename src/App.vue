<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/Footer_Guild/Footer_Guide.vue';
export default {
components: {FooterGuide},
data() {
return {};
},
mounted() {
  this.$store.dispatch('getAddress')  //地址信息
 },
 methods:{
 }
};
</script>
<style lang='stylus'>
    #app
      width 100%
      height 100%
      position relative
</style>