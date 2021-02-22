<template>
  <div id="lunbo">
    <div class="head-top">
    </div>
<!-- 轮播图所在的容器 -->
    <div class="lunbo"
         :style="{
           transition:slide+'s',
           marginLeft:-screen*num+'px'
      }">

      <img v-for="(item,index) in miaosha"
           :key="index"
           :src="item.icon"
           alt="">
           

    </div>

    <div class="buttons">
      <div class="button"
           v-for="(item,index) in button"
           :key="index"
           :class="{active:buttonVis(index)
           }"
           @click="changeImg(index)"></div>
      <!-- 此处将button的值传过去用于判断是否给button添加active的class属性值，从而改变按钮的颜色 -->
    </div>
        <!-- 轮播图上选项 -->
			<div class="under_slide">
                
			</div>
    
    </div>
</template>
<script>
export default {
  data () {
    return {
      miaosha: [
        {
          num: 0,
          icon: require('../assets/1.jpg')
        },
        {
          num: 1,
          icon: require('../assets/2.jpg')
        },
        {
          num: 2,
          icon: require('../assets/3.jpg')
        },

        {
          num: 3,
          icon: require('../assets/4.jpg')
        },
        {
          num: 4,
          icon: require('../assets/5.jpg')
        },
        {
          num: 5,
          icon: require('../assets/6.jpg')
        },
        {
          num: 6,
          icon: require('../assets/7.jpg')
        },
        {
          num: 7,
          icon: require('../assets/8.jpg')
        },
      ],
      button: [0, 1, 2, 3, 4, 5, 6, 7],
      //切换图片的时间
      slide: 1,
      //图片的个数
      num: 0,
      //定时器的名称
      timer: null,
      //屏幕的尺寸
      screen: null,
      //定时器每张图停留的时间
      min: 3000,
    }

  },
  methods: {
    //此处用于切换图片时按钮颜色的高亮
    buttonVis (index) {
      if (index == this.num) {
        return true

      } else {
        return false
      }
    },
    //点击按钮切换图片时，让num等于当前按钮的index值     num改变，图片也随之改变
    //此处让slide=0是为了点击瞬间切换，而不是倒退轮播图
    changeImg (index) {
      this.num = index
      this.slide = 0

    },
    //此方法主要用于判断图片轮播的距离
    get () {
      //获取屏幕的宽度，以实现随着页面的改变，图片滑动的距离改变
      this.screen = document.body.clientWidth * 1;

      // console.log(this.screen);
      // console.log(document.body.clientHeight)
      if (this.num == 7) {
        this.slide = 0;
        //当滑动到第八章图片时，切换的时间为0s，这样不会出现轮播倒滑的效果
        this.num = 0

      } else {

        this.slide = 1;
        this.num++;
        // console.log(this.num)


      }

    }

  },
  created () {

  },
  mounted () {
    this.timer = setInterval(this.get, this.min);
  },

  //关闭页面之前摧毁定时器
  beforeDestroy () {
    clearInterval(this.timer);
    // this.timer = null
  }


}
</script>
<style scoped>
/*最顶层的容器，宽度只能够显示一张图片*/
#lunbo {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
/*轮播图所在容器，宽度为父容器的八倍，这里设置了8张轮播图，轮播图滑动时，一个两秒的滑动特效*/
.lunbo {
  width: 800%;
  transition: 1s;
}
.lunbo img {
  width: 12.5%;
}
.buttons {
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  display: flex;
}
.button {
  display: inline-block;
  margin-left: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}
.active {
    width: 34px;
    height: 14px;
    border-radius: 10px;
  background-color: white;
}
.head-top {
  height: 0px;
  width: 100%;
}
.under_slide{
    background-color: #fff;
    width: 491px;
    height: 300px;
    padding: 20px 20px 5px;
    overflow: hidden;
    text-align: left;
}
</style>