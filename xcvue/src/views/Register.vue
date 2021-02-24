<template>
<div class="Register">
  <div class="reg_logo_hd"><a href="http://www.ctrip.com"></a></div>
    <div class="cui_bd">
     <div class="reg_wrap hh_reg_wrap">
      <ul class="reg_step d-flex">
        <li class="currt">
          <span class="firspan"></span>
          验证手机
        </li>
        <li class="currt2" :style="{backgroundPosition:pt}">
          <span class="secspan" :style="{backgroundColor:bc}"></span>
          设置密码
        </li>
        <li class="currt3" :style="{backgroundPosition:ps}">
          <span class="tirspan" :style="{backgroundColor:bo}"></span>
          注册成功
        </li>
      </ul>
      <!-- 验证手机模块 -->
      <div class="test" v-if="aa==1">
          <div class="d-flex phone">
            <span class="left">手机号</span>
            <div class="r_input">中国大陆86
            <a href="javascript:;" class="link_code"></a>
            </div>
            <input type="text" placeholder="有效手机号" class="input_country_code" v-model="phoneNumber" @blur="checkPhoneNumber">
            <span :class="spanClass"></span>
          </div>
          <div class="base_error"><i class="base_error_icon"></i>请输入手机号</div>
          <div class="base_error1"><i class="base_error_icon1"></i>请输入正确的手机号</div>
      <!-- 滑块 -->
        <div class="slider d-flex">
          <span class="left">滑块验证</span>
            <slider class="son" :style="{maxWidth:'304px'}"></slider>
        </div>
        
        <!-- 短信验证码 -->
         <div class="verification">
          <span class="left">短信验证码</span>
          <input type="text" placeholder="6位数字" class="r_input input_auth-code" v-model="message" @blur="checkMessage">
          <a href="#">发送验证码</a>
          </div>
        <!-- 同意模块 -->
        <div>
          <p class="base_label">同意<a href="#">《服务协议》</a>和<a href="#">《隐私政策》</a></p>
        </div>
        <!-- 设置按钮 -->
          <button class="reg_btn" @click="handle">下一步,设置密码</button><br>
          <a href="#" class="partner">企业客户注册</a>
      </div>

      <!-- 密码设置模块 -->
      <div class="test" v-else-if="aa==2">
        <div class="d-flex phone">
            <span class="left">注册手机号</span>
            <div class="ml-3">{{phoneNumber}}
            </div>
        </div>
        <!-- 设置密码 -->
        <div class="verification d-flex">
          <span class="left">密码</span>
          <input type="password" placeholder="8-20位字母、数字和符号" class="r_input input_auth-code" v-model="password" @blur="checkPassword">
          <i></i>
          <span :class="errorClass"></span>
          <ul class="box_pas_safety">
            <li class="strongPwd1">弱</li>
            <li class="strongPwd2">中</li>
            <li class="strongPwd3">强</li>
          </ul>
        </div>
        <!-- 确认密码 -->
         <div class="verification">
          <span class="left">确认密码</span>
          <input type="password" placeholder="再次输入密码" class="r_input input_auth-code" v-model="conPassword" @blur="checkConpassword">
          <i></i>
          <span :class="errorClass1"></span>
        </div>
        <!-- 完成按钮 -->
        <button class="reg_btn" @click="handle2">完成</button><br>
        <a href="#" class="partner">注册遇到问题？</a><br>
        <div class="return mt-5"><a href="#">返回上一步</a></div>
       
      </div>
      <!--注册成功模块  -->
        <div class="reg_success" v-else>
        <h2 class="mb-5">恭喜您，使用{{phoneNumber}}注册成功</h2>
          <a href="javascript:;">您还可以:</a>
        <div class="remark_box d-flex mt-5">
          <span class="d-flex">
            <i class="info"></i>
            <span>
              <a href="#">补全个人信息</a>
              <p class="mt-2">用于找回密码并体验更高质量会员服务</p>
            </span>
          </span>
          <span class="d-flex ml-5">
            <i class="block"></i>
            <span>
              <a href="#">设置交易密码</a>
              <p class="mt-2">交易密码用于保障您的资产账户安全</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>  
   <!--用户手册  -->
    <div class="mask" :style="dn"></div>
    <div class="base_pop" :style="dn">
      <div class="pop_hd d-flex">
        <h3>携程用户注册协议和隐私政策</h3>
        <a href="/">×</a>
        <hr>
      </div>
      <div class="pop_bd">
        <p><b>亲爱的用户，在您注册为携程用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意，尤其是加粗字体。</b></p>
        <a href="#">服务协议</a>
        <ul>
          <li>1.	总则	</li>
          <li>2.	服务简介</li>
          <li>3.	服务条款的修改	</li>
          <li>4.	服务变更、中断、终止</li>
          <li>5.	使用规则	</li>
          <li>6.	版权声明</li>
          <li>7.	用户隐私制度	</li>
          <li>8.	用户的账号、密码和安全性</li>
          <li>9.	拒绝提供担保	</li>
          <li>10.	有限责任</li>
          <li>11.	携程网络会员服务信息的存储及限制	</li>
          <li>12.	用户管理</li>
          <li>13.	用户的违约责任	</li>
          <li>14.	保障	</li>
          <li>15.	结束服务</li>
          <li>16.	通告	</li>
          <li>17.	参与广告策划</li>
          <li>18.	邮件内容的所有权	</li>
          <li>19.	法律</li>
        </ul>
        <div class="mt-2">
          <a href="#">隐私政策</a>
        <p><b>隐私政策明确了我们产品与/或服务所收集、使用及共享个人信息的类型和方式及用途；明确了用户查询、更正和删除个人信息的方式，</b>具体提纲如下：</p>
        <ul>
          <li>1.隐私政策的确认和接纳		</li>
          <li>2.信息收集</li>
          <li>3.信息使用	</li>
          <li>4.信息共享、转让和披露</li>
          <li>5.信息保存及跨境传输		</li>
          <li>6.Cookie的使用</li>
          <li>7.个人敏感信息提示	</li>
          <li>8.信息安全与保护</li>
          <li>9.信息安全事件处置		</li>
          <li>10.未成年人信息保护</li>
          <li>11.用户个人信息管理		</li>
          <li>12.从中国大陆地区以外访问我们的网站</li>
          <li>13.隐私政策的适用范围	</li>
          <li>14.隐私政策的修改</li>
          <li>15.如何联系我们	</li>
          <li>16.	通告	</li>
          <li>17.	参与广告策划</li>
          <li>18.	邮件内容的所有权	</li>
          <li>16.法律</li>
        </ul>
        </div>
        
        <p>【审慎阅读】您在申请注册流程中点击同意前，请您务必审慎阅读、充分理解协议中相关条款内容，尤其是与您约定免除或限制责任的条款，以及字体加粗标识的重要条款。</p>
        <p><b>【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。如果您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容。</b>如果您对以上内容有疑问，请联系：<a href="#">privacy@ctrip.com</a></p>
        <p>点击同意即代表您已阅读并同意携程《服务协议》和《隐私政策》，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方。</p>
      </div>
      <!-- 下面的同意或不同意 -->
      <div class="pop_footer">
        <a href="javascript:;" class="reg_disagree" @click="close">不同意</a>
        <a href="javascript:;" class="reg_agree" @click="agree">同意并继续</a>
      </div>
    </div>
