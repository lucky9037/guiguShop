<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{ on: loginWay }"
            @click="loginWay = true"
          >短信登录</a>
          <a
            href="javascript:;"
            :class="{ on: !loginWay }"
            @click="loginWay = false"
          >密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="toLogin">
          <div :class="{ on: loginWay }">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{ rightPhone: rightPhone }"
                @click.prevent="getCode"
              >
                {{
                  computedTime > 0 ? `已发送(${computedTime})s` : "发送验证码"
                }}
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !loginWay }">
            <section>
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  v-model="uname"
                  placeholder="手机/邮箱/用户名"
                />
              </section>
              <section class="login_verification">
                <input
                  v-if="showPwd"
                  type="text"
                  v-model="pwd"
                  maxlength="8"
                  placeholder="密码"
                />
                <input
                  v-else
                  type="password"
                  v-model="pwd"
                  maxlength="8"
                  placeholder="密码"
                />
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div
                    class="switch_circle"
                    :class="{ right: showPwd }"
                  ></div>
                  <span class="switch_text">{{ showPwd ? "abc" : "" }}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                  v-model="captcha"
                />
                <img
                  class="get_verification"
                  src="http://localhost:4000/captcha?"
                  alt="captcha"
                  @click="getCaptcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a
          href="javascript:;"
          class="about_us"
        >关于我们</a>
      </div>
      <a
        href="javascript:"
        class="go_back"
        @click="$router.back()"
      >
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip
      :alertText="alertText"
      v-if="showTip"
      @closeTip="closeTip"
    ></AlertTip>
  </div>
</template>
<script>
import { reqLoginpwd, reqSendCode, reqLoginSms } from "../../api/index";
import AlertTip from "../../components/AlertTip/alertTip.vue";
export default {
  components: {
    AlertTip,
  },
  data () {
    return {
      loginWay: true, //true 代表短信登陆，false代表密码登陆
      phone: "", //手机号
      code: "", //手机验证码
      computedTime: 0, //倒计时
      showPwd: false, //是否显示密码
      uname: "", //用户名
      pwd: "", //密码
      captcha: "", //验证码
      alertText: "", //提示文字
      showTip: false, //是否显示提示弹窗
    };
  },
  mounted () { },
  methods: {
    //  点击验证码倒计时
    async getCode () {
      if (!this.computedTime) {
        //如果没有计时，防止多次点击
        this.computedTime = 30;
        var timer = setInterval(() => {
          this.computedTime--;
          if (this.computedTime <= 0) {
            clearInterval(timer);
          }
        }, 1000);
        const res = await reqSendCode(this.phone)
        if (res.code == 1) {
          this.showAlert(res.msg)
        }
      }
    },
    //  封装弹窗方法
    showAlert (alertText) {
      this.showTip = true;
      this.alertText = alertText;
    },
    //点击异步登陆
    async toLogin () {
      let res
      //  判断登陆方式（短信验证）
      if (this.loginWay) {
        const { rightPhone, phone, code } = this;
        if (!rightPhone) {
          this.showAlert("手机号不正确");
          return
        } else if (!/^\d{6}$/.test(code)) {
          this.showAlert("验证码不正确");
          return
        }
        //发送ajax请求短信登陆

        res = await reqLoginSms(phone, code)

      } else {
        //密码登陆(用户名密码登陆)
        const { uname, pwd, captcha } = this;
        if (!uname) {
          this.showAlert("用户名不正确");
          return
        } else if (!pwd) {
          this.showAlert("密码不正确");
          return
        } else if (!captcha) {
          this.showAlert("验证码不正确");
          return
        }
        res = await reqLoginpwd(uname, pwd, captcha)
      }
      //根据结果数据处理
      //手机号和用户名登陆同时修改
      if (res.code === 0) {
        // const user = res.data._id
        const user = result.data
        //将user保存到vuex中的state
        this.$store.dispatch('recordUser', user)
        this.$router.replace('/profile')
      } else {
        this.msg = res.msg
        this.showAlert(res.msg);
      }
    },
    //点击切换图片验证码
    getCaptcha (e) {
      //每次点击的都是不一样的
      e.target.src = "http://localhost:4000/captcha?time=" + Date.now();
    },
    //点击关闭弹窗
    closeTip () {
      this.showTip = false;
      this.alertText = "";
    },
  },
  computed: {
    //  正则验证手机号
    rightPhone () {
      return /^1\d{10}$/.test(this.phone);
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl'
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #02a774
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.rightPhone
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                // transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
                &.right
                  transform translateX(30px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>