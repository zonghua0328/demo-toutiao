import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

Vue.use(VueRouter)

// 路由规则数组
const routes = [
  // 定义首页的路由
  { path: '/', component: Home },
  // 我的路由
  { path: '/user', component: User }
]

// 创建路由的实例对象
const router = new VueRouter({
  routes
})

export default router
