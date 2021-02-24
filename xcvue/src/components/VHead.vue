<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar-cont">
        <div class="slogan">让旅行更幸福</div>
        <div
          v-bind:class="{
            'language-current': style.languageStyle,
            language: !style.languageStyle,
          }"
          @mouseover="style.languageStyle = true"
          @mouseleave="style.languageStyle = false"
        >
          <span class="nav-bar-cont-span">
            <em class="icon-earth"></em>
            Language
            <em
              v-bind:class="{
                'icon-arrow-current': style.languageStyle,
                'icon-arrow': !style.languageStyle,
              }"
            ></em>
          </span>
          <div
            v-bind:class="{
              'country-show': style.languageStyle,
              country: !style.languageStyle,
            }"
          >
            菜单
          </div>
        </div>
        <div class="nav-bar-icon-set">
          <ul class="nav-bar-icon-set-ul">
            <li class="nav-bar-icon-set-ul-li">
              <a class="nav-bar-icon-set-ul-li-a nav-bar-icon-set-link">
                <span style="color: #0066cc" class="mr-3"
                  ><router-link to="/login" class="login"
                    >您好，请登录</router-link
                  ></span
                >
                <span
                  ><router-link to="/register" class="register"
                    >免费注册</router-link
                  ></span
                >
              </a>
            </li>
            <li class="nav-bar-icon-set-ul-li">
              <a class="nav-bar-icon-set-ul-li-a nav-bar-icon-set-link">
                <em class="icon-email"></em>
                <span style="padding-left: 4px">消息</span>
              </a>
            </li>
            <li
              class="nav-bar-icon-set-ul-li"
              v-bind:class="{ 'nav-bar-icon-set-li-current': style.xiecheng }"
              @mouseover="style.xiecheng = true"
              @mouseleave="style.xiecheng = false"
            >
              <a class="nav-bar-icon-set-ul-li-a nav-bar-icon-set-link">
                我的携程
                <em
                  v-bind:class="{
                    'icon-arrow-current': style.xiecheng,
                    'icon-arrow': !style.xiecheng,
                  }"
                  style="margin-left: 3px"
                ></em>
              </a>
              <ul class="my-xie-cheng" v-bind:class="{ show: style.xiecheng }">
                <li><span class="my-xie-cheng-span">我的收藏</span></li>
                <li><span class="my-xie-cheng-span">我的优惠券</span></li>
                <li><span class="my-xie-cheng-span">常用信息</span></li>
                <li><span class="my-xie-cheng-span">我的钱包</span></li>
              </ul>
            </li>

            <li
              class="nav-bar-icon-set-ul-li"
              :class="{ 'nav-bar-icon-set-li-current': style.showOrder }"
              @mouseover="style.showOrder = true"
              @mouseleave="style.showOrder = false"
            >
              <a class="nav-bar-icon-set-ul-li-a nav-bar-icon-set-link">
                我的订单
                <em
                  :class="{
                    'icon-arrow-current': style.showOrder,
                    'icon-arrow': !style.showOrder,
                  }"
                  style="margin-left: 3px"
                ></em>
              </a>
              <ul class="orderList" v-bind:class="{ show: style.showOrder }">
                <li><span class="orderList-span">酒店+相关机票</span></li>
                <li><span class="orderList-span">酒店订单</span></li>
                <li><span class="orderList-span">旅游订单</span></li>
                <li><span class="orderList-span">火车票订单</span></li>
                <li><span class="orderList-span">全部订单</span></li>
                <li><span class="orderList-span">手机号查订单</span></li>
              </ul>
            </li>

            <li class="nav-bar-icon-set-ul-li">
              <a class="nav-bar-icon-set-ul-li-a nav-bar-icon-set-link">
                <span>客服中心</span>
              </a>
            </li>

            <li
              class="nav-bar-icon-set-ul-li"
              style="width: 40px"
              v-bind:class="{ 'nav-bar-icon-set-li-current': style.mobile }"
              @mouseover="style.mobile = true"
              @mouseleave="style.mobile = false"
            >
              <a class="nav-bar-icon-set-ul-li-a"
                ><em class="icon-mobile"></em
              ></a>
              <div class="ctripQRCode" v-bind:class="{ show: style.mobile }">
                <img
                  src="https://pic.c-ctrip.com/platform/online/home/er_ctrip_app.jpg"
                  class="ctripQRCodeImg"
                />
                <p>手机扫码快速下载</p>
                <div>携程旅行手机版></div>
              </div>
            </li>
            <li
              class="nav-bar-icon-set-ul-li"
              style="width: 40px"
              v-bind:class="{ 'nav-bar-icon-set-li-current': style.wechat }"
              @mouseover="style.wechat = true"
              @mouseleave="style.wechat = false"
            >
              <a class="nav-bar-icon-set-ul-li-a"
                ><em class="icon-wechat"></em
              ></a>

              <div class="wechat" v-bind:class="{ show: style.wechat }">
                <img
                  src="https://pic.c-ctrip.com/platform/online/home/er_ctrip_app.jpg"
                  class="ctripQRCodeImg"
                />
                <p>扫一扫</p>
                <p>手机扫码快速下载</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 搜索、logo -->
    <div class="logo d-flex">
      <div>
        <img
          src="https://pic.c-ctrip.com/platform/online/login/c_logo2020.png"
          alt=""
          class=""
        />
      </div>
      <input
        type="text"
        placeholder="搜索旅行地/酒店/旅游/景点门票/交通"
      /><button></button>
      <div class="phoneNumber">
        <ul>
          <li>境内：95010</li>
          <li>（或）400-830-6666</li>
          <b></b>
          <li class="tel-list-more">香港（中国）：+ 852-3008-3295</li>
          <li class="tel-list-more">境外：+ 86-21-3406-4888</li>
        </ul>
      </div>
    </div>
    <!-- 导航 -->
    <div class="base_nav">
      <ul class="cui_nav_cui_content d-flex unliststyled">
        
        <li class="cui_finance_pc pl-0">
          <a href="#" class="navName">首页</a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a
            href="#"
            class="navName"
            @mouseover="style.menusShow = true"
            @mouseleave="style.menusShow = false"
            >酒店<i class="icon"></i></a>

            <div class="Menus" :class="{ show: style.menusShow == 1 }">
                <ul class="d-flex">
                    <li><a href="#" class="menusLink">国内酒店</a></li>
                    <li><a href="#" class="menusLink">海外酒店</a></li>
                    <li><a href="#" class="menusLink">民宿客栈</a></li>
                    <li><a href="#" class="menusLink border-right-0">海外民宿</a></li>
                </ul>
             </div>

        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a
            href="#"
            class="navName"
            @mouseover="style.menusShow = 1"
            @mouseleave="style.menusShow = -1"
            >旅游<i class="icon"></i
          ></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc"><a href="#" class="navName">自由行</a></li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">机票<i class="icon"></i></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc"><a href="#" class="navName">火车</a></li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">汽车·船<i class="icon"></i></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">用车<i class="icon"></i></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">门票<i class="icon"></i></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc"><a href="#" class="navName">攻略</a></li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <router-link to="/hotplace" class="navName"
            >全球购<i class="icon"></i
          ></router-link>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">礼品卡<i class="icon"></i></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">商旅<i class="icon"></i></a>
        </li>
        <li class="divider"></li>
        <li class="cui_finance_pc"><a href="#" class="navName">邮轮</a></li>
        <li class="divider"></li>
        <li class="cui_finance_pc"><a href="#" class="navName">目的地</a></li>
        <li class="divider"></li>
        <li class="cui_finance_pc"><a href="#" class="navName">金融</a></li>
        <li class="divider"></li>
        <li class="cui_finance_pc">
          <a href="#" class="navName">更多<i class="icon"></i></a>
        </li>
      </ul>
    </div>

    <!-- 下面的导航条 -->
    <!-- 第一行的导航栏 -->
    <!-- <div class="mb-2 mt-2"> -->
    <div class="subway_internal d-flex mt-2">
      <h2 class="title">境外直通车<i></i></h2>
      <ul class="d-flex list-unstyled line-list">
        <li><i class="cui-icon-hotel"></i><a href="#">海外酒店</a></li>
        <li><i class="cui-icon-flight"></i><a href="#">国际·港澳台机票</a></li>
        <li><i class="cui-icon-car"></i><a href="#">境外租车</a></li>
        <li><i class="cui-icon-train"></i><a href="#">国际/港台火车票</a></li>
        <li><i class="cui-icon-outboundtravel"></i><a href="#">出境游</a></li>
        <li><i class="cui-icon-HHtravel"></i><a href="#">高端游</a></li>
        <li><i class="cui-icon-ticket"></i><a href="#">门票·玩乐</a></li>
        <li><i class="cui-icon-visa"></i><a href="#">签证</a></li>
        <li><i class="cui-icon-insurance"></i><a href="#">保险</a></li>
        <li><i class="cui-icon-wifi"></i><a href="#">WiFi·电话卡</a></li>
        <li><i class="cui-icon-pickup"></i><a href="#">境外接送机</a></li>
        <li><i class="cui-icon-foreign"></i><a href="#">外币兑换</a></li>
      </ul>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      style: {
        languageStyle: false,
        showOrder: false,
        xiecheng: false,
        mobile: false,
        wechat: false,
        menusShow: false,
      },
    };
  },
  methods: {
    aa() {},
  },
};
</script>

