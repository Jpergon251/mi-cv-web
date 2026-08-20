<template>
  <section id="hero" class="hero">
    <div class="hero__container">

      <div class="hero__content">

        <p class="hero__greeting">
          {{ hero.greeting }}
        </p>

        <h1 class="hero__name">
          {{ hero.name }}
        </h1>

        <h2 class="hero__role">
          {{ hero.role }}
        </h2>

        <p class="hero__description">
          {{ hero.description }}
        </p>

        <p class="hero__location">
          {{ hero.location }}
        </p>

      </div>

      <a
        href="#about"
        class="hero__scroll"
        :aria-label="hero.scrollText"
      >
        <span class="hero__scroll-text">
          {{ hero.scrollText }}
        </span>

        <span
          class="hero__scroll-arrow"
          aria-hidden="true"
        >
          ↓
        </span>
      </a>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, getLocaleMessage } = useI18n()

const hero = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.hero
})
</script>