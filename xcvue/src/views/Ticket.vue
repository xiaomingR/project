<template>
    <div class="Ticket">
        <div class="mod-flightC">
				<!-- 上面的导航 -->
				<div>
					<ul class="current">
						<li v-for="(p,i) of roundTrip" :key="i" @click="categoryPlace(p.id)"><a href="#">{{p.name}}</a></li>
					</ul>
				</div>
				<!-- 下面的内容 -->
				<div class="flight">
					<!-- 上面的导航 -->
					<div class="product-item mb-2">
						<ul class="inner-tabs-nav">
							<li class="active pl-2 pr-2" v-for="(p,i) of place" :key="i" @click="hotProduct(p.parentId,p.id)"><a href="#">{{p.name}}</a></li>
						</ul>
					</div>
					<!-- 下面的车票 -->
					<div class="inner-tab-panel active d-flex flex-wrap">
						<div class="ticket" v-for="(p,i) of product" :key="i">
							<a href="#" class="chepiao">
								<span class="qishidi">{{p.start}}</span>
								<i class="icon ml-1 mr-1"></i>
								<span class="mudidi">{{p.destination}}</span>
								<p class="fdate mb-2 mt-2">{{p.date}}</p>
								<dfn>¥</dfn>
								<span class="price">{{p.price}}</span>
								<i class="price-info">起</i>
								<a href="#" class="rob ">立抢</a>
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
            roundTrip:[],
            place:[],
			tickets:[],
			product:[]
        }
    },
    mounted(){
        this.selectCategory();
    },
    methods:{
		//获取一级标题
        selectCategory(){
            let url=`/category?type=3&level=1`
            this.axios.get(url).then(res=>{
				 this.roundTrip = res.data
				 this.categoryPlace(this.roundTrip[0].id);
            })
        },
		//获取二级分类信息
		categoryPlace(parentId){
			let url="/category?level=2&parentId="+parentId;
			this.axios.get(url).then((res)=>{
				this.place=res.data;
				this.hotProduct(this.place[0].parentId,this.place[0].id)
			})
		},
		//获取三级分类商品的信息
		hotProduct(category,subCategory){
			// let url=`/ticket?categoryId=${categoryId}&subCategory=${subCategory}`
			let url="/ticket?category="+category
			url+="&subCategory="+subCategory
			this.axios.get(url).then((res)=>{
				this.product=res.data;
			})
		}
        
    }
    
}
</script>
<style scoped>
    .mod-flightC{
	width: 1180px;
	height: 437px;
	margin: 28px auto 0;
}
.current{
	list-style: none;
	display: flex;
	margin-bottom: 2px;
	margin-top: 30px;
	padding-left: 0;
	
}
.flight{
	width: 1178px;
	height: 398px;
	padding: 15px 19px 0;
	border: 1px solid #E0E0E0;
	border-top: 2px solid #3983E5;
}
.product-item{
	width: 910px;
	height: 20px;
}
.inner-tabs-nav{
	width: 1140px;
	height: 20px;
	display: flex;
	padding-left:0;
	margin-bottom: 10px;
	list-style: none;
}
.inner-tabs-nav>li{
	display: inline-block;
	font-size: 12px;
	padding: 0 8px;
	margin-right:15px;
	
}
.inner-tab-panel{
	width: 1150px;
	height: 353px;
}
.ticket{
	    width: 220px;
	    height: 106px;
	    padding: 15px 12px;
	    background: #f8f8f8;
	    border: 1px solid #f8f8f8;
	    cursor: pointer;
			margin: 0 10px 10px 0;
}
.chepiao{
	position: relative;
}
.ticket .qishidi{
	font-size: 12px;
	color: #000000;
}
.ticket .mudidi{
	font-size: 12px;
	color: #000000;
}
.ticket a{
    text-decoration: none;
}
.inner-tab-panel .icon{
	display: inline-block;
	width: 12px;
	height: 7px;
	background-position: -1px -116px;
	background-image: url(../../public/imgs/index/flight.png);
}
.fdate{
	color: #999;
	font-size:12px;
}
.price{
	
	font: 22px/1.5 tahoma;
	color: #f60;
}
.price-info{
	    margin-left: 3px;
	    vertical-align: 2px;
	    font: 12px/1.5 "Microsoft yahei";
	    color: #666;
}
.rob{
	/* display: inline-block; */
	position: absolute;
	left: 130px;
	bottom:-1;
	    width: 60px;
	    height: 27px;
	    padding: 0 15px;
	    font: 14px/27px "Microsoft yahei";
	    
	    background-color: #f7ab01;
			color: white;
			border-radius:4px;
			/* margin-left: 50px; */
}
</style>