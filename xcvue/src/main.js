import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入Element组件库
import {DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(DatePicker);

axios.defaults.baseURL="/api"
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
import VHead from './components/VHead';
Vue.component("vhead",VHead)
new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
