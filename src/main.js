// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Button } from 'vant';
//关闭vue 的生产提示
Vue.config.productionTip = false
// Vue.use(Button);
// Vue.prototype.$dayJs = dayjs
/* eslint-disable no-new */
// 创建vue实例
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  // beforeCreate(){
  //   Vue.prototype.$bus = this
  // }
})