<style scoped>
.nav-bar {
  font: 12px/1.5 "Microsoft YaHei";
  background-color: #f4f4f4;
}

.nav-bar-cont {
  margin: 0 auto;
  width: 1180px;
  height: 36px;
  position: relative;
}

.slogan {
  display: inline-block;
  line-height: 36px;
  color: #666;
}

.language {
  position: absolute;
  /*left: 114px;*/
  display: inline-block;
  line-height: 36px;
  color: #666;
  width: 107px;
  height: 100%;
  margin-left: 26px;
}
.login {
  color: #0066cc;
}
.login:hover {
  text-decoration: none;
}
.register {
  color: #666;
}

.nav-bar-cont-span {
  display: inline-block;
  margin: 0 auto;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  /*left: 42px;*/
}

.icon-earth {
  width: 14px;
  height: 14px;
  display: inline-block;
  background-image: url("https://pic.c-ctrip.com/platform/online/home/spirit20190918.png");
  background-position: -8px -8px;
  vertical-align: middle;
}

.icon-arrow {
  background-image: url("https://pic.c-ctrip.com/platform/online/home/spirit20190918.png");
  width: 8px;
  height: 5px;
  background-position: -8px -8px;
  vertical-align: middle;
  display: inline-block;
  background-position: -46px -58px;
}

