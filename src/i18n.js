import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

export const i18n = createI18n({
  legacy: false, // importante para Vue 3 con Composition API
  locale: 'es',  // idioma por defecto
  fallbackLocale: 'en',
  messages: { en, es }
})