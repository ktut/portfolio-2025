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

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      displayName: 'Home',
      ogImage: 'https://rkdvis.com/assets/me-burgundy-social.jpg',
      ogTitle: 'Ramzi Dreessen — RKDVIS.COM',
      ogDescription:
        'A web developer, designer, and photographer based in Chicago.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      displayName: 'About',
      ogImage: 'https://rkdvis.com/assets/me-burgundy-social.jpg',
      ogTitle: 'About — Ramzi Dreessen',
      ogDescription:
        'A web developer, designer, and photographer based in Chicago.'
    }
  },
  {
    path: '/chase',
    name: 'chase',
    component: ChaseView,
    meta: {
      displayName: 'JPMC Performance Dashboard',
      ogImage: 'https://rkdvis.com/assets/PD-night-mock.jpg',
      ogTitle:
        'Building the Chase Media Solutions Performance Dashboard — Ramzi Dreessen',
      ogDescription:
        'Front-end engineering on a web app for campaign monitoring and reporting for card-linked offers'
    }
  },
  {
    path: '/chase-travel',
    name: 'chasetravel',
    component: ChaseTravelView,
    meta: {
      displayName: 'Chase Travel Case Study',
      ogImage: 'https://rkdvis.com/assets/gua-lo.jpg',
      ogTitle: 'Fixing Chase Travel — Ramzi Dreessen',
      ogDescription:
        'Fixing the clunky travel booking app via applying industry standards, user research and some common sense'
    }
  },
  {
    path: '/chicagomagazine',
    name: 'chicagomagazine',
    component: ChicagoMagView,
    meta: {
      displayName: 'ChiMag Editorial Web Design',
      ogImage: 'https://rkdvis.com/assets/chimag-mag-spread.jpg',
      ogTitle: 'Chicago Magazine Editorial Web Design — Ramzi Dreessen',
      ogDescription: 'Handling web-guy duties at a Chicago media staple'
    }
  },
  {
    path: '/chicagomagazine-subscription',
    name: 'chicagomagazine-subscription',
    component: ChicagoMagSubscriptionView,
    meta: {
      displayName: 'ChiMag Subscription Page',
      ogImage: 'https://rkdvis.com/assets/ipad-chimag-mock.jpg',
      ogTitle: 'Chicago Magazine Subscription Page Redesign — Ramzi Dreessen',
      ogDescription:
        'Redesigning the subscription experience to drive conversions'
    }
  },
  {
    path: '/high5games',
    name: 'high5games',
    component: HighFiveView,
    meta: {
      displayName: 'H5G Builder System',
      ogImage: 'https://rkdvis.com/assets/h5g-social.jpg',
      ogTitle: 'High 5 Games Tout Builder System — Ramzi Dreessen',
      ogDescription: 'Building a custom carousel banner-building system and app'
    }
  },
  {
    path: '/suntimes',
    name: 'suntimes',
    component: SunTimesView,
    meta: {
      displayName: 'CST Print Design',
      ogImage: 'https://rkdvis.com/assets/print-design/IMG_0008.jpg',
      ogTitle: 'Chicago Sun-Times Print Design — Ramzi Dreessen',
      ogDescription: 'Print design work for Chicago Sun-Times SPLASH magazine'
    }
  },
  {
    path: '/photo',
    name: 'photo',
    component: PhotoView,
    meta: {
      displayName: 'Portrait Photography',
      ogImage: 'https://rkdvis.com/assets/photo/ruffalo-social.jpg',
      ogTitle: 'Portrait Photography — Ramzi Dreessen',
      ogDescription:
        'Portraits shot for Chicago Sun-Times SPLASH magazine and other clients'
    }
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

export default router
