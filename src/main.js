import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Handle chunk load error - refresh page when new version is deployed
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('Failed to fetch dynamically imported module')) {
    console.log('New version detected, reloading...')
    window.location.reload()
  }
}, true)

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
