import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ChaseView from '../views/Chase.vue'
import ChaseTravelView from '../views/ChaseTravel.vue'
import ChicagoMagView from '../views/ChicagoMag.vue'
import ChicagoMagSubscriptionView from '../views/ChicagoMagSubscription.vue'
import HighFiveView from '../views/HighFive.vue'
import SunTimesView from '../views/SunTimes.vue'
import PhotoView from '../views/Photo.vue'
import { startViewTransition } from 'vue-view-transitions'
import { routesMeta } from '../config/routes-meta'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: routesMeta['/']
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: routesMeta['/about']
  },
  {
    path: '/chase',
    name: 'chase',
    component: ChaseView,
    meta: routesMeta['/chase']
  },
  {
    path: '/chase-travel',
    name: 'chasetravel',
    component: ChaseTravelView,
    meta: routesMeta['/chase-travel']
  },
  {
    path: '/chicagomagazine',
    name: 'chicagomagazine',
    component: ChicagoMagView,
    meta: routesMeta['/chicagomagazine']
  },
  {
    path: '/chicagomagazine-subscription',
    name: 'chicagomagazine-subscription',
    component: ChicagoMagSubscriptionView,
    meta: routesMeta['/chicagomagazine-subscription']
  },
  {
    path: '/high5games',
    name: 'high5games',
    component: HighFiveView,
    meta: routesMeta['/high5games']
  },
  {
    path: '/suntimes',
    name: 'suntimes',
    component: SunTimesView,
    meta: routesMeta['/suntimes']
  },
  {
    path: '/photo',
    name: 'photo',
    component: PhotoView,
    meta: routesMeta['/photo']
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Helper function to update meta tags
function updateMetaTags(route) {
  const meta = route.meta || {}

  // Update OG Image
  if (meta.ogImage) {
    let ogImageTag = document.querySelector('meta[property="og:image"]')
    if (ogImageTag) {
      ogImageTag.setAttribute('content', meta.ogImage)
    }
  }

  // Update OG Title
  if (meta.ogTitle) {
    let ogTitleTag = document.querySelector('meta[property="og:title"]')
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta')
      ogTitleTag.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitleTag)
    }
    ogTitleTag.setAttribute('content', meta.ogTitle)

    // Also update document title
    document.title = meta.ogTitle
  }

  // Update OG Description
  if (meta.ogDescription) {
    let ogDescTag = document.querySelector('meta[property="og:description"]')
    if (ogDescTag) {
      ogDescTag.setAttribute('content', meta.ogDescription)
    }

    // Also update regular description
    let descTag = document.querySelector('meta[name="description"]')
    if (descTag) {
      descTag.setAttribute('content', meta.ogDescription)
    }
  }

  // Update Twitter Card meta tags
  if (meta.ogImage) {
    let twitterImageTag = document.querySelector('meta[name="twitter:image"]')
    if (!twitterImageTag) {
      twitterImageTag = document.createElement('meta')
      twitterImageTag.setAttribute('name', 'twitter:image')
      document.head.appendChild(twitterImageTag)
    }
    twitterImageTag.setAttribute('content', meta.ogImage)
  }

  if (meta.ogTitle) {
    let twitterTitleTag = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitleTag) {
      twitterTitleTag.setAttribute('content', meta.ogTitle)
    }
  }

  if (meta.ogDescription) {
    let twitterDescTag = document.querySelector(
      'meta[name="twitter:description"]'
    )
    if (twitterDescTag) {
      twitterDescTag.setAttribute('content', meta.ogDescription)
    }
  }
}

router.beforeResolve(async () => {
  const viewTransition = startViewTransition()
  await viewTransition.captured
})

router.afterEach((to) => {
  window.scrollTo(0, 0)
  updateMetaTags(to)
})

// Update meta tags on initial load
router.isReady().then(() => {
  updateMetaTags(router.currentRoute.value)
})

export default router
