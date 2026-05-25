<template>
  <div class="lang-selector">
    <button class="toggle" @click="open = !open">
        {{ $t('language.button') }}
    </button>

    <div v-if="open" class="menu">
      <button @click="setLang('es')">{{ $t('language.es') }}</button>
      <button @click="setLang('en')">{{ $t('language.en') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const open = ref(false)

function setLang(lang) {
  locale.value = lang
  open.value = false
}
</script>