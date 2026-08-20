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


          <!-- Projects -->

          <div
            v-if="category.items.length"
            class="projects-section__list"
          >

            <article
              v-for="(project, index) in category.items"
              :key="project.name"
              class="projects-section__project"
            >

              <!-- Project number -->

              <span class="projects-section__project-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>


              <!-- Project image -->

              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="projects-section__image-link"
                :aria-label="project.name"
              >

                <div class="projects-section__image-wrapper">

                  <img
                    :src="project.image"
                    :alt="project.name"
                    class="projects-section__image"
                    loading="lazy"
                  >

                  <span class="projects-section__image-overlay">
                    Ver proyecto
                  </span>

                </div>

              </a>


              <!-- Project information -->

              <div class="projects-section__content">

                <div class="projects-section__content-header">

                  <h3 class="projects-section__project-title">
                    {{ project.name }}
                  </h3>

                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="projects-section__project-link"
                    :aria-label="`Abrir ${project.name}`"
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
                  {{ project.description }}
                </p>

              </div>

            </article>

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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, getLocaleMessage } = useI18n()

const projects = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.projects
})
</script>