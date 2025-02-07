import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { ViewTransitionsPlugin } from 'vue-view-transitions'

createApp(App).use(router).use(ViewTransitionsPlugin()).mount('#app')
