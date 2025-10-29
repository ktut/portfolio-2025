import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { ViewTransitionsPlugin } from 'vue-view-transitions'

// Import global styles (order matters - reset first!)
import './styles/reset.css'
import './styles/global.scss'
import './styles/transitions.css'

createApp(App).use(router).use(ViewTransitionsPlugin()).mount('#app')
