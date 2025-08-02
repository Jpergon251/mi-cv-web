<template>
  <div class="language-selector-fixed">
    <label for="language-select" class="language-label">{{ $t('translate-button') }} <Languages class="language-icon" /></label>
    <select v-model="locale" @change="changeLanguage" id="language-select" class="language-select">
      <option value="es" class="language-option">Español</option>
      <option value="en" class="language-option">English</option>
    </select>
  </div>
</template>

<script setup>
import { Languages } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLanguage = (e) => {
  locale.value = e.target.value
}
</script>