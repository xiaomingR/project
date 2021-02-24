<template>
<!-- 注册 -->
  <div>
    <div class="zhx_retrieve">
      <van-field v-model="sms" center clearable placeholder="请输入手机号">
        <template #button>
          <a size="small" type="primary">发送验证码</a>
        </template>
      </van-field>
      <van-cell-group>
        <van-field v-model="sss" placeholder="请输入验证码" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="password" placeholder="请输入密码" />
      </van-cell-group>
    </div>
    <div class="zhx_login_button">
      <button>登录</button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      sms: "",
      sss: "",
      password: "",
    };
  },
};
</script>
 
<style>
.zhx_retrieve {
  width: 100%;
  height: 25vh;
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
</style>