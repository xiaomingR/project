<template>
	<div>
		<my-header style="position:relative"></my-header>
		<!-- 页面主体 -->
		<!-- 轮播图 -->
		<div class="slide">
			<slide-show></slide-show>
		</div>
			<!-- <div class="head_img">
					<img src="../../public/img/0zg2q120008cuxqozC43C.jpg">
					<ul class="d-flex flex-nowrap">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
			</div> -->
		
			
			

		<my-footer></my-footer>
	</div>
</template>
<style>
.font_sm{
	font-size: 12px;
	color: #666;
}
.container{
	box-sizing: border-box;
}
.head_img{
	width:1920px ;height:340px;
	margin: 0 auto;
	position: relative;
	margin-left: auto;
	margin-right: auto;
}

.head_img>ul{
	width: 150px;height: 20px;
	list-style: none;
	position: absolute;
	bottom: 15px;
	left: 900px;
}
.head_img>ul>li{
	float: left;
	width: 12px;height: 12px;
	background: #fff;
	border-radius: 50%;
	margin: 0 2px;
}
.head_img>ul>li:hover{
	width: 30px;
	background: #0aa1ed;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius:10px;
}
.slide{
	width: 1920px;
	height:340px;
	margin: 0 auto;
}

</style>