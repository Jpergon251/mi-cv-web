<template>
  <section>
    <h2 class="info-title">{{ $t('skills.title') }}</h2>
    <p v-html="$t('skills.description')"></p>
    <ul class="skills-list">
      <li class="skill-item">
        <div class="skill-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/800px-Blender_logo_no_text.svg.png"
            alt="Blender"
          />
          <span>Blender</span>
        </div>

        <div class="carousel-container">
          <button class="arrow left" @click="scrollLeft">←</button>

          <div class="carousel" ref="carouselRef">
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="img"
              alt="Proyecto Blender"
              class="carousel-image"
              @click="openLightbox(img)"
            />
          </div>

          <button class="arrow right" @click="scrollRight">→</button>
        </div>
      </li>
    </ul>
    <Teleport to="body">
      <Lightbox
        v-if="selectedImage"
        :image="selectedImage"
        @close="selectedImage = null"
      />
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Lightbox from './Lightbox.vue'

const images = [
  '/images/Blender/Fox1.png',
  '/images/Blender/Fox2.png',
  '/images/Blender/Mat1.png',
  '/images/Blender/Mat2.png'
]

const carouselRef = ref(null)
const selectedImage = ref(null)

const scrollLeft = () => {
  carouselRef.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  carouselRef.value.scrollBy({ left: 300, behavior: 'smooth' })

}
const openLightbox = (img) => {
  selectedImage.value = img
}
</script>
