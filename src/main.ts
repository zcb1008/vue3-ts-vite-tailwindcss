import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from '@/store'
import { router } from '@/router'
import 'tailwindcss/tailwind.css'

const bootstrap = () => {
  const app = createApp(App)
  setupStore(app)
  app.use(router)
  app.mount('#app')
}

bootstrap()