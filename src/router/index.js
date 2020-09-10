import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
