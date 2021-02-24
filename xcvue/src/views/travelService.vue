<template>
  <div class="mod-vas">
		<div>
			<ul class="current">
				<li class="title"><a href="">旅行服务</a></li>
			</ul>
		</div>
		<!-- 下面的内容 -->
		<div class="mod-bd-travel d-flex">
			<div class="supply-box">
				<!-- 上面的div -->
        <a href="#">
          <div class="supply-hd d-flex">	
				<div class="mt-2 ml-3">
					<span class="img-wifi"><i></i></span>
				</div>
					<div class="ml-3">
						<span >
							<p class="supply-title mt-2">出境WiFi</p>
							<p class="supply-intro mb-0 mt-2 mb-1">全球出境WiFi租赁</p>	
							<p class="supply-intro mt-0">流量不限、多人共享、携带便捷、低价信号强</p>
						</span>
					</div>
				</div>
        </a>
				
				<!-- 下面的div -->
				<div>
					<ul class="d-flex list-unstyled ">
						<li class="supply-list"><a href="#" class="text-dark border-0 d-flex"><img class="serviceImg" src="https://pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="">日本</a></li>
						<li class="supply-list"><a href="#" class="text-dark d-flex"><img class="serviceImg" src="https://pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="">韩国</a></li>
						<li class="supply-list"><a href="#" class="text-dark d-flex"><img class="serviceImg" src="//pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="">欧洲通用</a></li>
						<li class="supply-list"><a href="#" class="text-dark d-flex"><img class="serviceImg" src="//pic.c-ctrip.com/index/v3.0/supply_icon.png" alt="">更多</a></li>
					</ul>
				</div>
			</div>
      <div class="supply-box">
				<!-- 上面的div -->
        <a href="">
          <div class="supply-hd d-flex">	
				<div class="mt-2 ml-3">
					<span class="img-visa"><i></i></span>
				</div>
					<div class="ml-3">
						<span >
							<p class="supply-title mt-2">签证</p>
							<p class="supply-intro mb-0 mt-2 mb-1">在材料制作完成前均可申请订单全额退款</p>	
							<p class="supply-intro mt-0">服务优质，方便快捷，诚信可靠，出签率高</p>
						</span>
					</div>
				</div>
        </a>
				
				<!-- 下面的div -->
				<div>
					<ul class="d-flex list-unstyled">
						<li class="supply-list"><a href="#" class="text-dark border-0 d-flex"><img class="serviceImg" src="//pic.c-ctrip.com/vacation_v2/visa/24-japan.png" alt="">日本</a></li>
						<li class="supply-list"><a href="#"  class="text-dark d-flex"><img class="serviceImg" src="//pic.c-ctrip.com/vacation_v2/visa/24-korea.png" alt="">韩国</a></li>
						<li class="supply-list"><a href="" class="text-dark d-flex"><img class="serviceImg" src="//pic.c-ctrip.com/vacation_v2/visa/24-USA.png" alt="">美国</a></li>
						<li class="supply-list"><a href="" class="text-dark d-flex"><img class="serviceImg" src="//pic.c-ctrip.com/vacation_v2/visa/24-Australia.png" alt="">澳大利亚</a></li>
					</ul>
				</div>
			</div>
      <div class="supply-box">
				<!-- 上面的div -->
        <a href="">
          <div class="supply-hd d-flex">	
				<div class="mt-2 ml-3">
					<span class="img-insurance"><i></i></span>
				</div>
					<div class="ml-3">
						<span >
							<p class="supply-title mt-2">保险</p>
							<p class="supply-intro mb-0 mt-2 mb-1">携程保险，安心随行</p>	
							<p class="supply-intro mt-0">旅游定制、极速出保、便捷理赔</p>
						</span>
					</div>
				</div>
        </a>
				
				<!-- 下面的div -->
				<div>
					<ul class="d-flex list-unstyled">
						<li class="supply-list"><a href="" class="text-bottom border-0 d-flex">
          <img src="https://pages.ctrip.com/tour/pdf1610/1.png" alt="" class="serviceImg">【申根之王】</a></li>
							<li class="supply-list"><a href="" class="text-bottom border-0 d-flex">
          <img src="https://pages.ctrip.com/tour/pdf1610/1.png" alt="" class="serviceImg">【亚洲优选】</a></li>
						<li class="supply-list"><a href="" class="text-bottom border-0 d-flex">
          <img src="https://pages.ctrip.com/tour/pdf1610/1.png" alt="" class="serviceImg">【境内畅游】</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
  .mod-vas{
	 width: 1180px;
	 height: 193px;
	 margin: 0 auto;
 }
 .current{
	list-style: none;
	display: flex;
	margin-bottom: 2px;
	margin-top: 30px;
	padding-left: 0;	
}
.supply-box{
  width: 386px;
  height: 145px;
  margin-top: 10px;
  border: 1px solid #e0e0e0;
}
.supply-box:not(:first-child){
  margin-left:10px
}
.current>li{
	margin-right: 30px;
}
 .mod-bd-travel{
   width: 100%;
	 border-top: 2px solid #3983E5;
 }
 .supply-hd{
	 width: 100%;
	 height: 102px;
   border-bottom: 1px solid #e0e0e0;
 }
.img-wifi{
	position: relative;
	display: inline-block;
	width: 70px;
	height: 70px;
	background: #abcbf5; 
	border-radius: 50%;
}
.img-visa{
	position: relative;
	display: inline-block;
	width: 70px;
	height: 70px;
  background: #cbe2b3;
	border-radius: 50%;
}
.img-insurance{
	position: relative;
	display: inline-block;
	width: 70px;
	height: 70px;
  background: #f6dbb9;
	border-radius: 50%;
}
.img-wifi i{
	    position: absolute;
	    top: 25%;
	    left: 18%;
	    width: 46px;
			height: 35px;
	    display: inline-block;
			background-position: 0 0;
			background-image: url(../../public/imgs/index/un_index_supply.png);
}
.img-visa i{
	    position: absolute;
	    top: 18%;
	    left: 18%;
	    width: 46px;
			height: 50px;
	    display: inline-block;
			background-position: 0 -39px;
			background-image: url(../../public/imgs/index/un_index_supply.png);
}
.img-insurance i{
	    position: absolute;
	    top: 17%;
	    left: 18%;
	    width: 46px;
			height: 50px;
	    display: inline-block;
			background-position: 0 -89px;
			background-image: url(../../public/imgs/index/un_index_supply.png);
}
 .supply-title{
	  font: 16px/1.5 "Microsoft yahei";
	  margin-bottom: 5px;
 }
 .supply-intro{
	 font-size: 12px;
 }
 p{
   text-decoration: none;
   color:#666;
 }
 .title>a{
      font: 16px/26px "Microsoft YaHei", "SimHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
}


.text-dark{
  display: inline-block;
  width: 97px;
  height: 24px;
  text-align: center;
  border-left: 1px dashed #a3a3a3;
  color: #333;
  font-size: 12px;
	vertical-align: middle;
}
.text-bottom{
  display: inline-block;
   width: 129px;
  height: 24px;
  text-align: center;
  border-left: 1px dashed #a3a3a3;
   color: #333;
  font-size: 12px;
}
.supply-list{
  display: inline-block;
  vertical-align: middle;
  padding: 8px 0;
}
.serviceImg{
	width: 25px;
	height: 40px
}


</style>
