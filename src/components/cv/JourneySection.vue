<template>
  <section id="journey" class="journey-section">
    <div class="journey-section__container">

      <!-- Section header -->
      <header class="journey-section__header">
        <span class="journey-section__number">
          {{ journey.number }}
        </span>

        <div class="journey-section__heading">
          <h2 class="journey-section__title">
            {{ journey.title }}
          </h2>

          <p class="journey-section__description">
            {{ journey.description }}
          </p>
        </div>
      </header>

      <!-- Timeline -->
      <div class="journey-section__timeline">

        <article
          v-for="(item, index) in journey.items"
          :key="`${item.type}-${index}`"
          class="journey-section__item"
          :class="`journey-section__item--${item.type}`"
        >

          <!-- Timeline marker -->
          <div class="journey-section__marker">
            <BriefcaseBusiness
              v-if="item.type === 'experience'"
              :size="18"
              :stroke-width="1.8"
              class="journey-section__marker-icon"
            />

            <GraduationCap
              v-else
              :size="18"
              :stroke-width="1.8"
              class="journey-section__marker-icon"
            />
          </div>

          <!-- Card -->
          <div class="journey-section__card">

            <!-- Date / type -->
            <div class="journey-section__meta">
              <span class="journey-section__date">
                {{ item.startDate }} — {{ item.endDate }}
              </span>

              <span class="journey-section__type">
                {{
                  item.type === 'experience'
                    ? 'Experiencia'
                    : 'Educación'
                }}
              </span>
            </div>

            <!-- Main content -->
            <div class="journey-section__main">

              <!-- Institution / company -->
              <div class="journey-section__institution">

                <a
                  v-if="item.link"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="journey-section__institution-link"
                >
                  <img
                    v-if="item.logo"
                    :src="item.logo"
                    :alt="item.institution || item.company"
                    class="journey-section__logo"
                  >

                  <span>
                    {{ item.institution || item.company }}
                  </span>
                </a>

                <div
                  v-else
                  class="journey-section__institution-link"
                >
                  <img
                    v-if="item.logo"
                    :src="item.logo"
                    :alt="item.institution || item.company"
                    class="journey-section__logo"
                  >

                  <span>
                    {{ item.institution || item.company }}
                  </span>
                </div>

              </div>

              <!-- Position / degree -->
              <h3 class="journey-section__item-title">
                {{ item.title }}
              </h3>

              <!-- Location -->
              <p class="journey-section__location">
                {{ item.location }}
              </p>

              <!-- Description -->
              <div
                v-if="
                  Array.isArray(item.description) &&
                  item.description.length
                "
                class="journey-section__details"
              >
                <p
                  v-for="(description, descriptionIndex) in item.description"
                  :key="descriptionIndex"
                  class="journey-section__paragraph"
                >
                  {{ description }}
                </p>
              </div>

              <div
                v-else-if="item.description"
                class="journey-section__details"
              >
                <p class="journey-section__paragraph">
                  {{ item.description }}
                </p>
              </div>

              <!-- Technologies -->
              <div
                v-if="item.technologies?.length"
                class="journey-section__technologies"
              >
                <span
                  v-for="technology in item.technologies"
                  :key="technology"
                  class="journey-section__technology"
                >
                  {{ technology }}
                </span>
              </div>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  BriefcaseBusiness,
  GraduationCap
} from 'lucide-vue-next'

const { locale, getLocaleMessage } = useI18n()

const journey = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.journey
})
</script>