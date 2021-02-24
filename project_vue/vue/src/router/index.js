import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SlideShow from '../components/SlideShow.vue'


Vue.use(VueRouter)
Vue.component("slide-show",SlideShow)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { //这里是懒加载，暂时不要问，明天讲
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/Register.vue')
  },
  {
    path: '/retrievePass',
    name: 'RetrievePass',
    component: () => import('../views/login/RetrievePass.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/slideshow',
    name: 'SlideShow',
    component: () => import('../components/SlideShow.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
