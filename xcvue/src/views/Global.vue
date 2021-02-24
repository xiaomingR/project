<template>
  <div class="Global">
    <div class="mod-play">
		<!-- 上面导航-->
		<div>
			<ul class="current">
				<li @click="selectCategory"><a href="">全球购</a></li>
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
				<span class="entrance-item"><a href="#">吉普岛</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">台北</a></span>
				<span class="entrance-item "><a href="#">新加坡</a></span>
				<span class="entrance-item"><a href="#">东京</a></span>
				<span class="entrance-item"><a href="#">清迈</a></span>
				<span class="entrance-item border-0 pl-0 extra"><a href="#">吉隆坡</a></span>
				<span class="entrance-item"><a href="#">巴厘岛</a></span>
				
			</div>
			<!-- 右侧的图片 -->
			<div class="product4">
				<!-- 上面的导航 -->
				<div>
					<ul class="inner-tabs mt-2 mb-2 list-unstyled">
						<li v-for="(p,i) of category" :key="i" @click="selectProduct(p.parentId,p.id)"><a href="#">{{p.name}}</a></li>
						
					</ul>
				</div>
				<!-- 下面的图片 -->
					<div class="d-flex">
						<div class="product-item p-0" v-for="(p,i) of product" :key="i">
							<a href="#">
								<div class="picture"><img :src="p.productImg" class="w-100"></div>
								<p class="p-0 m-0 driver">{{p.productName}}</p>
								<p class="p-0 m-0">
									<span class="country">{{p.theme}}</span>
									<span class="sales">
										<a href="#" class="border border-primary text-primary pl-1 pr-1 ml-5 sales">促销</a>
										<a href="#" class="border border-danger text-danger pl-1 pr-1 sales">返现</a>
									</span>
								</p>
							</a>
						</div>
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
      category:[],
      product:[]
    }
  },
  mounted(){
    this.selectCategory();
  },
  methods:{
    selectCategory(){
      this.axios.get('/category?level=2&parentId=22').then(res=>{
        this.category=res.data;
      })
    },
    selectProduct(category,subCategory){
      console.log(category,subCategory)
      this.axios.get(`/global?category=${category}&subCategory=${subCategory}`).then(res=>{
        this.product=res.data;
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
 .sales{
   display: inline-block;
	 font-size: 12px;
   margin-top:5px
 }
 .picture{
   width:220px;
   height: 110px;
   margin-right: 10px
 }

</style>

