<template>
  <div id="Hotel">
    
    <div class="mod-tmh" v-if="flag==1">
      <!-- 上层导航 -->
      <div>
        <ul class="current">
          <li v-for="(p,i) in hotel" :key="i"><a href="#" @click="subCategory(p.id)">{{p.name}}</a></li>
        </ul>
      </div>
      <!-- 下面的内容区域 -->
      <div class="tab-pane d-flex">
        <!-- 左侧的文字 -->
        <div class="entrance1">
          <dt class="mb-2 mt-2">促销</dt>
          <div>
            <p class="mb-3" v-for="(p,salesIndex) of sales" :key="salesIndex"><a href="#">{{p.name}}</a></p>
          </div>

          <dt class="mt-2 mb-2">发现酒店</dt>
          <div>
          <p class="mb-3 mt-2" v-for="(discoverObj,discoverIndex) of this.discover" :key="discoverIndex"><a href="#" class="entrance-item1">{{discoverObj.name}}</a></p>
          </div>
        </div>
        <!-- 右侧div -->
        <div class="product1">
          <!-- 上面的导航 -->
          <div class="product-item mb-2">
            <ul class="d-flex list-unstyled">
              <li class="active pl-2 pr-2" v-for="(p,hindex) in hotelChild" :key="hindex" @click="selectProduct(p.parentId,p.id)"><a href="#">{{p.name}}</a></li>
            </ul>
          </div>
          <!-- 下面的图片 -->
          <div class="product-hotel">
            <!-- 左边图片 -->
            <div class="left-pic" v-for="(p,pindex) of Product" :key="pindex">
              <div class="pic-list" ><img :src="p.productImg" /></div>
            </div>
            <!-- 右边的图片 -->
            <div class="right-pic"><img src="../../public/imgs/index/re1.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 海外民宿+短租 -->
    <div class="mod-tmh" v-else-if="flag==2">
       <div>
        <ul class="current">
          <li v-for="(p,hotelIndex) in hotel" :key="hotelIndex"><a href="#" @click="subCategory(p.id)">{{p.name}}</a></li>
        </ul>
      </div>
      <div class="tupian d-flex" >
        <div class="left-mode">
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_1.jpg" alt=""></div>
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_2.jpg" alt=""></div>
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_3.jpg" alt=""></div>
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_4.jpg" alt=""></div>
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_5.jpg" alt=""></div>
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_6.jpg" alt=""></div>
        </div>
        <div class="d-flex">
          <!-- 大-->
          <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/pic_rec09_ctriphome.jpg" alt=""></div>
          <!-- 小 -->
          <div class="right-mode">
            <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_7.jpg" alt=""></div>
            <div><img src="//pic.c-ctrip.com/htlpic/inn/pic/ctriphome/pic_220_160_7.jpg" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <div class="mod-tmh">
        <ul class="current">
          <li v-for="(p,hotelIndex2) in hotel" :key="hotelIndex2"><a href="#" @click="subCategory(p.id)">{{p.name}}</a></li>
        </ul>
      </div>
      <!-- 国内酒店 -->
    <div class="tab-pane">
						<!-- 外层大div -->
						<div class="mod-bd-panel">
							<!-- 左侧div -->
							<div class="entrance">
								<div class="mb-1 top-wid">
									<dt>热门地标周边酒店</dt>
									<span class="entrance-item border-0 pl-0"><a href="#">还没想好周末去哪玩？</a></span>
									
								</div>
								<div class="bottom-wid">
									<dt>促销</dt>
				         <span class="entrance-item border-0 pl-0" ><a href="#">全国火车站周边酒店8折起</a></span>
									<span class="entrance-item border-0 pl-0" ><a href="#">全国机场周边酒店8折起</a></span>
                  <span class="entrance-item border-0 pl-0"><a href="#">百城千店 优选酒店80元起</a></span>
								</div>
							</div> 
							<!-- 右侧div -->
							<div class="product1">
								<!-- 上面的导航 -->
								<div class="product-item mb-2">
									<ul class="d-flex list-unstyled mt-1 mr-3">
										<li class="active" v-for="(m, childIndex) in hotelChild" :key="childIndex" @click="selectProduct(m.parentId)" ><a href="#">{{m.name}}</a></li>
										
									</ul>
								</div> 
								<!-- 下面的图片 -->
								<div class="product-bd">
									<div class="putuo yangshi yangshi2" v-for="(obj, productIndex) in Product" :key="productIndex">
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
  </div>
