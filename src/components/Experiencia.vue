<template>
  <section>
    <h2 class="info-title">{{ $t('experience.title') }}</h2>
    <ul class="experience-list">
      <li class="experience-item">
        <div class="experience-header">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQHctuQQkkvKrw/company-logo_200_200/company-logo_200_200/0/1685094608359/controlnetspain_logo?e=1757548800&v=beta&t=E4dI29pXT-1RFcoNsYhCbHIAM5X6gVFnXTzL-rlLuuY"
            alt="ControlNet"
            class="company-logo"
          />
          <div class="experience-info">
            <h3>{{ $t('experience.works.controlnet.job-title') }}</h3>
            <a href="https://www.linkedin.com/company/controlnetspain/" class="company-name link">{{ $t('experience.works.controlnet.name') }}</a>
            <p class="dates">{{ $t('experience.works.controlnet.date') }}</p>
            <p class="location">{{ $t('experience.works.controlnet.location') }}</p>
          </div>
        </div>

        <div class="skills-tags">
            <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale, getLocaleMessage } = useI18n()

    const tags = computed(() => {
      const messages = getLocaleMessage(locale.value)
      return messages.experience.works.controlnet.tags || []
    })

    return { tags }
  }
}

</script>