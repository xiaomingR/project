<template>
  <div class="Partners">
    <!-- 上面的div -->
    <div class="mod-hd">
      <p>合作伙伴</p>
      <ul class="mt-3 d-flex">
        <li><a href="#" class="partner_hh"></a></li>
         <li><a href="#" class="partner_lp"></a></li>
         <li><a href="#" class="partner_sg"></a></li>
         <li><a href="#" class="partner_tj"></a></li>
         <li><a href="#" class="partner_ya"></a></li>
         <li><a href="#" class="partner_yy"></a></li>
      </ul>
    </div>
    <!-- 下面的div -->
    <div class="mod-bd">
      <!-- 一楼 -->
      <div class="first">
        <ul class="wc">
          <li v-for="(p,index) of Father" :key="index" class="part1 ">
            <div style="width: 80px;
    float: left;">
                {{p.name}}
            </div>
            <div>
              <ul class="wd">
                <li v-for="(p1,index1) of p.childs" :key="index1" class="aaa">
                  <a href="#" class="part2">{{p1.name}}</a>
                </li>
               </ul>
            </div>
            
          </li>
        </ul>
      </div>
      
    </div>
    
  </div>
</template>
<script>

export default {
  data(){
    return{
      Father:[],
      
    }
  },
  mounted() {
    this.selectFather();
  },
  methods: {
    selectFather(){
      this.axios.get('/Footer').then(res=>{
       this.Father =res.data;
      })
    }
  },

}
</script>
<style>
.Partners{
    width: 1180px;
    margin: 28px auto 0;
}
.Partners .mod-hd{
      height: 98px;
    border: 1px solid #e0e0e0;
    padding: 0;
    background: #fff;
    padding: 10px 19px 0 20px;
}
.mod-hd a{ 
  display: inline-block;
  width: 76px;
  height: 0;
  padding-top: 28px;
  
}
.Partners .partner_hh{
  background-position: 0 0;
  background-image: url(../../public/imgs/footer/pic_partner.png);
  background-repeat: no-repeat;
}
.Partners .partner_lp{
  background-position: 0 -33px;
  background-image: url(../../public/imgs/footer/pic_partner.png);
  background-repeat: no-repeat;
}
.Partners .partner_sg{
  background-position: 0 -66px;
  background-image: url(../../public/imgs/footer/pic_partner.png);
  background-repeat: no-repeat;
}
.Partners .partner_tj{
  background-position: 0 -99px;
  background-image: url(../../public/imgs/footer/pic_partner.png);
  background-repeat: no-repeat;
}
.Partners .partner_ya{
  background-position: 0 -132px;
  background-image: url(../../public/imgs/footer/pic_partner.png);
  background-repeat: no-repeat;
}
.Partners .partner_yy{
  background-position: 0 -165px;
  background-image: url(../../public/imgs/footer/pic_partner.png);
  background-repeat: no-repeat;
}
.mod-hd li{
  width:190px;
  height: 35px;
  text-align: center
}
.mod-hd li:not(:first-child){
  border-left: 1px dashed #e0e0e0;
}
.mod-bd{
  width: 1180px;
  height: 260px;
  padding: 10px 15px;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  background: #fff;
}
.part1{
  display: inline-block;
  width: 1163px;
  height: 40px;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  
  padding-top: 5px;
  padding-bottom: 8px;
  margin-bottom:8px;
 
}
.part1+.part1{
  
  height: 30px;
  line-height: 23px;
  border-top: 1px dotted #ccc;
}
.part2{
  display: inline-block;
  color: #b6b6b6;
  font-size:12px;
  margin-right:10px;
  width: 80px;
  
}

.wc{
 float:left;
 
}
.wd{
  width: 93%;
   float:left;
}
.aaa{

  display: inline-block;
  margin-bottom: 10px;
  /* margin-top: 5px; */
}

</style>
