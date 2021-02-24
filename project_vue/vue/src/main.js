import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
// import SlideShow from './components/SlideShow.vue'
import Vant from "vant"
import "vant/lib/index.css"
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import APP from './apl/index'
Vue.prototype.$APP = APP;


Vue.config.productionTip = false
Vue.component("my-header",MyHeader)
Vue.component("my-footer",MyFooter)
// Vue.component("slide-show",SlideShow)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
