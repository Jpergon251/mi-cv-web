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
          :class="{ 'is-copied': isCopied }"
          :disabled="isCopied"
          @click="sharePage"
        >
          <i
            v-if="!isCopied"
            class="fas fa-share-nodes"
            aria-hidden="true"
          ></i>

          <i
            v-else
            class="fas fa-check"
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

let copyTimeout = null

const shareLabel = computed(() => {
  return t(
    isCopied.value
      ? 'footer.copied'
      : 'footer.share'
  )
})

// ==========================================================
// SHARE
// ==========================================================

const sharePage = async () => {
  const url = window.location.href

  // --------------------------------------------------------
  // NATIVE SHARE
  // --------------------------------------------------------

  if (
    typeof navigator.share === 'function' &&
    window.isSecureContext
  ) {
    try {
      await navigator.share({
        title: document.title,
        text: t('footer.shareText'),
        url
      })

      return
    } catch (error) {
      if (error.name === 'AbortError') {
        return
      }

      console.warn(
        '[CVFooter] Error al abrir el menú de compartir:',
        error
      )
    }
  }

  // --------------------------------------------------------
  // FALLBACK
  // --------------------------------------------------------

  try {
    await copyToClipboard(url)

    showCopied()
  } catch (error) {
    console.error(
      '[CVFooter] No se pudo copiar el enlace:',
      error
    )
  }
}

// ==========================================================
// COPY
// ==========================================================

const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)

    return
  }

  const textarea = document.createElement('textarea')

  textarea.value = text

  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'

  document.body.appendChild(textarea)

  textarea.focus()
  textarea.select()

  const successful = document.execCommand('copy')

  textarea.remove()

  if (!successful) {
    throw new Error('No se pudo copiar el enlace')
  }
}

// ==========================================================
// COPIED
// ==========================================================

const showCopied = () => {
  isCopied.value = true

  if (copyTimeout) {
    clearTimeout(copyTimeout)
  }

  copyTimeout = window.setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>