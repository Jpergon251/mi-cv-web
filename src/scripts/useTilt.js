// src/composables/useTilt.js
import VanillaTilt from 'vanilla-tilt'
import { onMounted } from 'vue'

export function useTilt(selector = '.tilt') {
  onMounted(() => {
    const elements = document.querySelectorAll(selector)
    VanillaTilt.init(elements, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.15,
        reverse: true,
    })
  })
}