.language-current {
  position: absolute;
  /*left: 114px;*/
  display: inline-block;
  line-height: 36px;
  color: #666;
  width: 107px;
  height: 100%;
  margin-left: 26px;
  cursor: default;
  background-color: #ffffff;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);

  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
}

.icon-arrow-current {
  background-image: url("https://pic.c-ctrip.com/platform/online/home/spirit20190918.png");
  width: 8px;
  height: 5px;
  background-position: -8px -8px;
  vertical-align: middle;
  display: inline-block;
  background-position: -46px -71px;
}

.nav-bar-icon-set {
  width: 586px;
  height: 100%;
  float: right;
  font: 12px/1.5 "Microsoft YaHei";
  line-height: 36px;
  color: #666;
}

.nav-bar-icon-set-ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-bar-icon-set-ul-li {
  display: inline-block;
  text-align: center;
}

.nav-bar-icon-set-ul-li-a {
  padding-left: 11px;
  padding-right: 11px;
  /*display: inline-block;*/
}

.nav-bar-icon-set-link {
  border-style: solid;
  border-right-color: #dddddd;
  border-right-width: 1px;
}

.icon-email {
  width: 14px;
  height: 14px;
  display: inline-block;
  background-image: url("https://pic.c-ctrip.com/platform/online/home/spirit20190918.png");
  background-position: -8px -65px;
  vertical-align: middle;
}

