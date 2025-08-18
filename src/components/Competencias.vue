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
            class="tech-icon"
          />
          <span>Blender</span>
        </div>

        <div>
          <p v-html="$t('skills.items.blender.description')"></p>
        </div>
        <div class="carousel-container" :class="{ 'has-left': canScrollLeftBlender, 'has-right': canScrollRightBlender }" >
          <button 
            v-if="canScrollLeftBlender" 
            class="arrow left" 
            @click="scrollLeftBlender"
          >
            ←
          </button>
          <div class="carousel"  ref="carouselBlenderRef" @scroll="checkScrollBlender">
            <img
              v-for="(img, index) in imagesBlender"
              :key="index"
              :src="img"
              alt="Proyecto Blender"
              class="carousel-image"
              @click="openLightbox(img)"
            />
          </div>

          <button 
            v-if="canScrollRightBlender" 
            class="arrow right" 
            @click="scrollRightBlender"
          >
            →
          </button>
        </div>
      </li>
      <li class="skill-item">
        <div class="skill-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Affinity_designer_icon_2019.png"
            alt="Affinity Designer"
            class="tech-icon"
          />
          <span>Affinity Designer </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Affinity_Photo_icon.png"
            alt="Affinity Photo"
            class="tech-icon"
          />
           <span>Affinity Photo</span>
        </div>
        <div>
          <p v-html="$t('skills.items.affinity.description')"></p>
        </div>
        <div class="carousel-container" :class="{ 'has-left': canScrollLeftAffinity, 'has-right': canScrollRightAffinity }">
          <button 
            v-if="canScrollLeftAffinity" 
            class="arrow left" 
            @click="scrollLeftAffinity"
          >
            ←
          </button>
          <div class="carousel"  ref="carouselAffinityRef" @scroll="checkScrollAffinity">
            <img
              v-for="(img, index) in imagesAffinity"
              :key="index"
              :src="img"
              alt="Proyecto Affinity"
              class="carousel-image"
              @click="openLightbox(img)"
            />
          </div>

          <button 
            v-if="canScrollRightAffinity" 
            class="arrow right" 
            @click="scrollRightAffinity"
          >
            →
          </button>
        </div>
      </li>
      <li class="skill-item">

        <div class="skill-info">
          <img
            src="https://pinokio.co/images/pinokio.png"
            alt="Pinokio"
            class="tech-icon"
          />
          <span>Pinokio</span>

        </div>
        <div>
          <p v-html="$t('skills.items.pinokio.description')"></p>
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
import { ref, onMounted, onUnmounted } from 'vue'
import Lightbox from './Lightbox.vue'

const imagesAffinity = [
  '/images/Affinity/diseno_carta_deadeye.webp',
  "/images/Affinity/diseno_carta_especial_double_shot.webp",
  "/images/Affinity/diseno_carta_heal.webp",
  "/images/Affinity/diseno_carta_shoot.webp",
  "/images/Affinity/disenos_carta_dodge.webp",
  "/images/Affinity/disenos_carta_reload.webp",
  "/images/Affinity/LogoLosGirosCon_Fondos.webp"
]

const imagesBlender = [
  '/images/Blender/Fox1.webp',
  '/images/Blender/Fox2.webp',
  '/images/Blender/Mat1.webp',
  '/images/Blender/Mat2.webp',
  '/images/Blender/Table.webp'
]

const selectedImage = ref(null)
const carouselBlenderRef = ref(null)
const canScrollLeftBlender = ref(false)
const canScrollRightBlender = ref(false)

const carouselAffinityRef = ref(null)
const canScrollLeftAffinity = ref(false)
const canScrollRightAffinity = ref(false)

const checkScrollBlender = () => {
  const el = carouselBlenderRef.value
  canScrollLeftBlender.value = el.scrollLeft > 0
  canScrollRightBlender.value = el.scrollLeft + el.clientWidth < el.scrollWidth
}

const checkScrollAffinity = () => {
  const el = carouselAffinityRef.value
  canScrollLeftAffinity.value = el.scrollLeft > 0
  canScrollRightAffinity.value = el.scrollLeft + el.clientWidth < el.scrollWidth
}

const scrollLeftBlender = () => {
  carouselBlenderRef.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRightBlender = () => {
  carouselBlenderRef.value.scrollBy({ left: 300, behavior: 'smooth' })
}

const scrollLeftAffinity = () => {
  carouselAffinityRef.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRightAffinity = () => {
  carouselAffinityRef.value.scrollBy({ left: 300, behavior: 'smooth' })
}
const openLightbox = (img) => {
  selectedImage.value = img
}
onMounted(() => {
  checkScrollBlender()
  checkScrollAffinity()
  window.addEventListener('resize', () => {
    checkScrollBlender()
    checkScrollAffinity()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    checkScrollBlender()
    checkScrollAffinity()
  })
})

</script>
