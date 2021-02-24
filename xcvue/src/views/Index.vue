  
<template>
<!-- 旅游模块 -->

<div class="Index">
<rotationChart></rotationChart>
   <div class="mod-tmh" >
    <!-- 热门模块 -->
    <!-- 第一行选项卡 -->
      <div>
      <ul class="current">
        <!-- 对一级分类进行遍历，并绑定查询二级分类的方法 -->
        <li v-for="(obj, i) in category " :key="i"  @click="selectSubCategory(obj.id)">
          <a href="#">{{ obj.name }}</a>
        </li>
      </ul>
    </div>
    <!-- 热门关联div -->
    <div class="tab-pane active" v-if="flag1==1">
      <div class="product">
        <!-- 上面的导航 -->
        <div>
          <ul class="inner-tabs-nav">
            <!-- 遍历二级分类信息，并绑定查询商品的方法 -->
            <li v-for="(obj, i) in subCategory" :key="i" @click="selectProduct(obj.parentId,obj.id)">
              <a href="#" class="">{{ obj.name }}</a>
            </li>
          </ul>
        </div>
        <!-- 下面的图片显示 -->
        <div class="inner-tab-panel">
          <!-- 左边图片 -->
          <div class="inner-tab-scroll-list">
            <!-- 遍历商品信息 -->
            <div class="item-thumbnailqq" v-for="(obj, i) in products" :key="i">
              <img :src="obj.productImg" alt="" class="w-100">
            </div>
          </div>
          <!-- 右边图片 -->
          <div class="extra-item">
            <img src="img/index/re1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    
   
    
    <!-- 周边游模块 -->
    <div class="tab-pane" v-else>
						<!-- 外层大div -->
						<div class="mod-bd-panel">
							<!-- 左侧div -->
							<div class="entrance">
								<div class="mb-1 top-wid">
									<dt>热门主题游</dt>
									<span class="entrance-item border-0 pl-0" v-for="(p,i) in themeReavel" :key="i"><a href="#">{{p.name}}</a></span>
									
								</div>
								<div class="bottom-wid">
									<dt>热门目的地</dt>
				         <span class="entrance-item border-0 pl-0" v-for="(p,i) in themeReavelAddress" :key="i"><a href="#">{{p.name}}</a></span>
									
								</div>
							</div> 
							<!-- 右侧div -->
							<div class="product1">
								<!-- 上面的导航 -->
								<div class="product-item mb-2">
									<ul class="d-flex list-unstyled mt-1 mr-3">
										<li class="active" v-for="(m, i) in subCategory" :key="i" @click="selectProduct(m.parentId,m.id)" ><a href="#">{{m.name}}</a></li>
										
									</ul>
								</div> 
								<!-- 下面的图片 -->
								<div class="product-bd">
									<div class="putuo yangshi yangshi2" v-for="(obj, i) in products" :key="i">
										<a href="#">
											<div class="item-thumbnail mr-2" ><img :src="obj.productImg"></div>
											<p class="item-name mb-0 mt-0">{{obj.productName}}</p>
											<p class="item-info mt-0 mb-0">
												<span class="price">
													<dfn>￥</dfn>
													{{obj.price}}
													<i class="price-info">起</i>
												</span>
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>	
  </div>
  <hotel></hotel>
  <ticket></ticket>
  <hirecar></hirecar>
  <enjoy></enjoy>
  <global></global>
  <flagShip></flagShip>
  <travelService></travelService>
  <company></company>
  <partners></partners>
  <Footer></Footer>
</div>
 
</template>
<script>
import rotationChart from '../components/rotationChart';
import Hotel from '../components/Hotel';
import Ticket from '../views/Ticket';
import Hirecar from '../views/Hirecar';
import Enjoy from '../views/Enjoy';
import Global from '../views/Global';
import flagShip from '../views/flagShip';
import travelService from '../views/travelService';
import Company from '../views/Company';
import Partners from '../views/Partners';
import Footer from '../views/Footer';
export default {
  data() {
    return {
      category: [], //第一级分类数组
      subCategory: [], //二级分类数组
      products: [], //商品数组
      themeReavel:[],
      themeReavelAddress:[],
      flag1 : 1 //控制页面显示
    };
  },
  mounted() {
      // 初始化页面
      this.selectCategory();  
  },    
  methods: {
    // 先定义方法，获取服务器数据
    // 定义变量，存储服务器发来数据
    // Html绑定变量数据
    // 页面需要一个初始化方法，来盘活整个页面

    //查询服务器一级分类信息
    selectCategory(){
      let url = "/category?level=1&type=1"
      this.axios.get(url).then((res)=>{
          // console.log(res)
          this.category = res.data

          //获取服务器二级分类信息，默认请求第一个选项数据
          this.selectSubCategory(this.category[0].id);// Category 第 0个元素相当于热门信息，Category的ID相当于SubCategory的ParentId
      })
    },
    selectSubCategory(parentId){
      if(this.category[0].id==parentId){
        this.flag1=1
      }else if(this.category[this.category.length-1].id==parentId){
        this.$router.push({path:'/hotel'});
      }else{
        this.flag1=0;
        this.themereavel(parentId);
        this.themeReaveladdress(parentId);
      }
       let url = "/category?level=2&parentId=" +parentId;
       this.axios.get(url).then((res)=>{
          // console.log(res)
          this.subCategory = res.data
          // 获取分类下的所有商品信息
          this.selectProduct(this.subCategory[0].parentId,this.subCategory[0].id)// subCategory的ParentID相当于一级分类Id，subCategory的ID相当于二级分类ID
      })
      
    },
    // 通过一级分类ID+二级分类ID获取商品信息
    selectProduct(categoryId,subCategoryId){
      let url = "/product?category=" +categoryId;

      if(subCategoryId !='' && subCategoryId != undefined && subCategoryId !='undefined'){
        //多参数传递 使用 &  符号
        url = url+ "&subCategory="+subCategoryId
      }
       this.axios.get(url).then((res)=>{
          this.products = res.data
      })

    },
    themereavel(parentId){
      this.axios.get("/themeReavel?parentId="+parentId).then((res)=>{
        this.themeReavel=res.data;
      })
    },
    themeReaveladdress(parentId){
      this.axios.get("/themeReavelAddress?parentId="+parentId).then((res)=>{
        this. themeReavelAddress=res.data;
      })
    },
  },
  components:{rotationChart,Hotel,Ticket,Hirecar,Enjoy,Global,flagShip,travelService,Company,Partners,Footer}
 
}
</script>
<style>
.mod-tmh {
  width: 1180px;
  margin: 0 auto;
}
.current {
  list-style: none;
  display: flex;
  margin-bottom: 2px;
  margin-top: 30px;
  padding-left: 0;
}
.current > li {
  margin-right: 30px;
}
a {
  text-decoration: none;
}
.tab-pane {
  width: 1180px;
  height: 391px;
  border: 1px solid #e0e0e0;
  border-top: 2px solid #3983e5;
  margin: 0 auto;
}
/* 热门 */
.tab-pane > .product {
  position: relative;
  height: 390px;
  padding: 15px 19px 0;
  border-left: 1px dotted #a3a3a3;
  margin: 0 auto;
}

