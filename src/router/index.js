import { createRouter, createWebHistory } from 'vue-router'


import Home from '../pages/Home.vue'
import Experience from '../pages/Experience.vue'
import Education from '../pages/Education.vue'
import Skills from '../pages/Skills.vue'
import Videogames from '../pages/Videogames.vue'
import Certificates from '../pages/Certificates.vue'

const routes = [
  { path: '/',name: "Home" ,component: Home },
  { path: '/experience',name: "Experience" ,component: Experience },
  { path: '/education',name: "Education" ,component: Education },
  { path: '/skills',name: "Skills" ,component: Skills },
  { path: '/videogames',name: "Videogames" ,component: Videogames },
  { path: '/certificates',name: "Certificates" ,component: Certificates }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router