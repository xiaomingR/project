<template>
  <!-- 第七个旅游旗舰店 -->
	<div class="mod-play">
		<!-- 上面导航-->
		<div>
			<ul class="current">
				<li v-for="(p,i) of category" :key="i"><a href="">{{p.name}}</a></li>
			</ul>
		</div>
		<!-- 下面的内容 -->
		<div class="play d-flex">
			<!-- 左侧的文字 -->
			<div class="entrance3">
				<dt>当季推荐</dt>
				<p class="mb-3"><a href="#" class="travel-word">圣托里尼：永恒的蓝白世界</a></p>
				<p class="mb-3"><a href="#" class="travel-word">哥本哈根：走进安徒生的童话世界</a></p>
				<p class="mb-3"><a href="#" class="travel-word">圣彼得堡：风光迤逦的北方威尼斯</a></p>
				<p class="mb-3"><a href="#" class="travel-word">清迈：文艺清新的泰北明珠</a></p>
				<p><a href="#" class="travel-word">柏林：啤酒相约猪肘</a></p>
				
			</div>
			<!-- 右侧的图片 -->
			<div class="product4">
				<!-- 上面的导航 -->
				<div>
					<ul class="inner-tabs mt-2 mb-3 list-unstyled">
						<li><a href="">氢气球专栏</a></li>
						
					</ul>
				</div>
				<!-- 下面的图片 -->
					<div class="d-flex">
						<div class="col-3 p-0">
							<a href="#">
								<div class="travel-img"><img src="img/index/travel.jpg" class="w-100"></div>
							</a>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data(){
    return{
      category:[]
    }
  },
  mounted(){
    this.selectcategory()
  },
  methods:{
    selectcategory(){
      this.axios.get("/category?level=1&type=7").then(res=>{
        this.category=res.data;
      })
    }
  }
}
</script>
<style>
  .mod-play{
	 width: 1180px;
	 height: 259px;
	 margin: 28px auto 0;
 }  
 .play{
	 width: 1178px;
	 height: 220px;
	 border: 1px solid #E0E0E0;
	 border-top: 2px solid #3983E5;	
 }
 .current{
	list-style: none;
	display: flex;
	margin-bottom: 2px;
	margin-top: 30px;
	padding-left: 0;

}
.entrance-item{
	    float: left;
	    display: block;
	    border-left: 1px solid #ececec;
	    padding: 0 10px;
	    line-height: 18px;
	    height: 18px;
	    margin: 7px 0;
			font-size: 12px;
}
 .entrance3{
	 width: 227px;
	 height: 220px;
	 padding: 0 20px 15px;
 }
 .product4{
	 width: 949px;
	 height: 218px;
   padding: 15px 19px 0;
   border-left: 1px dotted #a3a3a3;
 }
 .product4 .product-item{
    width: 220px;
    height: 160px;
    margin-right: 10px
 }
 .travel-word{
	 font-size: 12px;
	 color: #666;
 }
 .travel-img{
	 width: 220px;
	 height: 160px;
	 
 }
</style>

