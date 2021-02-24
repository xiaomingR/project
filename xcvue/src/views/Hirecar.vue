<template>
  <!-- 第四个租车 -->
	<div class="mod-car">
		<!-- 上面的导航栏 -->
		<div >
			<ul class="current">
				<li v-for="(p,i) of car" :key="i" @click="selectCity(p.id)"><a href="#">{{p.name}}</a></li>
				
			</ul>
		</div>
		<!-- 下面的内容区 -->
		<div class="car d-flex">
			<!-- 左边的文字 -->
			<div class="entrance2">
				<dt>热门城市</dt>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">香港</a></span>
				<span class="entrance-item"><a href="#">曼谷</a></span>
				<span class="entrance-item"><a href="#">首尔</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">吉普岛</a></span>
				<span class="entrance-item"><a href="#">台北</a></span>
				<span class="entrance-item "><a href="#">新加坡</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">东京</a></span>
				<span class="entrance-item"><a href="#">清迈</a></span>
				<span class="entrance-item"><a href="#">吉隆坡</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">巴厘岛</a></span>
			</div>
			<!-- 右边的图片 -->
			<div class="product3">
				<!-- 上面的导航栏 -->
				<div>
					<ul class="inner-tabs mb-1 list-unstyled">
						<li v-for="(p,i) of city" :key="i" @click="selectProduct(p.parentId,p.id)"><a href="">{{p.name}}</a></li>
					</ul>
				</div>
				<!-- 下面的图片 -->
				<div class="d-flex">
					<div class="col-3 p-0" v-for="(p,i) of products" :key="i">
						<a href="#">
							<div><img :src="p.productImg" class="w-100"></div>
							<p class="p-0 m-0 driver">{{p.productName}}</p>
							<p class="p-0 m-0">
								<span class="country">{{p.viewpoint}}</span>
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
      car:[],
      city:[],
      products:[]
    }
  },
  mounted(){
    this.category();
  },
  methods:{
    category(){
      this.axios.get("/category?level=1&type=4").then(res=>{
        this.car=res.data;
        this.selectCity(this.car[0].id)
      })
    },
 
    selectCity(parentId){
      this.axios.get("/category?level=2&parentId="+parentId).then(res=>{
        this.city=res.data;
        this.selectProduct(this.city[0].parentId,this.city[0].id)
      })
    },
    selectProduct(category,subCategory){
       let url="/product?category="+category
			url+="&subCategory="+subCategory
        this.axios.get(url).then(res=>{
          this.products=res.data;
        })
    }
   }
  
}
</script>
<style>
  /* 第四个租车模块 */
.mod-car{
	width: 1180px;
	height: 299px;
	margin: 0 auto;
}
 .current{
	list-style: none;
	display: flex;
	margin-bottom: 2px;
	margin-top: 30px;
	padding-left: 0;	
}
.car{
		width: 1178px;
		height: 260px;
		border: 1px solid #E0E0E0;
		border-top: 2px solid #3983E5;
	
}
.entrance2{
	width: 227px;
	height: 260px;
	padding: 0 20px 15px;
}
.product3{
	width: 949px;
	height: 260px;
	padding: 15px 19px 0;
	border-left: 1px dotted #a3a3a3;
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

.driver{
	font-size: 12px;
	display: block;
	width: 237px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.country{
	font-size: 12px;
}
</style>
