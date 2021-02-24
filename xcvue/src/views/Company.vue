<template>
  <div class="Company">
    <div class="mb-1">
      <p class="title"><a href="javascript:;">企业商旅</a></p>
    </div>
    <div class="supply-hd d-flex">
      <!-- 左侧的div -->
      <a href="#">
        <div class="d-flex">
          <div class="mt-3 ml-4 mr-3">
            <span class="img-shopping"><i></i></span>
          </div>
          <div class="mt-3 mr-3">
            <p class="supply-title mb-1">差旅预订管理</p>
            <p class="supply-intro">海量差旅产品，全流程服务，智能管控，助力企业差旅降本提效</p>
          </div>
        </div>
      </a>
      
      <!-- 中间的div -->
      <a href="#">
        <div class="d-flex">
          <div class="mt-3 ml-4 mr-3">
            <span class="img-dianzi"><i></i></span>
          </div>
          <div class="mt-3 mr-3">
            <p class="supply-title">公对公结算</p>
            <p class="supply-intro">公司账户支付，自助队长，统一开票，配送，员工出差垫资，免报销</p>
          </div>
        </div>
      </a>
      <!-- 右边的div -->
      <a href="#">
        <div class="d-flex">
          <div class="mt-3 ml-4 mr-3">
            <span class="img-charts"><i></i></span>
          </div>
          <div class="mt-3 mr-3">
            <p class="supply-title">在线差旅报告</p>
            <p class="supply-intro">多维度差旅报告，量化管控差旅费用，商旅大数据指导企业优化差旅政策！</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.Company{
  width: 1180px;
  height: 167px;
  margin: 0 auto;
}
.Company .supply-hd{
  border-top: 2px solid #3983E5;
}
.supply-hd a{
  width: 386px;
  height: 117px;
  border: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  margin-top:10px;
  text-decoration: none
}
.supply-hd a:not(:first-child){
  display: inline-block;
  margin-left:10px;
}
.img-shopping{
  position: relative;
  display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #F8c2b3;
    
    
    
}
.img-shopping i{
  position: absolute;
  top: 25%;
  left: 18%;
  display: inline-block;
  width: 50px;
  height: 48px;
  background-position: 0 -140px;
  background-image: url(../../public/imgs/index/un_index_supply.png) ;
}
.img-dianzi{
  position: relative;
  display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #FBE09F;
}
.img-dianzi i{
  position: absolute;
  top:26%;
  left:17%;
  display: inline-block;
  width: 50px;
  height: 40px;
  background-position: 0 -190px;
  background-image: url(../../public/imgs/index/un_index_supply.png) ;

}
.img-charts{
  position: relative;
  display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #C3CBFF;
}
.img-charts i{
  position: absolute;
  top:20%;
  left:22%;
  display: inline-block;
  width: 50px;
  height: 50px;
  background-position: 0 -232px;
  background-image: url(../../public/imgs/index/un_index_supply.png) ;

}
.Company .supply-title{
  font: 16px/1.5 "Microsoft yahei";
  color: #333;
}
.Company .supply-intro{
  font-size:12px;
  color: #666;
  line-height: 20px;
}
.title>a{
      font: 16px/26px "Microsoft YaHei", "SimHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
}
</style>
