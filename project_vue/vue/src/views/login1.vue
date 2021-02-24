<template>
    <div>
        <div class="lg_hd">
				<h1>
					<a href="#"></a>
				</h1>
			</div>
			<!-- 安全警告 -->
			<div class="tips-security">
				<i></i>
				依据《网络安全法》，为保障您相关功能的正常使用，账号需绑定手机，如您未绑定则登录后会引导您操作绑定。 新版
				<a href="">《隐私政策》</a>已上线，感谢您的支持。
			</div>
			
			<!-- 背景图片 -->
			<div class="lg_banner_wrap">
				<div class="mod-box">
					<div class="lg_loginwrap">
						<!-- 个性化登录 -->
						<div class="lg_loginbox">
							<h2>携程账号登录
							<a href="#" class="phoneNumber">手机号查单></a>
							</h2>
							<!-- 输入框 -->
							<div class="form_wrap">
								<input type="text" placeholder="国内手机号/用户名/邮箱/卡号" class="box"><br>
								<div class="mima">
									<input type="password" placeholder="登录密码" class="paword">
									<span class="forget"><a href="#" class="pass">忘记密码</a></span>
								</div>
								<div class="login-set">
									<input type="checkbox" checked="">30天内自动登录
									<a href="#" class="phone">手机动态密码登录<i class="icon-arrowr"></i></a>
								</div>
								<input type="submit" value="登   录" class="login">
								
								<p class="xieyi">登录即代表您同意我们的 <a href="">服务协议  </a>和 <a href="">隐私政策</a></p>
						
							</div>
							<!-- 下面的连接图片 -->	
							<div class="login-bottom">
								<div class="login-about">
									<a href="#">境外手机</a> 
									<span>|</span>
									<a href="#">公司客户</a>
									<span>|</span>
									<a href="#">携程通</a>
									<a href="#" class="free">免费注册</a>
								</div>
								<!-- 下方图标 -->
								<div class="login-other">
									<a href="#" class="a1"></a>
									<a href="#" class="a2"></a>
									<a href="#" class="a3"></a>
									<a href="#" class="a4"></a>
									<a href="#" class="a5"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 下面导航 -->
			<div class="base_ft_wrap">
				<p class="web-nav">
					<a href="#">网站导航</a> |
					<a href="">宾馆索引</a> |
					<a href="">用户协议</a> |
					<a href="#">关于携程</a> |
					<a href="">企业公民</a> |
					<a href="">诚聘英才</a> |
					<a href="#">分销联盟</a> |
					<a href="">企业礼品卡采购</a> |
					<a href="">代理合作</a> |
					<a href="#">广告业务</a> |
					<a href="">联系我们</a> |
					<a href="">返回旧版</a> 
				</p>
				<p class="copyright">
					<a href="">Copyright ©</a>
					<span>1999-2020</span>
					<a href="">ctrip.com</a>
					<span>. All rights reserved.</span>
				</p>
			</div>
    </div>