</template>
<script>
export default {
  name:'Hotel',
  data() {
    return {
      hotel: [],
      hotelChild: [],
      Product: [],
      sales: [],
      discover: [],
      flag: 1,
    };
  },
  mounted() {
    this.category();
  },
  methods: {
    //一级分类
    category() {
      let url = "/category?level=1&type=2";
      this.axios.get(url).then((res) => {
        this.hotel = res.data;
        this.subCategory(this.hotel[0].id);
      });
    },
    //二级分类
    subCategory(parentId) {
      if (this.hotel[0].id == parentId) {
        this.flag = 1;
        this.bottomDiscover(parentId);
      } else if (this.hotel[2].id == parentId) {
        this.flag = 0;
      } else {
        this.flag = 2;
      }
      let url = `/category?level=2&parentId=${parentId}`;
      this.axios.get(url).then((res) => {
        if (res.data.length > 0) {
          this.hotelChild = res.data;
        }

        let subId = this.hotelChild.length > 0 ? this.hotelChild[0].id : "";
        this.selectProduct(parentId, subId);
        this.topSales(parentId);
      });
    },
    //三级商品分类
    selectProduct(category, subCategory) {
      let url = `/product?category=${category}&subCategory=${subCategory}`;
      this.axios.get(url).then((res) => {
        this.Product = res.data;
      });
    },
    //左侧的文字
    topSales(parentId) {
      if (parentId === undefined) {
        return;
      }
      this.axios.get(`/sales?parentId=${parentId}`).then((res) => {
        this.sales = res.data;
      });
    },
    bottomDiscover(parentId) {
      if (parentId === undefined) {
        return;
      }
      this.axios.get(`/discover?parentId=${parentId}`).then((res) => {
        if (res.data.length > 0) {
          this.discover = res.data;
        }
      });
    },
  },
};
</script>
<style scoped>
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
.entrance1 {
  width: 227px;
  height: 375px;
  padding: 0 20px 15px;
}
.product-hotel {
  display: flex;
}
.left-pic {
  display: flex;
  flex-wrap: wrap;
}
.left-pic > .pic-list {
  width: 220px;
  height: 160px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.left-pic > .pic-list img {
  width: 100%;
  height: 100%;
}
.right-pic {
  width: 220px;
  height: 330px;
}
.product1 {
  width: 949px;
  height: 390px;
  padding: 15px 19px 0;
  border-left: 1px dotted #a3a3a3;
}
.product1 a {
  font-size: 12px;
}
.entrance-item1 {
  display: block;
  width: 187px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.entrance1 a {
  font-size: 12px;
  text-decoration: none;
  color: #666;
}
/*海外民宿部分*/

.tupian {
  padding: 40px 19px 15px;
  border: 1px solid #e0e0e0;
  border-top: 2px solid #3983e5;
  height: 390px;
}
.left-mode {
  display: flex;
  flex-wrap: wrap;
  width: 740px;
}
.left-mode img {
  width: 220px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.right-mode img {
  width: 220px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.tab-pane > .mod-bd-panel {
  display: flex;
  width: 100%;
  height: 390px;
}

.entrance {
  width: 227px;
  height: 375px;
  padding: 0 20px 15px;
}
dt {
  padding: 4px 0 0 0;
  font: 700 14px/34px "Microsoft yahei";
}
.entrance-item {
  float: left;
  display: block;
  border-left: 1px solid #ececec;
  padding: 0 14px;
  line-height: 18px;
  height: 18px;
  margin: 8px 0;
  font-size: 12px;
}
.entrance-item a {
  color: #666;
}
.entrance > .top-wid {
  width: 187px;
  height: 102px;
}
.top-wid .extra {
  border-left: none;
}
.bottom-wid .extra {
  border-left: none;
}
.entrance > .bottom-wid {
  width: 187px;
  height: 134px;
}

.product1 > .product-item {
  width: 910px;
  height: 20px;
}
.product-item > ul {
  margin-bottom: 10px;
}
.product-item a {
  font-size: 12px;
  text-decoration: none;
}
.product1 li {
  float: left;
  display: inline-block;
  line-height: 20px;
  margin-right: 15px;
  padding: 0 8px;
}

.product1 {
  width: 949px;
  height: 390px;
  padding: 15px 19px 0;
}
.product1 .product-bd {
  display: flex;
  width: 920px;
  height: 340px;
  margin-left: 3px;
}
.product-bd img {
  width: 100%;
}
.yangshi > a {
  display: inline-block;
  width: 230px;
  height: 168px;
}
.product-bd > .yangshi {
  overflow: hidden;
  float: left;
  margin: 0 0 10px 10px;
}
.product-bd > .yangshi2 {
  margin-left: 0;
}
.yangshi .item-name {
  font-size: 12px;
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.yangshi > .item-thumbnail {
  width: 220px;
  height: 110px;
}

/*  */
.product-bd {
  flex-wrap: wrap;
  margin-left: -10px;
}

.product-bd img {
  height: 110px;
}
.yangshi .item-info {
  height: 35px;
  text-align: right;
  padding: 0 5px;
}
dfn {
  vertical-align: 7px;
  font: 12px/1.5 arial;
  color: #666;
}
.item-info .price-info {
  margin-left: 3px;
  vertical-align: 2px;
  font: 12px/1.5 "Microsoft yahei";
  color: #666;
}
.item-info > .price {
  position: relative;
  float: right;
  font: 22px/1.5 tahoma;
  color: #f60;
}
.item-info > .diamond {
  position: absolute;
  left: 6px;
  top: 144px;
  display: inline-block;
  width: 48px;
  height: 8px;
  background: url(../../public/imgs/index/un_index_20180209.png) no-repeat;
  background-position: 0 0;
}
.product-bd .anhui {
  position: relative;
}
</style>