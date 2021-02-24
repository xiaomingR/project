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
							<h2>手机动态密码登录
							</h2>
							<!-- 输入框手机号 -->
							<div class="form_wrap">
								<div class="pNumber">
									<input type="text" class="box" value="中国大陆 86">
									<!-- 旁边的尖角号 -->
									<a href="javascript:;" class="link_code"></a><br>
								</div>
								<!-- 注册或绑定手机号 -->
								<div class="mima">
									<input type="text" placeholder="注册或绑定手机号" class="paword">
								</div>
								
								<!-- 滑动模块-->
								<div class="slidable">
									<span class="s1">
										<i></i>
									</span>
									
								</div>
								
								<!-- 短信验证 -->
								<div class="login-set">
									<input type="text" class="message" placeholder="短信动态码">
									<a href="">发送动态码</a>
								</div>
								
								
									<input type="checkbox" checked>30天内自动登录
							
								<input type="submit" value="登   录" class="login">
								
								<p class="xieyi">登录即代表您同意我们的 <a href="">服务协议  </a>和 <a href="">隐私政策</a></p>
								
								<!-- 下面的账号登录 -->
							</div>
							<!-- 携程账号登录链接 -->
							
							<a href="#">＜携程账号登录</a>
							
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
  .lg_hd{
		 width: 980px;
		 height: 90px;
		 margin :auto;
		 padding: 0 10px;
		
	} 
	.lg_hd>h1{
		  width: 203px;
		  padding-top: 22px;
		  margin-right: 10px;
	}
	.lg_hd a{
		background-color: #0062CC;
		display: block;
		width: 100%;
		height: 34px;
		background: url(../img/header/c_logo2020.png) no-repeat;
		background-size: 100% 100%;
	
	}
	.tips-security{
		width:100%;
		padding: 7px 0;
		background: #FFFCD8;
		font-size: 12px;
		color: #666;
		text-align: center;
	}
	.tips-security>i{
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-right: 4px;
		background-image: url(../img/header/un_bg_pop.png);
		background-repeat: no-repeat;
		background-position: 0 -191px;
		vertical-align: middle;
	}
	
.tips-security a{
	color: #000000;
}
.lg_banner_wrap{
	width: 1920px;
	height: 540px;
	background-size: 100% 100%;
	background-image: url(../img/login/login.jpg);
	background-repeat: no-repeat;
}
.lg_banner_wrap>.mod-box{
	  position: relative;
	  width: 980px;
		margin: 0 auto;
}
.mod-box>.lg_loginwrap{
	    position: relative;
	    float: right;
	    width: 380px;
	    min-height: 540px;
	    margin-right: 72px;
}
.lg_banner_wrap .lg_loginbox{
	background: #fff;
	position: absolute;
	left: 0;
	right: 0;
	border-radius: 4px;
	padding: 30px 30px 20px;
  margin-top: 30px;
	    font-size: 12px;
}
.lg_loginbox>h2{
	    position: relative;
		  padding-bottom: 16px;
			line-height: 1;
	    font-size: 18px;
	    color: #111;
			margin-bottom: 6px;
}
.lg_loginbox .phoneNumber{
			position: absolute;
			right: 0;
			font-size: 12px;
			color: #666;
}


