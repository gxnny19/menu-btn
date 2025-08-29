import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Study from '../views/Study.vue'
import WebDesign from '../views/WebDesign.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/study', component: Study },
  { path: '/webdesign', component: WebDesign },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
