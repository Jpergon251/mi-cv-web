<template>
  <section id="projects" class="projects-section">
    <div class="projects-section__container">

      <!-- ==================================================
           HEADER
      ================================================== -->

      <header class="projects-section__header">

        <span class="projects-section__number">
          {{ projects.number }}
        </span>

        <div class="projects-section__heading">

          <h2 class="projects-section__title">
            {{ projects.title }}
          </h2>

          <p class="projects-section__description">
            {{ projects.description }}
          </p>

        </div>

      </header>


      <!-- ==================================================
           CATEGORIES
      ================================================== -->

      <div class="projects-section__categories">

        <section
          v-for="(category, categoryKey) in projects.categories"
          :key="categoryKey"
          class="projects-section__category"
        >

          <!-- Category header -->

          <header class="projects-section__category-header">

            <span class="projects-section__category-label">
              {{ category.title }}
            </span>

            <span class="projects-section__category-count">
              {{ category.items.length }}
            </span>

          </header>


          <!-- Projects Carousel -->

          <div
            v-if="category.items.length"
            class="projects-section__carousel-wrapper"
          >
            <div
              class="projects-section__carousel"
              @touchstart="onTouchStart"
              @touchend="(e) => onTouchEnd(e, categoryKey, category.items.length)"
            >

              <!-- Left Arrow -->
              <button
                type="button"
                class="projects-section__carousel-arrow projects-section__carousel-arrow--prev"
                :aria-label="locale === 'es' ? 'Proyecto anterior' : 'Previous project'"
                @click="prevProject(categoryKey, category.items.length)"
              >
                <ChevronLeft :size="22" />
              </button>


              <!-- Carousel Track / Active Slide -->
              <div class="projects-section__carousel-viewport">

                <Transition
                  :name="slideDirections[categoryKey] === 'prev' ? 'project-slide-prev' : 'project-slide-next'"
                  mode="out-in"
                >
                  <article
                    v-if="getCurrentProject(category, categoryKey)"
                    :key="`${categoryKey}-${getActiveIndex(categoryKey, category.items.length)}-${cycleCounters[categoryKey] || 0}`"
                    class="projects-section__project"
                  >

                    <!-- Project number -->

                    <div class="projects-section__project-number">
                      <span>{{ String(getActiveIndex(categoryKey, category.items.length) + 1).padStart(2, '0') }}</span>
                      <span
                        v-if="category.items.length > 1"
                        class="projects-section__project-total"
                      >
                        / {{ String(category.items.length).padStart(2, '0') }}
                      </span>
                    </div>


                    <!-- Project image -->

                    <a
                      :href="getCurrentProject(category, categoryKey).link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="projects-section__image-link"
                      :aria-label="getCurrentProject(category, categoryKey).name"
                    >

                      <div class="projects-section__image-wrapper">

                        <img
                          :src="getAssetUrl(getCurrentProject(category, categoryKey).image)"
                          :alt="getCurrentProject(category, categoryKey).name"
                          class="projects-section__image"
                          loading="lazy"
                        >

                        <span class="projects-section__image-overlay">
                          {{ locale === 'es' ? 'Ver proyecto' : 'View project' }}
                        </span>

                      </div>

                    </a>


                    <!-- Project information -->

                    <div class="projects-section__content">

                      <div class="projects-section__content-header">

                        <div class="projects-section__title-group">
                          <h3 class="projects-section__project-title">
                            {{ getCurrentProject(category, categoryKey).name }}
                          </h3>

                          <span
                            v-if="getCurrentProject(category, categoryKey).tag"
                            class="projects-section__project-tag"
                          >
                            {{ getCurrentProject(category, categoryKey).tag }}
                          </span>
                        </div>

                        <a
                          :href="getCurrentProject(category, categoryKey).link"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="projects-section__project-link"
                          :aria-label="locale === 'es' ? `Abrir ${getCurrentProject(category, categoryKey).name}` : `Open ${getCurrentProject(category, categoryKey).name}`"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M7 17 17 7"
                            />
                            <path
                              d="M7 7h10v10"
                            />
                          </svg>
                        </a>

                      </div>

                      <p class="projects-section__project-description">
                        {{ getCurrentProject(category, categoryKey).description }}
                      </p>

                    </div>

                  </article>
                </Transition>

              </div>


              <!-- Right Arrow -->
              <button
                type="button"
                class="projects-section__carousel-arrow projects-section__carousel-arrow--next"
                :aria-label="locale === 'es' ? 'Proyecto siguiente' : 'Next project'"
                @click="nextProject(categoryKey, category.items.length)"
              >
                <ChevronRight :size="22" />
              </button>

            </div>


            <!-- Pagination dots (when > 1 item) -->

            <div
              v-if="category.items.length > 1"
              class="projects-section__dots"
            >
              <button
                v-for="(_, dotIndex) in category.items"
                :key="dotIndex"
                type="button"
                class="projects-section__dot"
                :class="{ 'projects-section__dot--active': dotIndex === getActiveIndex(categoryKey, category.items.length) }"
                :aria-label="`${locale === 'es' ? 'Ir al proyecto' : 'Go to project'} ${dotIndex + 1}`"
                @click="goToProject(categoryKey, dotIndex, category.items.length)"
              />
            </div>

          </div>


          <!-- Empty category -->

          <div
            v-else
            class="projects-section__empty"
          >
            <span>
              —
            </span>
          </div>

        </section>

      </div>

    </div>
  </section>
