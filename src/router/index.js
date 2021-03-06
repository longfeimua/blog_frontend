import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/login.vue'
import Home from '../views/home.vue'
import register from '../views/login/register.vue'
import cardDetail from '../views/home/cardDetail/cardDetail.vue'
import writepage from '../views/blog/writepage.vue'

Vue.use(VueRouter)

const routes =
  [
    { path: '/', redirect: '/home' }, // 重定向
    { path: '/login', component: Login },
    { path: '/regitster', component: register },
    { path: '/home', component: Home },
    { path: '/article/:articleId', component: cardDetail },
    { path: '/write', component: writepage }
  ]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 注销核心
// 导航守卫⚔
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   // 没有token值，则返回/login页
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
