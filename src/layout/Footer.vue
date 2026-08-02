<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="built-with">
        {{ $t('footer.builtWith') }}
        <strong>Vue 3</strong>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js">
      </p>
      <p>
        {{ $t('footer.createdByStart') }}
        <a
          class="author-link"
          href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/"
          target="_blank"
          rel="noopener noreferrer"
        >José Antonio Pérez González</a>{{ $t('footer.createdByEnd') }}
      </p>
      <button class="share-button" type="button" @click="sharePage">
        <i class="fas fa-share-nodes" aria-hidden="true"></i>
        {{ shareLabel }}
      </button>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isCopied = ref(false)
const shareLabel = computed(() => t(isCopied.value ? 'footer.copied' : 'footer.share'))
const portfolioUrl = 'https://joseantonioperezcurriculum.netlify.app/'

const sharePage = async () => {
  const shareData = {
    title: document.title,
    text: t('footer.shareText'),
    url: portfolioUrl
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }

    await navigator.clipboard.writeText(portfolioUrl)
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
