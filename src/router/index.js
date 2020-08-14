import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pay.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
