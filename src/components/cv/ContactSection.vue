<template>
  <section id="contact" class="contact-section">
    <div class="contact-section__container">

      <!-- =====================================================
           HEADER
      ====================================================== -->

      <header class="contact-section__header">
        <span class="contact-section__number">
          {{ contact.number }}
        </span>

        <div class="contact-section__heading">
          <h2 class="contact-section__title">
            {{ contact.title }}
          </h2>

          <p class="contact-section__description">
            {{ contact.description }}
          </p>
        </div>
      </header>

      <!-- =====================================================
           CONTENT
      ====================================================== -->

      <div class="contact-section__content">

        <!-- ===================================================
             CONTACT INFORMATION
        ==================================================== -->

        <div class="contact-section__information">

          <!-- Email -->

          <a
            :href="`mailto:${contact.email}`"
            class="contact-section__item"
          >
            <div class="contact-section__item-icon">
              <Mail
                :size="22"
                :stroke-width="1.5"
              />
            </div>

            <div class="contact-section__item-content">
              <span class="contact-section__item-label">
                Email
              </span>

              <span class="contact-section__item-value">
                {{ contact.email }}
              </span>
            </div>

            <ArrowUpRight
              class="contact-section__item-arrow"
              :size="18"
              :stroke-width="1.5"
            />
          </a>

          <!-- Location -->

          <div class="contact-section__item contact-section__item--location">
            <div class="contact-section__item-icon">
              <MapPin
                :size="22"
                :stroke-width="1.5"
              />
            </div>

            <div class="contact-section__item-content">
              <span class="contact-section__item-label">
                {{ locale === 'es' ? 'Ubicación' : 'Location' }}
              </span>

              <span class="contact-section__item-value">
                {{ contact.location }}
              </span>
            </div>
          </div>

          <!-- LinkedIn -->

          <a
            href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-section__item"
          >
            <div class="contact-section__item-icon">
              <Linkedin
                :size="22"
                :stroke-width="1.5"
              />
            </div>

            <div class="contact-section__item-content">
              <span class="contact-section__item-label">
                LinkedIn
              </span>

              <span class="contact-section__item-value">
                {{ contact.buttons.linkedin }}
              </span>
            </div>

            <ArrowUpRight
              class="contact-section__item-arrow"
              :size="18"
              :stroke-width="1.5"
            />
          </a>

          <!-- GitHub -->

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-section__item"
          >
            <div class="contact-section__item-icon">
              <Github
                :size="22"
                :stroke-width="1.5"
              />
            </div>

            <div class="contact-section__item-content">
              <span class="contact-section__item-label">
                GitHub
              </span>

              <span class="contact-section__item-value">
                {{ contact.buttons.github }}
              </span>
            </div>

            <ArrowUpRight
              class="contact-section__item-arrow"
              :size="18"
              :stroke-width="1.5"
            />
          </a>

        </div>

        <!-- ===================================================
             ACTIONS
        ==================================================== -->

        <div class="contact-section__actions">

          <!-- Email -->

          <a
            :href="`mailto:${contact.email}`"
            class="contact-section__button contact-section__button--primary"
          >
            <Mail
              :size="19"
              :stroke-width="1.7"
            />

            <span>
              {{ contact.buttons.email }}
            </span>

            <ArrowUpRight
              :size="17"
              :stroke-width="1.7"
            />
          </a>

          <!-- WhatsApp -->

          <a
            v-if="contact.phone"
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-section__button"
          >
            <MessageCircle
              :size="19"
              :stroke-width="1.7"
            />

            <span>
              {{ contact.buttons.whatsapp }}
            </span>

            <ArrowUpRight
              :size="17"
              :stroke-width="1.7"
            />
          </a>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  ArrowUpRight
} from 'lucide-vue-next'

const {
  locale,
  getLocaleMessage
} = useI18n()

// ==========================================================
// CONTACT DATA
// ==========================================================

const contact = computed(() => {
  const messages = getLocaleMessage(locale.value)

  return messages.contact ?? {}
})

// ==========================================================
// WHATSAPP
// ==========================================================

const whatsappUrl = computed(() => {
  if (!contact.value.phone) {
    return '#'
  }

  const phoneNumber = contact.value.phone.replace(/\D/g, '')

  return `https://wa.me/${phoneNumber}`
})
</script>