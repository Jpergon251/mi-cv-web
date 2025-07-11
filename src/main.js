import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import * as lucide from 'lucide-vue-next'


const app = createApp(App)

// Registrar todos los iconos globalmente
for (const [key, component] of Object.entries(lucide)) {
  app.component(key, component)
}

app.mount('#app')