.form_wrap .phoneNumber{
	    position: relative;
	    width: 100%;
	    height: 28px;
	    padding: 6px 5px 5px 13px;
	    line-height: 28px;
	    border: 1px solid #ccc;
	    font-size: 14px;
	    color: #333;
	   
}
.form_wrap>.pNumber{
	width: 320px;
	height: 40px;
	outline: 0;
	border: 1px solid #ccc;
	padding: 8px 5px 5px 13px;
	font-size: 14px;
	margin-bottom: 20px;
}
.pNumber>.box{
	width:280PX;
	border: 0;
	outline: 0;
}
.pNumber .link_code{
  position: absolute;
  right:30;
	top:73;
	width: 40px;
	height: 40px;
	background-position: 0 -20px;
	background-image: url(../img/login/phone.png);
}
.form_wrap>.mima{
	width: 100%;
	height: 40px;
	outline: 0;
	border: 1px solid #ccc;
	padding: 8px 5px 5px 13px;
	font-size: 14px;
	margin-bottom: 20px;
}
.mima>.paword{
	border: 0;
	outline: 0;
}
.slidable{
	width: 100%;
	height: 40px;
	border: 1px solid #ccc;
	font-size: 14px;
	background-color: #EBEBEB;
}
.slidable>.s1{
	display:inline-block;
	margin-top: 2px;
	margin-left: 1px;
	height: 34px;
	width: 38px;
	background-color: white;

}
.slidable i{
	display: inline-block;
	margin-top: 12px;
	margin-left: 10px;
	width: 18px;
	height: 18px;
	background-position: -32px,0px;
	background-image: url(../img/login/captcha3.20c9fbe4.png);
	
}



.login-set{
	position: relative;
	margin-top: 20px;
	width: 100%;
	height: 40px;
	border: 1px solid #ccc;
	padding: 8px 5px 5px 13px;
	font-size: 14px;
	outline: 0;
	margin-bottom: 14px;
}
.login-set>.message{
	border: 0;
	outline: 0;
}
.login-set>a{
	position: absolute;
	bottom: 12;
	right: 8;
	font-size: 12px;
}


.form_wrap .login{
	width: 100%;
	height: 42px;
	color: #fff;
	cursor: pointer;
	background-color: #FF9A14;
	border: 0;
	border-radius: 4px;
	font-size: 16px;
	margin-top: 20px;
}
.xieyi{
	margin-top: 10px;
	margin-bottom: 10px;
	text-align: center;
	color: #999;
}
.xieyi>a{
	color: #999;
	border-bottom: 1px dotted #999;
}
.login-bottom{
	margin-top: 52px;
}
.login-bottom>.login-about{
	margin-bottom: 20px;
}
.login-bottom a{
	    color: #666;
	    text-decoration: none;
			cursor: pointer;
}
.login-bottom  span{
	padding: 0 8px;
	color: #ccc;
}
.login-about>.free{
	    float: right;
	    color: #3882E5;
}
.login-other>.a1{
	display: inline-block;
	width: 30px;
	height: 30px;
  margin-right: 18px;
	background: url(../img/login/login_third.png) no-repeat;
	background-position: 0 0;
}
.login-other>.a2{
	display: inline-block;
	width: 30px;
	height: 30px;
  margin-right: 18px;
	background: url(../img/login/login_third.png) no-repeat;
	background-position: -35px 0;
}
.login-other>.a3{
	display: inline-block;
	width: 30px;
	height: 30px;
  margin-right: 18px;
	background: url(../img/login/login_third.png) no-repeat;
	background-position: -70px 0;
}
.login-other>.a4{
	display: inline-block;
	width: 30px;
	height: 30px;
  margin-right: 18px;
	background: url(../img/login/login_third.png) no-repeat;
	background-position: -105px 0;
}
.login-other>.a5{
	display: inline-block;
	width: 30px;
	height: 30px;
  margin-right: 18px;
	background: url(../img/login/login_third.png) no-repeat;
	background-position: -140px 0;
}
.base_ft_wrap{
	width: 980px;
	margin: 0 auto;
	margin-top: 55px;
	border-top: 1px dashed #9ECCF5;;
}
.web-nav{
	color: #4c4c4c;
	font-size: 12px;
	text-align: center;
	margin-top: 20px;
	margin-bottom: 0;
}
.web-nav a{
	color: #4c4c4c;
	white-space: nowrap;
	text-decoration: none;
}
.copyright{
	color: #4c4c4c;
	font-size: 12px;
	text-align: center;
	margin-top: 20px;
	margin-top: 0;
}
.copyright a{
	color: #4c4c4c;
}

</style>