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
    component: Home,
    meta: { displayName: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { displayName: 'About' }
  },
  {
    path: '/chase',
    name: 'chase',
    component: ChaseView,
    meta: { displayName: 'JPMorganChase' }
  },
  {
    path: '/chicagomagazine',
    name: 'chicagomagazine',
    component: ChicagoMagView,
    meta: { displayName: 'Chicago Magazine' }
  },
  {
    path: '/high5games',
    name: 'high5games',
    component: HighFiveView,
    meta: { displayName: 'High 5 Games' }
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
