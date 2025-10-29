import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ChaseView from '../views/Chase.vue'
import { startViewTransition } from 'vue-view-transitions'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/chase',
    name: 'chase',
    component: ChaseView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve(async () => {
  const viewTransition = startViewTransition()
  await viewTransition.captured
})

export default router
