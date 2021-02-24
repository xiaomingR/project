import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Hotel from '../components/Hotel.vue'
import VHead from '../components/VHead.vue'
import Ticket from '../views/Ticket'
import Footer from '../views/Footer'
import Company from '../views/Company'
import travelService from '../views/travelService'
import Hirecar from '../views/Hirecar'
import Enjoy from '../views/Enjoy'
import Partners from '../views/Partners'
import Global from '../views/Global'
import flagShip from '../views/flagShip'
import rotationChart from '../components/rotationChart.vue'

import Login from '../views/Login'
import Register from '../views/Register'
import Slider from '../components/Slider'
Vue.use(VueRouter)
//配置路由字典
const routes = [
    
    { path: '/', component: Index },
    { path: '/hotel', component: Hotel },
    { path: '/vhead', component: VHead },
    { path: '/ticket', component: Ticket },
    { path: '/footer', component: Footer },
    { path: '/company', component: Company },
    { path: '/travelservice', component: travelService},
    { path: '/hirecar', component: Hirecar},
    { path: '/enjoy', component: Enjoy},
    { path: '/partners', component: Partners},
    { path: '/global', component: Global},
    { path: '/flagship', component: flagShip},
    { path: '/rotationChart', component: rotationChart},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/slider', component: Slider}
  ]
  const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
  })
  export default router;