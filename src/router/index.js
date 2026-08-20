import { createRouter, createWebHashHistory } from 'vue-router'
import CVPage from '/src/pages/CVPage.vue'

const routes = [
  {
    path: '/',
    name: 'cv',
    component: CVPage
  }
]

const router = createRouter({
  history: createWebHashHistory('/mi-cv-web/'),
  routes
})

export default router