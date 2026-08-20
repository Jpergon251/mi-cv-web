<template>
  <section id="about" class="about-section">
    <div class="about-section__container">

      <header class="about-section__header">
        <span class="about-section__number">
          {{ about.number }}
        </span>

        <h2 class="about-section__title">
          {{ about.title }}
        </h2>
      </header>

      <div class="about-section__content">

        <div class="about-section__description">
          <p
            v-for="(paragraph, index) in about.description"
            :key="index"
            class="about-section__paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="about-section__interests">
          <span
            v-for="(interest, index) in about.interests"
            :key="index"
            class="about-section__interest"
          >
            {{ interest }}
          </span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, getLocaleMessage } = useI18n()

const about = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.about
})
</script>