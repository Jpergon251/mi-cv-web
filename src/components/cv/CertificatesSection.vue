<template>
  <section id="certificates" class="certificates-section">
    <div class="certificates-section__container">

      <!-- ==================================================
           HEADER
      ================================================== -->

      <header class="certificates-section__header">

        <span class="certificates-section__number">
          {{ certificates.number }}
        </span>

        <div class="certificates-section__heading">

          <h2 class="certificates-section__title">
            {{ certificates.title }}
          </h2>

          <p class="certificates-section__description">
            {{ certificates.description }}
          </p>

        </div>

      </header>


      <!-- ==================================================
           CERTIFICATES
      ================================================== -->

      <div class="certificates-section__list">

        <article
          v-for="(certificate, index) in certificates.items"
          :key="certificate.title"
          class="certificates-section__certificate"
        >

          <!-- ==================================================
               CERTIFICATE IMAGE
          ================================================== -->

          <div class="certificates-section__visual">

            <a
              :href="getAssetUrl(certificate.file)"
              target="_blank"
              rel="noopener noreferrer"
              class="certificates-section__image-link"
            >

              <div class="certificates-section__image-wrapper">

                <img
                  :src="getAssetUrl(certificate.image)"
                  :alt="certificate.title"
                  class="certificates-section__image"
                  loading="lazy"
                >

                <div class="certificates-section__image-overlay">

                  <div class="certificates-section__overlay-badge">
                    <ExternalLink :size="18" />

                    <span>
                      {{ certificates.buttons.view }}
                    </span>
                  </div>

                </div>

              </div>

            </a>

          </div>


          <!-- ==================================================
               CERTIFICATE CONTENT
          ================================================== -->

          <div class="certificates-section__content">

            <div class="certificates-section__meta">

              <span class="certificates-section__index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span class="certificates-section__date">
                {{ formatDate(certificate.date) }}
              </span>

            </div>


            <div class="certificates-section__main">

              <h3 class="certificates-section__certificate-title">
                {{ certificate.title }}
              </h3>

              <p class="certificates-section__issuer">
                {{ certificate.issuer }}
              </p>

              <p class="certificates-section__certificate-description">
                {{ certificate.description }}
              </p>


              <!-- ==================================================
                   SKILLS
              ================================================== -->

              <div
                v-if="certificate.skills?.length"
                class="certificates-section__skills"
              >

                <h4 class="certificates-section__subheading">
                  {{ skillsTitle }}
                </h4>

                <div class="certificates-section__skill-list">

                  <span
                    v-for="skill in certificate.skills"
                    :key="skill"
                    class="certificates-section__skill"
                  >
                    {{ skill }}
                  </span>

                </div>

              </div>


              <!-- ==================================================
                   ACTIONS
              ================================================== -->

              <div class="certificates-section__actions">

                <a
                  v-if="certificate.credentialUrl"
                  :href="certificate.credentialUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="certificates-section__button certificates-section__button--primary"
                >
                  <ExternalLink :size="16" />

                  <span>
                    {{ credentialButton }}
                  </span>
                </a>

                <a
                  v-if="certificate.file"
                  :href="getAssetUrl(certificate.file)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="certificates-section__button"
                >
                  <FileText :size="16" />

                  <span>
                    {{ certificates.buttons.view }}
                  </span>
                </a>

              </div>

            </div>

          </div>


          <!-- ==================================================
               COURSES
          ================================================== -->

          <div
            v-if="certificate.courses?.length"
            class="certificates-section__courses"
          >

            <div class="certificates-section__courses-header">

              <h4 class="certificates-section__subheading">
                {{ coursesTitle }}
              </h4>

              <span class="certificates-section__courses-count">
                {{ certificate.courses.length }}
              </span>

            </div>


            <div class="certificates-section__course-list">

              <a
                v-for="(course, courseIndex) in certificate.courses"
                :key="course.title"
                :href="getAssetUrl(course.file)"
                target="_blank"
                rel="noopener noreferrer"
                class="certificates-section__course"
              >

                <span class="certificates-section__course-number">
                  {{ String(courseIndex + 1).padStart(2, '0') }}
                </span>

                <span class="certificates-section__course-title">
                  {{ course.title }}
                </span>

                <ExternalLink
                  :size="16"
                  class="certificates-section__course-icon"
                />

              </a>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  ExternalLink,
  FileText
} from 'lucide-vue-next'

const { locale, getLocaleMessage } = useI18n()

const certificates = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.certificates
})

const skillsTitle = computed(() => {
  return locale.value === 'es'
    ? 'Competencias'
    : 'Skills'
})

const coursesTitle = computed(() => {
  return locale.value === 'es'
    ? 'Cursos incluidos'
    : 'Included courses'
})

const credentialButton = computed(() => {
  return locale.value === 'es'
    ? 'Verificación'
    : 'Verify certificate'
})

const formatDate = (date) => {
  if (!date) {
    return ''
  }

  return new Intl.DateTimeFormat(
    locale.value === 'es' ? 'es-ES' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  ).format(new Date(date))
}

const getAssetUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
</script>