</template>
<style scoped>
    .lg_hd {
      width: 980px;
      height: 90px;
      margin: auto;
      padding: 0 10px;
  }
  
  .lg_hd>h1 {
      width: 203px;
      padding-top: 22px;
      margin-right: 10px;
  }
  
  .lg_hd a {
      background-color: #0062CC;
      display: block;
      width: 100%;
      height: 34px;
      background: url(../img/c_logo2020.png) no-repeat;
      background-size: 100% 100%;
  }
  
  .tips-security {
      width: 100%;
      padding: 7px 0;
      background: #FFFCD8;
      font-size: 12px;
      color: #666;
      text-align: center;
  }
  
  .tips-security>i {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 4px;
      background-image: url(../assets/header/pop.png);
      background-repeat: no-repeat;
      background-position: 0 -191px;
      vertical-align: middle;
  }
  
  .tips-security a {
      color: #000000;
  }
  
  .lg_banner_wrap {
      width: 1920px;
      height: 540px;
      background-size: 100% 100%;
      background-image: url(../assets/login.jpg);
      background-repeat: no-repeat;
  }
  
  .lg_banner_wrap>.mod-box {
      position: relative;
      width: 980px;
      margin: 0 auto;
  }
  
  .mod-box>.lg_loginwrap {
      position: relative;
      float: right;
      width: 380px;
      min-height: 540px;
      margin-right: 72px;
  }
  
  .lg_banner_wrap .lg_loginbox {
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      border-radius: 4px;
      padding: 30px 30px 20px;
      margin-top: 30px;
      font-size: 12px;
  }
  
  .lg_loginbox>h2 {
      position: relative;
      padding-bottom: 16px;
      line-height: 1;
      font-size: 18px;
      color: #111;
      margin-bottom: 6px;
  }
  
  .lg_loginbox .phoneNumber {
      position: absolute;
      right: 0;
      font-size: 12px;
      color: #666;
  }
  
  .form_wrap .box {
      width: 100%;
      height: 40px;
      padding: 8px 0;
      padding: 5px 5px 5px 13px;
      border: 1px solid #ccc;
      font-size: 14px;
      outline: 0;
      margin-bottom: 16px;
  }
  
  .form_wrap>.mima {
      width: 100%;
      height: 40%;
      outline: 0;
      border: 1px solid #ccc;
      padding: 5px 5px 5px 13px;
      font-size: 14px;
      margin-bottom: 20px;
  }
  
  .form_wrap .paword {
      width: 200px;
      border: none;
      font-size: 14px;
      outline: 0;
  }
  
  .forget {
      position: relative;
  }
  
  .forget>.pass {
      position: absolute;
      left: 40;
      right: 0;
      top: -10;
      bottom: 0;
      width: 80px;
      height: 40px;
      line-height: 40px;
      outline: 0;
      font-size: 12px;
      text-align: left;
      color: #666;
  }
  
  .login-set {
      position: relative;
      margin-bottom: 13px;
  }
  
  .login-set>.phone {
      position: absolute;
      right: 0;
      color: #666;
  }
  
  .phone>.icon-arrowr {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-position: 0 0;
      background-image: url(../assets/un_login_20170818.png);
      margin-left: 2px;
      vertical-align: -1px;
  }
  
  .form_wrap .login {
      width: 100%;
      height: 42px;
      color: #fff;
      cursor: pointer;
      background-color: #FF9A14;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
  }
  
  .xieyi {
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
      color: #999;
  }
  
  .xieyi>a {
      color: #999;
      border-bottom: 1px dotted #999;
  }
  
  .login-bottom {
      margin-top: 52px;
  }
  
  .login-bottom>.login-about {
      margin-bottom: 20px;
  }
  
  .login-bottom a {
      color: #666;
      text-decoration: none;
      cursor: pointer;
  }
  
  .login-bottom span {
      padding: 0 8px;
      color: #ccc;
  }
  
  .login-about>.free {
      float: right;
      color: #3882E5;
  }
  
  .login-other>.a1 {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 18px;
      background: url(../assets/un_login_third.png) no-repeat;
      background-position: 0 0;
  }
  
  .login-other>.a2 {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 18px;
      background: url(../assets/un_login_third.png) no-repeat;
      background-position: -35px 0;
  }
  
  .login-other>.a3 {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 18px;
      background: url(../assets/un_login_third.png) no-repeat;
      background-position: -70px 0;
  }
  
  .login-other>.a4 {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 18px;
      background: url(../assets/un_login_third.png) no-repeat;
      background-position: -105px 0;
  }
  
  .login-other>.a5 {
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-right: 18px;
      background: url(../assets/un_login_third.png) no-repeat;
      background-position: -140px 0;
  }
  
  .base_ft_wrap {
      width: 980px;
      margin: 0 auto;
      margin-top: 55px;
      border-top: 1px dashed #9ECCF5;
      ;
  }
  
  .web-nav {
      color: #4c4c4c;
      font-size: 12px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 0;
  }
  
  .web-nav a {
      color: #4c4c4c;
      white-space: nowrap;
      text-decoration: none;
  }
  
  .copyright {
      color: #4c4c4c;
      font-size: 12px;
      text-align: center;
      margin-top: 20px;
      margin-top: 0;
  }
  
  .copyright a {
      color: #4c4c4c;
  }
</style>