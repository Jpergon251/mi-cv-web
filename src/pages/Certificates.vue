<template>
  <div class="certificates">
    <h1 class="title">
      {{ $t('certificates.title') }}
    </h1>

    <p class="description">
      {{ $t('certificates.description.paragraph1') }}
    </p>

    <ul class="course-list">
      <li
        class="course-item item-card"
        v-for="(certificate, index) in tm('certificates.items')"
        :key="index"
      >
        <section class="course-details">
          <h2 class="course-title">
            {{ certificate.title }}
          </h2>

          <span class="course-issuer">
            {{ certificate.issuer }}
          </span>

          <span class="course-date">
            {{ certificate.date }}
          </span>

          <p class="course-description">
            {{ certificate.description }}
          </p>

          <ul
            class="course-skills"
            v-if="certificate.courses"
          >
            <li
              class="skill"
              v-for="(course, i) in certificate.courses"
              :key="i"
            >
              {{ course.title }}
              
              <button class="see-cert-button" @click="openCertificate(course)">
                {{ $t('certificates.seecertbutton') }}
              </button>
            </li>
          </ul>
        </section>

        <section class="course-image">
          <a
            :href="certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="certificate.image"
              alt="Certificate Image"
              class="certificate-image image-scaled tilt"
            >
          </a>

          <button
            class="see-cert-button"
            @click="openCertificate(certificate)"
          >
            {{ $t('certificates.seecertbutton') }}
          </button>
        </section>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useTilt } from '../scripts/useTilt.js'
const { tm } = useI18n()
useTilt('.tilt')

function openCertificate(certificate) {
  window.open(certificate.file, '_blank')
}
</script>