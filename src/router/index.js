import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ChaseView from '../views/Chase.vue'
import ChicagoMagView from '../views/ChicagoMag.vue'
import HighFiveView from '../views/HighFive.vue'
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
  },
  {
    path: '/chicagomagazine',
    name: 'chicagomagazine',
    component: ChicagoMagView
  },
  {
    path: '/high5games',
    name: 'high5games',
    component: HighFiveView
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

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
