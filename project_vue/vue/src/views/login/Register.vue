<template>
  <!-- 手机验证登录 -->
  <div>
    <div class="zhx_login_img">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <div class="zhx_register">
      <van-field v-model="sms" center clearable placeholder="请输入手机号">
        <template #button>
          <a
            style="color: red"
            v-show="isShow == false"
            size="small"
            type="primary"
            @click="onClickSend"
            >发送验证码</a
          >
          <a style="color: gray" v-show="isShow == true"
            >获取验证码({{ num }})</a
          >
        </template>
      </van-field>
      <van-cell-group>
        <van-field v-model="sss" placeholder="请输入验证码" />
      </van-cell-group>
    </div>
    <div class="zhx_register_pass">
      <span>*未注册的手机号将自动注册</span>
      <span @click="onLogin">使用密码登录</span>
    </div>
    <div class="zhx_login_button">
      <button @click="redister">登录</button>
    </div>
  </div>
</template>
 
<script>
import Vue from "vue";
import { Toast } from "vant";
 
Vue.use(Toast);
export default {
  data() {
    return {
      sms: "",
      sss: "",
      isShow: false,
      num: 60,
    };
  },
  methods: {
    onLogin() {
      this.$router.push("/login");
    },
    onClickSend() {
      this.$APP
        .smsCode({
          mobile: this.sms,
          sms_type: "login",
        })
        .then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.countDown();
            Toast(res.data.msg);
          } else if (res.data.code == 201) {
            Toast(res.data.msg);
          }
        });
    },
    //倒计时
    countDown() {
      this.isShow = true;
      setInterval(() => {
        this.num--;
        if (this.num <= 0) {
          this.isShow = false;
          this.num = 60;
        }
      }, 1000);
    },
 
    redister() {
      this.$APP
        .login({
          mobile: this.sms,
          sms_code: this.sss,
          client: 1,
          type: 2,
        })
        .then((res) => {
          console.log(res);
          let token = res.data.data.remember_token;
          window.localStorage.setItem("token", token);
          this.$router.push("/home");
        });
    },
  },
};
</script>
 
<style scoped>
.zhx_register {
  width: 100%;
  height: 15vh;
}
.zhx_login_img {
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zhx_login_img img {
  width: 80%;
}
 
.zhx_login_button {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
}
.zhx_login_button button {
  width: 90%;
  height: 7vh;
  background: orange;
  border-radius: 18px;
  border: none;
}
.zhx_register_pass {
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  font-size: 0.6rem;
  color: gray;
}
</style>