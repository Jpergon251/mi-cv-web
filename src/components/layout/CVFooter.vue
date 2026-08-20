<template>
  <footer class="cv-footer">
    <div class="cv-footer__container">

      <!-- =====================================================
           MAIN
      ====================================================== -->

      <div class="cv-footer__main">

        <div class="cv-footer__brand">
          <span class="cv-footer__name">
            José Antonio Pérez González
          </span>
        </div>

        <div class="cv-footer__technology">
          <span>
            {{ $t('footer.builtWith') }}
          </span>

          <span class="cv-footer__vue">
            <strong>Vue 3</strong>

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              alt="Vue.js"
            >
          </span>
        </div>

      </div>

      <!-- =====================================================
           BOTTOM
      ====================================================== -->

      <div class="cv-footer__bottom">

        <p class="cv-footer__copyright">
          © {{ currentYear }} José Antonio Pérez González
        </p>

        <button
          type="button"
          class="cv-footer__share"
          @click="sharePage"
        >
          <i
            class="fas fa-share-nodes"
            aria-hidden="true"
          ></i>

          <span>
            {{ shareLabel }}
          </span>
        </button>

      </div>

    </div>
  </footer>
</template>

<script setup>
import {
  computed,
  ref
} from 'vue'

import { useI18n } from 'vue-i18n'

const {
  t
} = useI18n()

const isCopied = ref(false)

const currentYear = new Date().getFullYear()

const shareLabel = computed(() => {
  return t(
    isCopied.value
      ? 'footer.copied'
      : 'footer.share'
  )
})

const sharePage = async () => {
  const shareData = {
    title: document.title,
    text: t('footer.shareText'),
    url: window.location.href
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }

    await navigator.clipboard.writeText(
      window.location.href
    )

    isCopied.value = true

    window.setTimeout(() => {
      isCopied.value = false
    }, 2000)

  } catch (error) {
    if (error.name !== 'AbortError') {
      isCopied.value = false
    }
  }
}
</script>