.icon-mobile {
  width: 10px;
  height: 16px;
  display: inline-block;
  background-image: url("https://pic.c-ctrip.com/platform/online/home/spirit20190918.png");
  background-position: -100px -67px;
  vertical-align: middle;
  margin-bottom: 4px;
}

.icon-wechat {
  width: 18px;
  height: 18px;
  display: inline-block;
  background-image: url("https://pic.c-ctrip.com/platform/online/home/spirit20190918.png");
  background-position: -96px -98px;
  vertical-align: middle;
  margin-bottom: 4px;
}

.nav-bar-icon-set-li-current {
  display: inline-block;
  background-color: #ffffff;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}

.country {
  display: none;
  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
  position: fixed;
  top: 35px;
  z-index: 999;
  background: #fff;
  width: 628px;
  margin-left: -1px;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}

.country-show {
  display: block;
  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
  position: fixed;
  top: 35px;
  z-index: 999;
  background: #fff;
  width: 628px;
  margin-left: -1px;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}

.orderList {
  display: none;
  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
  position: fixed;
  top: 35px;
  z-index: 999;
  background: #fff;
  width: 116px;
  margin-left: -1px;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}

.orderList-span {
  float: left;
  text-align: left;
  padding-left: 10px;
  width: 92%;
}

.orderList li :hover {
  background: #f6f6f6;
}

.my-xie-cheng {
  display: none;
  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
  position: fixed;
  top: 35px;
  z-index: 999;
  background: #fff;
  width: 84px;
  margin-left: -1px;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}

.my-xie-cheng-span {
  float: left;
  text-align: left;
  padding-left: 10px;
  width: 88%;
}

.my-xie-cheng li :hover {
  background: #f6f6f6;
}

.ctripQRCode {
  display: none;
  position: fixed;
  width: 144px;
  z-index: 999;
  margin-left: -105px;
  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
  background: #fff;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}
.ctripQRCodeImg {
  padding: 16px 16px 0px 16px;
}
.ctripQRCode p {
  margin-top: -14px;
}
.ctripQRCode div {
  background-color: #3983e5;
  color: #fff;
  cursor: pointer;
}

.wechat {
  display: none;
  position: fixed;
  width: 144px;
  z-index: 999;
  margin-left: -105px;
  border-style: solid;
  border-color: #dddddd;
  border-width: 1px;
  background: #fff;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
}
.wechat p {
  margin-top: -18px;
}
.show {
  display: block !important;
}
/* 二楼 */
.logo {
  position: relative;
  width: 1180px;
  height: 80px;
  margin: 0 auto;
  padding-top: 25px;
}
.logo img {
  width: 203px;
  margin-top: -15px;
  margin-left: -10px;
  margin-right: 50px;
}
.logo input {
  width: 382.39px;
  height: 30px;
  font-size: 12px;
  padding: 0 45px 0 5px;
  border: 1px solid #8ebefc;
  font-family: "Microsoft Yahei", Tahoma;
  box-shadow: 2px 2px 1px 0 rgba(164, 203, 255, 0.25) inset;
  outline: 0 none;
  border-radius: 4px;
}
.logo button {
  position: absolute;
  top: 25px;
  left: 582px;
  width: 42px;
  height: 29px;
  cursor: pointer;
  border: 0 none;
  background-color: #a4cbff;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png);
  background-repeat: no-repeat;
  background-position: -52px -603px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.phoneNumber {
  position: absolute;

  left: 1008px;
  top: 15px;
  text-align: right;
  font-size: 12px;
  line-height: 20px;
}

.phoneNumber b {
  position: absolute;
  top: 20px;
  right: -10px;
  display: inline-block;
  width: 8px;
  height: 5px;
  vertical-align: middle;
  margin-left: 2px;
  overflow: hidden;
  background-position: -46px -58px;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/spirit20190918.png);
}
/* 三楼 */
.base_nav {
  width: 100%;
  height: 40%;
  background-color: #2577e3;
}
.cui_nav_cui_content {
  width: 1180px;
  height: 40px;
  margin: 0 auto;
  font-size: 15px;
}
.cui_nav_cui_content .cui_finance_pc {
  display: inline-block;
  height: 40px;
  padding: 0 11px;
}

.cui_nav_cui_content .navName {
  color: #fff;
  cursor: pointer;
  line-height: 40px;
  text-decoration: none;
}
.icon {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
  line-height: 0;
  font-size: 0;
  margin-left: 5px;
  vertical-align: middle;
  border-top: 3px solid #fff;
  border-bottom: 0 none;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}

.cui_nav_cui_content .cui_finance_pc :hover .icon{
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
  line-height: 0;
  font-size: 0;
  margin-left: 5px;
  vertical-align: middle;
  border-bottom: 3px solid #fff;
  border-top: 0 none;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent; display: inline-block;
}


.icon-current {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
  line-height: 0;
  font-size: 0;
  margin-left: 5px;
  vertical-align: middle;
  border-bottom: 3px solid #fff;
  border-top: 0 none;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}

.divider {
  display: inline-block;
  width: 1px;
  height: 14px;
  padding-left: 0;
  margin: 13px 0 0;
  background-color: #1d67dd;
  clear: none;
  border: none;
}

.tel-list-more {
  display: none;
}
/* 下面的导航条 */
.subway_internal {
  width: 1180px;
  margin: 0 auto;
  /* height: 22px; */
}
.line-list .cui-icon-hotel {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -26px 0;
}
.cui-icon-flight {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: 0 0;
}
.cui-icon-car {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -130px 0;
}
.cui-icon-train {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -52px 0;
}
.cui-icon-outboundtravel {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -26px -52px;
}
.cui-icon-HHtravel {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -26px -52px;
}
.cui-icon-ticket {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -26px -26px;
}
.cui-icon-visa {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: 0 -52px;
}
.cui-icon-insurance {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -78px -26px;
}
.cui-icon-wifi {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -130px -26px;
}
.cui-icon-pickup {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -130px 0;
}
.cui-icon-foreign {
  display: inline-block;
  background-image: url(https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
  background-position: -24px -79px;
}
.line-list a {
  color: #666;
  font-size: 12px;
  text-decoration: none;
}
.line-list li {
  margin-left: 12px;
}
.subway_internal > .title {
  position: relative;
  /* float: left; */
  margin-right: 10px;
  padding: 4px 5px;
  background: #74a8ed;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  height: 25px;
  /* line-height: 15px; */
}
.title > i {
  position: absolute;
  right: -8px;
  top: 8px;
  width: 0;
  height: 0;
  border: 4px solid #74a8ed;
  border-color: #fff #fff #fff #74a8ed;
  overflow: hidden;
}
.line-list a:hover {
  color: #0069d9;
}
.Menus {
  display: none;
  position: absolute;
  left: 168px;
  width: 1096px;
  height: 40px;
  border: 1px solid #0069d9;
  border-top: none;
  z-index: 100;
  background: #fff;
  line-height: 40px;
}
.cui_nav_cui_content .menusLink {
  color: #666;
  display: inline-block;
  width: 90px;
  height: 15px;
  line-height: 15px;
  vertical-align: middle;
  text-align: center;
  padding: 0 10px;
  border-right: 1px solid #666;
}
</style>
