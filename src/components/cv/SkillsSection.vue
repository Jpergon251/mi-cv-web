<template>
  <section id="skills" class="skills-section">
    <div class="skills-section__container">

      <!-- ==================================================
           HEADER
      ================================================== -->

      <header class="skills-section__header">

        <span class="skills-section__number">
          {{ skills.number }}
        </span>

        <div class="skills-section__heading">

          <h2 class="skills-section__title">
            {{ skills.title }}
          </h2>

          <p class="skills-section__description">
            {{ skills.description }}
          </p>

        </div>

      </header>


      <!-- ==================================================
           CATEGORIES
      ================================================== -->

      <div class="skills-section__categories">

        <article
          v-for="(category, categoryIndex) in skills.categories"
          :key="category.name"
          class="skills-section__category"
        >

          <!-- Category header -->

          <div class="skills-section__category-header">

            <span class="skills-section__category-number">
              {{ String(categoryIndex + 1).padStart(2, '0') }}
            </span>

            <h3 class="skills-section__category-title">
              {{ category.name }}
            </h3>

          </div>


          <!-- Technologies -->

          <div class="skills-section__technologies">

            <article
              v-for="technology in category.technologies"
              :key="technology.name"
              class="skills-section__technology"
            >

              <div class="skills-section__technology-icon">

                <img
                  :src="technology.logo"
                  :alt="technology.name"
                  loading="lazy"
                >

              </div>

              <span class="skills-section__technology-name">
                {{ technology.name }}
              </span>

            </article>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, getLocaleMessage } = useI18n()

const skills = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.skills
})
</script>