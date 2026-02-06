import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount('#app')

const title = import.meta.env.VITE_TITLE
if (title) {
  document.title = title
}

const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS
if (gaId) {
  window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }
  ga.l = +new Date()
  ga('create', gaId, 'auto')
  ga('send', 'pageview')

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.head.appendChild(script)
}