</template>


<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const { locale, getLocaleMessage } = useI18n()

const projects = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.projects
})

const currentIndices = reactive({})
const slideDirections = reactive({})
const cycleCounters = reactive({})

const getActiveIndex = (categoryKey, count) => {
  if (!count || count <= 0) return 0
  if (currentIndices[categoryKey] === undefined) {
    currentIndices[categoryKey] = 0
  }
  return ((currentIndices[categoryKey] % count) + count) % count
}

const getCurrentProject = (category, categoryKey) => {
  if (!category?.items?.length) return null
  const idx = getActiveIndex(categoryKey, category.items.length)
  return category.items[idx]
}

const nextProject = (categoryKey, count) => {
  if (!count) return
  slideDirections[categoryKey] = 'next'
  cycleCounters[categoryKey] = (cycleCounters[categoryKey] || 0) + 1
  currentIndices[categoryKey] = (getActiveIndex(categoryKey, count) + 1) % count
}

const prevProject = (categoryKey, count) => {
  if (!count) return
  slideDirections[categoryKey] = 'prev'
  cycleCounters[categoryKey] = (cycleCounters[categoryKey] || 0) + 1
  currentIndices[categoryKey] = (getActiveIndex(categoryKey, count) - 1 + count) % count
}

const goToProject = (categoryKey, targetIndex, count) => {
  if (!count) return
  const current = getActiveIndex(categoryKey, count)
  if (targetIndex === current) return
  slideDirections[categoryKey] = targetIndex > current ? 'next' : 'prev'
  cycleCounters[categoryKey] = (cycleCounters[categoryKey] || 0) + 1
  currentIndices[categoryKey] = targetIndex
}

// Touch swipe support
const touchStartX = ref(0)

const onTouchStart = (e) => {
  if (e.changedTouches?.[0]) {
    touchStartX.value = e.changedTouches[0].screenX
  }
}

const onTouchEnd = (e, categoryKey, count) => {
  if (!e.changedTouches?.[0]) return
  const touchEndX = e.changedTouches[0].screenX
  const diff = touchEndX - touchStartX.value
  if (Math.abs(diff) > 45) {
    if (diff < 0) {
      nextProject(categoryKey, count)
    } else {
      prevProject(categoryKey, count)
    }
  }
}

const getAssetUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
</script>

<style scoped>
.projects-section__carousel-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.projects-section__carousel {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  width: 100%;
}

.projects-section__carousel-viewport {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.projects-section__carousel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-round);
  border: 1px solid var(--color-border);
  background: var(--color-surface, var(--color-background));
  color: var(--color-text);
  cursor: pointer;
  z-index: 2;
  transition:
    background-color var(--transition-normal),
    color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-normal);
}

.projects-section__carousel-arrow:hover {
  background: var(--color-text);
  color: var(--color-background);
  border-color: var(--color-text);
  transform: scale(1.06);
}

.projects-section__carousel-arrow:active {
  transform: scale(0.94);
}

.projects-section__project-number {
  display: flex;
  align-items: baseline;
}

.projects-section__project-total {
  margin-left: 0.25rem;
  color: var(--color-text-muted);
  opacity: 0.6;
  font-size: 0.7rem;
}

.projects-section__title-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.projects-section__project-tag {
  display: inline-flex;
  align-items: center;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-round);
  border: 1px solid var(--color-border);
  background: var(--color-surface-muted);
  color: var(--color-text-muted);
}

.projects-section__dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: var(--space-lg);
}

.projects-section__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: var(--radius-round);
  background: var(--color-border);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.projects-section__dot:hover {
  background: var(--color-text-muted);
}

.projects-section__dot--active {
  width: 24px;
  border-radius: 4px;
  background: var(--color-text);
}

/* Transitions */
.project-slide-next-enter-active,
.project-slide-next-leave-active,
.project-slide-prev-enter-active,
.project-slide-prev-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.project-slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.project-slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.project-slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.project-slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@media (max-width: 650px) {
  .projects-section__carousel {
    position: relative;
    display: block;
  }

  .projects-section__carousel-arrow {
    position: absolute;
    top: 100px;
    transform: translateY(-50%);
    z-index: 10;
    width: 38px;
    height: 38px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-color: rgba(255, 255, 255, 0.25);
    color: #ffffff;
  }

  .projects-section__carousel-arrow:hover {
    background: rgba(0, 0, 0, 0.85);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.5);
  }

  .projects-section__carousel-arrow--prev {
    left: 10px;
  }

  .projects-section__carousel-arrow--next {
    right: 10px;
  }
}
</style>