</div>

</template>
<script>
import Slider from '../components/Slider'
import md5 from 'js-md5';
export default {
  data(){
    return{
      phoneNumber:'',
      message:'',
      aa:1,
      password:'',
      conPassword:'',
      pt:'#ddd',
      bc:'235px -286px',
      ps:'#ddd',
      bo:'235px -286px',
      spanClass:{
        success:false,
        error:false
      },
      errorClass:{
        error1:false
      },
      errorClass1:{
        error1:false
      },
      dn:'display:block'
    }
  },
  methods:{
    checkPhoneNumber(){
        let phoneRegExp=/^1[3-8]{1}\d{9}$/;
        if(phoneRegExp.test(this.phoneNumber)){
				return true;
			}else{
				 return false;
			}
    },
    checkMessage(){
      let messageRegExp=/^[0-9]{6}$/;
      if(messageRegExp.test(this.message)){
        return true;
      }else{
        return false;
      }
    },
    //验证下一步
    handle(){
      if(this.checkPhoneNumber()&&this.checkMessage()){
       this.aa=2;
       this.bc="#acd252";
       this.pt="235px -229px";
      }
    },
    //设置密码的方法
    checkPassword(){
			let passwordRegExp=/^[0-9A-Za-z?!$_]{8,20}$/;
			if(passwordRegExp.test(this.password)){
				return true;
			}else{
				 return false;
			}
  	},
		//再次校验密码的方法
	  checkConpassword(){
			if(this.password==this.conPassword){
        return true;
      }else{
        alert('两次密码不一样，请重新输入')
      }
    },
    //下一步
    handle2(){
      if(this.checkPassword()&&this.checkConpassword()){
        //将有户名注册到数据库,首先判断用户名是否重复
        	this.axios.get("/login?phoneNumber="+this.phoneNumber).then(res=>{
            let array=res.data;
            console.log(array)
							if(array.length==0){
                this.password = md5(this.password);
                console.log(this.password,2)
								this.axios.post('/login','phoneNumber='+this.phoneNumber+'&password='+md5(this.password)).then(res=>{
									this.$router.push('/')
								})
							}else{
                alert('用户名已存在，请使用其他用户名')
							}
					})
        this.aa=3;
        this.bo="#acd252";
        this.ps="235px -229px";
      }
    },
    
    //点击×关闭用户手册
    close(){
      this.$router.push('/')
    },
    agree(){
      this.dn='display:none'
    }
  },
  //注册输入监听
  watch:{
      //监视手机号
      phoneNumber(){
        let phoneRegExp=/^1[3-8]{1}\d{9}$/;
        if(phoneRegExp.test(this.phoneNumber)){
          this.spanClass.success=true;
          this.spanClass.error=false;
        }else{
          this.spanClass.error=true;
           this.spanClass.success=false;
        }
      },
      password(){
        let passwordRegExp=/^[0-9A-Za-z?!$_]{8,20}$/;
        if(!passwordRegExp.test(this.password)){
          this.errorClass.error1=true;
        }else{
          this.errorClass.error1=false;
        }
      },
      conPassword(){
        if(!(this.password==this.conPassword)){
          this.errorClass1.error1=true;
        }else{
          this.errorClass1.error1=false;
        }
      }
  },
  components:{Slider}
}
</script>
<style>
.reg_logo_hd{
    width: 980px;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
    margin-top:15px;
}
.reg_logo_hd a{
    display: block;
    width: 100%;
    height: 43px;
    text-indent: -999em;
    background: url(https://pic.c-ctrip.com/platform/online/login/c_logo2013.png) no-repeat;
}
.cui_bd{
    margin: 20px auto;
    width: 1000px;
    padding: 0 10px;
    min-height: 500px;
}
.reg_wrap hh_reg_wrap{
  width: 100%;
  height: 372px;
}
.reg_step{
  margin: 0 0 30px -12px;
  color:#799d08
}
.secspan,.tirspan{
    display: inline-block;
    margin: 0 5px;
    width: 240px;
    height: 5px;
    line-height: 0;
    background-color: #ddd;
    border-radius: 3px;
    vertical-align: middle;
    
}
.firspan{
  display: inline-block;
    margin: 0 5px;
    width: 240px;
    height: 5px;
    line-height: 0;
    background-color: #acd252;
    border-radius: 3px;
    vertical-align: middle;
}
.reg_step .currt,.reg_step li{
  display: inline-block;
  height: 20px;
  font-size: 14px;
  vertical-align: middle;
}
.currt{
background: url(https://pic.c-ctrip.com/platform/online/register/un_reg_7.4.png) 0 -9999em no-repeat;
 background-position: 235px -229px;
}
.currt2,.currt3{
background: url(https://pic.c-ctrip.com/platform/online/register/un_reg_7.4.png) 0 -9999em no-repeat;
 background-position: 235px -286px;
}

.test{
  padding: 10px 0;
}
.r_input{
    position: relative;
    height: 40px;
    width: 130px;
    line-height: 28px;
    padding-left: 10px;
    font-size: 14px;
    color: #333;
    border: 1px solid #ddd;
    margin-left:10px;
    padding:5px 10px
}
.left{
  display: inline-block;
  width: 100px;
  height: 40px;
  padding:10px 0;
  margin-left:70px;
  text-align: right;
} 
.phone{
  position: relative;
  align-items: center;
}
.link_code{
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  width: 40px;
    height: 40px;
   background: url(https://pic.c-ctrip.com/platform/online/register/un_reg_7.4.png) no-repeat;
   background-position: 0px -40px;
    
}
.base_error{
    margin-left: 180px;
    padding-right: 20px;
    clear: both;
    margin-top: 10px;
    width: auto;
    min-width: 176px;
    width: 220px;
    height: 24px;
    padding: 2px 0 2px 10px;
    background: #FFFADC;
    border: 1px solid #DCA;
    color: #666;
    font-size: 12px;
    line-height: 17px;
  
}
.base_error .base_error_icon{
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(https://pic.c-ctrip.com/platform/online/register/un_reg_7.4.png);
  background-position: 0 -322px;
      vertical-align: middle;
}
.base_error1{
    margin-left: 180px;
    padding-right: 20px;
    clear: both;
    margin-top: 10px;
    width: auto;
    min-width: 176px;
    width: 196px;
    height: 20px;
    padding: 2px 0 2px 22px;
    background: #FFFADC;
    border: 1px solid #DCA;
    color: #666;
    font-size: 12px;
}
.base_error .base_error_icon1{
  
}


.input_country_code{
  height: 40px;
  width: 157px;
   border: 1px solid #ddd;
   margin-left: 15px;
   padding: 5px 10px;
   font-size: 14px;
    color: #333;
}
.input_auth-code{
 
  display: inline-block;
      width: 302px;
      margin-top: 20px;
}

.slider{
  padding-top: 20px; 
}
.drag{
  width: 304px;
}
.son{
  margin-left:9px;
}
.verification{
  position: relative;
  width: 1000px;
  height: 60px;
}
.verification a{
  position: absolute;
  left: 400px;
  top:33px;
 font-size: 12px;
}
.verification span{
  margin-top: 10px;
}
.verification i{
  position: absolute;
 left: 450px;
  top:29px;
 display: inline-block;
    width: 22px;
    height: 22px;
    background-position: 0px 0px;
    background-image: url(https://pic.c-ctrip.com/platform/h5/B-login/B-login-sprite2@v8.3.png) ;
    background-size: 22px;
}
.base_label{
  
font: 12px/1.5 'Microsoft yahei', arial, Simsun, sans-serif;
    color: #333;
  margin-left: 180px;
  margin-top: 20px;
}
    
.base_label a{
    color: #999;
}
.base_label a:hover{
   text-decoration: none;
}
.reg_btn{
    margin-bottom: 8px;
    width: 220px;
    height: 42px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    border: 0 none;
    border-radius: 4px;
    background-color: #FF9A14;
    margin-left: 180px;
    margin-top:20px;
    outline: none;
}
.partner{
  font-size:12px;
  margin-left:180px;
}
input{
  outline: none
}
.box_pas_safety{
  display: block;
  
  padding-top:25px;
  margin-left:10px;
  
}
.box_pas_safety li{

  float: left;
    height: 26px;
    line-height: 26px;
    padding: 0 16px;
    border-right: 1px solid #fff;
    background-color: #F1D0B9;
    color: #fff;
    font-size:12px;
}
.return{
 
  padding-left:180px;
}
.return a{
   color: #666;
}
.info{
  display: block;
  width: 45px;
  height: 45px;
  background: url(https://pic.c-ctrip.com/platform/online/register/un_reg_7.4.png) no-repeat;
  background-position: -35px -244px;
}
.block{
  display: block;
  width: 45px;
  height: 45px;
  background: url(https://pic.c-ctrip.com/platform/online/register/un_reg_7.4.png) no-repeat;
  background-position: -32px -305px;
}
.reg_success{
  padding: 10px 100px;
}
.reg_success a{
  font-size:14px;
  
}
.reg_success p{
  font-size:14px;
}
/* watch监视页面输入框输入内容是否正确 */
.success{
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 460px;
  top:7px;
  background: url(https://pic.c-ctrip.com/platform/h5/B-login/B-login-sprite2@v8.3.png) no-repeat;
  background-position: 0 -100px;
  background-size: 15px;
}
.error{
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 460px;
  top:7px;
  background: url(https://pic.c-ctrip.com/platform/h5/B-login/B-login-sprite2@v8.3.png) no-repeat;
  background-position: 0 -225px;
  background-size: 20px;
}
.error1{
   display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 430px;
  top:17px;
  background: url(https://pic.c-ctrip.com/platform/h5/B-login/B-login-sprite2@v8.3.png) no-repeat;
  background-position: 0 -225px;
  background-size: 20px;
}
.mask{
    opacity: 0.5;
    display: block;
    background-color: rgb(0, 0, 0);
    z-index: 9998;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 120%;
}
.base_pop{
    position: absolute;
    z-index: 9999;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 480px;
    margin-top: -240px;
    margin-left: -300px;
    padding: 20px 30px;
    border: none;
    background-color:#fff;
   
}
.pop_hd a{
  margin-left:310px;
  font-size:20px;
  font: bold;
  color: #999;
}
.pop_bd{
  height: 350px;
 overflow: scroll;
}
.reg_disagree{
    width: 160px;
    margin: 0 15px;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
     margin-top: 10px;
     margin-left:90px;
     color: #999

}
.reg_agree{
  width: 160px;
    margin: 0 15px;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    border-color: #FF9A14;
    background-color: #FF9A14;
    border-radius: 4px;
    text-align: center;
    margin-left: 40px;
     color: #fff
}
a:hover{
  text-decoration: none
}
</style>
