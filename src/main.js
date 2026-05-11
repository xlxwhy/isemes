import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Handle redirect from 404.html (GitHub Pages SPA fallback)
const redirectUrl = sessionStorage.getItem('redirect_url')
if (redirectUrl) {
  sessionStorage.removeItem('redirect_url')
  const url = new URL(redirectUrl)
  const path = url.pathname + url.search + url.hash
  if (path !== '/') {
    router.isReady().then(() => {
      router.replace(path)
    })
  }
}

createApp(App).use(router).mount('#app')
