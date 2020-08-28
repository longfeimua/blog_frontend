import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login.vue'
import Home from '../views/home.vue'
import profile from '../views/profile/user.vue'
import user from '../views/userManage/user.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' }, // 重定向
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/profile', component: profile },
  { path: '/user', component: user }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导航守卫⚔
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 没有token值，则返回/login页
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
