import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
