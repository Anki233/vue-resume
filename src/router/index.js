import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { childrenRoute } from './childrenRoute.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
    children: childrenRoute
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
