<template>
  <header
    class="cv-header"
    :class="{
      'is-scrolled': isScrolled,
      'is-menu-open': menuOpen
    }"
  >
    <div class="cv-header__container">

      <!-- =====================================================
           LOGO
      ====================================================== -->

      <button
        type="button"
        class="cv-header__logo"
        @click="scrollToSection('hero')"
      >
        José Antonio Pérez González
      </button>

      <!-- =====================================================
           DESKTOP NAVIGATION
      ====================================================== -->

      <nav class="cv-header__navigation">
        <button
          v-for="item in navigation.items"
          :key="item.target"
          type="button"
          @click="scrollToSection(item.target)"
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- =====================================================
           ACTIONS
      ====================================================== -->

      <div class="cv-header__actions">

        <!-- Language -->

        <div
          ref="languageMenuRef"
          class="cv-header__language-wrapper"
        >
          <button
            type="button"
            class="cv-header__language"
            :class="{ 'is-open': languageMenuOpen }"
            :aria-expanded="languageMenuOpen"
            aria-haspopup="menu"
            @click="toggleLanguageMenu"
          >
            <span>{{ locale.toUpperCase() }}</span>

            <ChevronUp
            class="cv-header__language-icon"
            aria-hidden="true"
            />
            <!-- <svg
              class="cv-header__language-icon"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> -->
          </button>

          <!-- Language dropdown -->

          <Transition name="language-dropdown">
            <div
              v-if="languageMenuOpen"
              class="cv-header__language-menu"
              role="menu"
            >
              <button
                v-for="language in languages"
                :key="language.code"
                type="button"
                class="cv-header__language-option"
                :class="{
                  'is-active': locale === language.code
                }"
                role="menuitem"
                @click="selectLanguage(language.code)"
              >
                <span>
                  {{ language.label }}
                </span>

                <span
                  v-if="locale === language.code"
                  class="cv-header__language-check"
                  aria-hidden="true"
                >
                  <Check class="icon"/>
                </span>
              </button>
            </div>
          </Transition>
        </div>

        <!-- Contact -->

        <button
          type="button"
          class="cv-header__contact"
          @click="scrollToContact"
        >
          {{ contactButton }}
        </button>

        <!-- Mobile menu -->

        <button
          type="button"
          class="cv-header__menu-button"
          :class="{ 'is-open': menuOpen }"
          :aria-expanded="menuOpen"
          :aria-label="navigation.menu"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </div>

    <!-- =====================================================
         MOBILE MENU
    ====================================================== -->

    <nav
      v-if="menuOpen"
      class="cv-header__mobile-menu"
    >
      <button
        v-for="item in navigation.items"
        :key="item.target"
        type="button"
        @click="scrollToSection(item.target)"
      >
        {{ item.label }}
      </button>
    </nav>
  </header>
</template>

<script setup>
import { Check, ChevronUp } from 'lucide-vue-next'
import {
  computed,
  onMounted,
  onUnmounted,
  ref
} from 'vue'

import { useI18n } from 'vue-i18n'

const {
  t,
  tm,
  locale
} = useI18n()

const menuOpen = ref(false)
const languageMenuOpen = ref(false)
const isScrolled = ref(false)

const languageMenuRef = ref(null)

// ==========================================================
// LANGUAGES
// ==========================================================

const languages = [
  {
    code: 'es',
    label: 'Español'
  },
  {
    code: 'en',
    label: 'English'
  }
]

// ==========================================================
// TRANSLATIONS
// ==========================================================

const navigation = computed(() => ({
  menu: t('navigation.menu'),
  items: tm('navigation.items')
}))

const contactButton = computed(() => {
  return t('contact.buttons.email')
})

// ==========================================================
// SCROLL
// ==========================================================

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// ==========================================================
// NAVIGATION
// ==========================================================

const scrollToSection = (target) => {
  const element = document.getElementById(target)

  if (!element) {
    console.warn(
      `[CVHeader] No existe una sección con id="${target}"`
    )

    return
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  closeMenu()
}

const scrollToContact = () => {
  scrollToSection('contact')
}

// ==========================================================
// MENU
// ==========================================================

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value

  if (menuOpen.value) {
    languageMenuOpen.value = false
  }
}

const closeMenu = () => {
  menuOpen.value = false
}

// ==========================================================
// LANGUAGE MENU
// ==========================================================

const toggleLanguageMenu = () => {
  languageMenuOpen.value = !languageMenuOpen.value

  if (languageMenuOpen.value) {
    menuOpen.value = false
  }
}

const selectLanguage = (language) => {
  locale.value = language

  languageMenuOpen.value = false
}

const closeLanguageMenu = () => {
  languageMenuOpen.value = false
}

// ==========================================================
// CLICK OUTSIDE
// ==========================================================

const handleClickOutside = (event) => {
  if (
    languageMenuRef.value &&
    !languageMenuRef.value.contains(event.target)
  ) {
    closeLanguageMenu()
  }
}

// ==========================================================
// ESCAPE
// ==========================================================

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeLanguageMenu()
    closeMenu()
  }
}

// ==========================================================
// LIFECYCLE
// ==========================================================

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  document.addEventListener(
    'click',
    handleClickOutside
  )

  document.addEventListener(
    'keydown',
    handleKeydown
  )

  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener(
    'scroll',
    handleScroll
  )

  document.removeEventListener(
    'click',
    handleClickOutside
  )

  document.removeEventListener(
    'keydown',
    handleKeydown
  )
})
</script>