.inner-tabs-nav {
  width: 1140px;
  height: 20px;
  display: flex;
  padding-left: 0;
  margin-bottom: 10px;
  list-style: none;
}
.inner-tabs-nav > li {
  display: inline-block;
  font-size: 12px;
  padding: 0 8px;
  margin-right: 15px;
}
.inner-tab-panel {
  display: flex;
  width: 1140px;
  height: 330px;
}

.inner-tab-panel > .inner-tab-scroll-list {
  display: flex;
  width: 920px;
  height: 330px;
  flex-wrap: wrap;
  
}

.inner-tab-scroll-list >  .item-thumbnailqq {
  width: 240px;
  height: 160px;
  margin-bottom: 8px;
  margin-right: 8px;
}
.item-thumbnailqq img {
  width: 100%;
  height: 100%;
}
.extra-item {
  width: 220px;
  height: 330ox;
}
.extra-item > img {
  width: 100%;
}
.tab-pane>.mod-bd-panel{
	display: flex;
	width: 100%;
	height: 390px;
}

.entrance{
	width: 227px;
	height: 375px;
	padding: 0 20px 15px;
}
dt{
	  padding: 4px 0 0 0;
	  font: 700 14px/34px "Microsoft yahei";
}
.entrance-item{
	    float: left;
	    display: block;
	    border-left: 1px solid #ececec;
	    padding: 0 14px;
	    line-height: 18px;
	    height: 18px;
	    margin: 8px 0;
			font-size: 12px;
}
.entrance-item a{
  color: #666;;
}
.entrance>.top-wid{
	width: 187px;
	height: 102px;
}
.top-wid .extra{
	border-left:none
}
.bottom-wid .extra{
	border-left:none
}
.entrance>.bottom-wid{
	width: 187px;
	height: 134px;
}

.product1>.product-item{
	width: 910px;
	height: 20px;
}
.product-item>ul{
	margin-bottom: 10px;
}
.product-item a{
  font-size: 12px;
  text-decoration: none;
}
.product1 li{
			float: left;
			display: inline-block;
	     line-height: 20px;
	     margin-right: 15px;
	     padding: 0 8px;
}


.product1{
  width: 949px;
  height: 390px;
    padding: 15px 19px 0;
}
.product1 .product-bd{
	display: flex;
	width: 920px;
	height: 340px;
	margin-left: 3px;
}
.product-bd img{
	width: 100%;
}
.yangshi>a{
	display: inline-block;
	width: 230px;
	height: 168px;
}
.product-bd>.yangshi{
			overflow: hidden;
			float: left;
			margin: 0 0 10px 10px;
}
.product-bd>.yangshi2{
	margin-left: 0;
}
.yangshi .item-name{
	font-size: 12px;
	padding: 0 5px;
	white-space: nowrap;
	overflow: hidden;
  text-overflow: ellipsis;
}
.yangshi>.item-thumbnail{
	width: 220px;
	height: 110px;
}


/*  */
.product-bd{
	flex-wrap: wrap;
	margin-left: -10px;
}

.product-bd img{
	height: 110px;
}
.yangshi .item-info{
	 height: 35px;
	    text-align: right;
	    padding: 0 5px;
}
dfn{
	    vertical-align: 7px;
	    font: 12px/1.5 arial;
	    color: #666;
}
.item-info .price-info{
	    margin-left: 3px;
	    vertical-align: 2px;
	    font: 12px/1.5 "Microsoft yahei";
	    color: #666;
}
.item-info>.price{
	    position: relative;
	    float: right;
	    font: 22px/1.5 tahoma;
	    color: #f60;
}
.item-info>.diamond{
	position: absolute;
	    left:6px;
	    top: 144px;
	display: inline-block;
	width: 48px;
	height: 8px;
	background: url(../../public/imgs/index/un_index_20180209.png) no-repeat;
	background-position: 0 0;
}
.product-bd .anhui{
	position: relative;
}
</style>