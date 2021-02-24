<template>
  <!-- 第五个当地玩乐 -->
	<div class="mod-play">
		<!-- 上面导航-->
		<div>
			<ul class="current">
				<li><a href="#" v-for="(p,i) of hotPlace" :key="i" @click="selectSubcategory(p.id)">{{p.name}}</a></li>

			</ul>
		</div>
		<!-- 下面的内容 -->
		<div class="play d-flex">
			<!-- 左侧的文字 -->
			<div class="entrance3">
				<dt>热门目的地</dt>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">香港</a></span>
				<span class="entrance-item"><a href="#">曼谷</a></span>
				<span class="entrance-item"><a href="#">首尔</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">吉普岛</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">台北</a></span>
				<span class="entrance-item "><a href="#">新加坡</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">东京</a></span>
				<span class="entrance-item"><a href="#">清迈</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">吉隆坡</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">巴厘岛</a></span>
				
			</div>
			<!-- 右侧的图片 -->
			<div class="product4">
				<!-- 上面的导航 -->
				<div>
					<ul class="inner-tabs mt-2 mb-2 list-unstyled">
						<li v-for="(p,i) of local" :key="i"><a href="" @click="selectProduct(p.parentId,p.id)">{{p.name}}</a></li>
					
					</ul>
				</div>
				<!-- 下面的图片 -->
					<div class="d-flex">
						<div class="col-3 p-0" v-for="(p,i) of product" :key="i">
							<a href="#">
								<div><img :src="p.productImg" class="w-100"></div>
								<p class="p-0 m-0 driver">{{p.productName}}</p>
								<p class="p-0 m-0">
									<span class="country">{{p.theme}}</span>
									<dfn>¥</dfn>
									<span class="price">{{p.price}}</span>
									<i class="price-info">起</i>
								</p>
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
      hotPlace:[],
      local:[],
      product:[]
    }
  },
  mounted(){
    this.selectHotplace();
  },
  methods:{
    selectHotplace(){
      this.axios.get("/category?level=1&type=5").then(res=>{
        this.hotPlace=res.data;
        this.selectSubcategory(this.hotPlace[0].id)
      })
    },
    selectSubcategory(parentId){
       this.axios.get("/category?level=2&parentId="+parentId).then(res=>{
        this.local=res.data;
        this.selectProduct(this.local[0].parentId,this.local[0].id)
      })
    },
    selectProduct(category,subCategory){
       let url="/enjoy?category="+category
			url+="&subCategory="+subCategory
        this.axios.get(url).then(res=>{
          this.product=res.data;
        })
    }
  }
}
</script>
<style scoped>
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
.current  a {
  display: inline-block;
  margin-right: 30px;
}
 .entrance3{
	 width: 227px;
	 height: 220px;
	 padding: 0 20px 15px;
 }
 .product4{
	 width: 949px;
	 height: 220px;
 }
 .inner-tabs{
	width: 910px;
	height: 20px;

}

.inner-tabs li{
	display: inline-block;
	font-size: 12px;
	padding: 4px 8px;
	margin-right:15px;
	border-radius: 3px;
}
</style>
