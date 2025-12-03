import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { ViewTransitionsPlugin } from 'vue-view-transitions'

// Import global styles (order matters - reset first!)
import './styles/reset.css'
import './styles/global.scss'
import './styles/transitions.css'

const app = createApp(App)
app.use(router)
app.use(ViewTransitionsPlugin())
app.mount('#app')

// Trigger prerender-ready event after router is ready
router.isReady().then(() => {
  document.dispatchEvent(new Event('prerender-ready'))
})
