<template>
  <header class="header">

    <button
      class="burger-page-menu-button"
      @click="toggleMenu('links')"
    >
      <i class="fas fa-bars"></i>
      <span>{{ $t('nav.burgertext') }}</span>
    </button>

    <nav
    class="main-nav"
    :class="{ open: isLinkMenuOpen }"
    >
    <router-link to="/">
        {{ $t('nav.buttonlist.0') }}
    </router-link>

    <router-link to="/education">
        {{ $t('nav.buttonlist.2') }}
    </router-link>

    <router-link to="/experience">
        {{ $t('nav.buttonlist.1') }}
    </router-link>

    <router-link to="/skills">
        {{ $t('nav.buttonlist.3') }}
    </router-link>

    <router-link to="/videogames">
        {{ $t('nav.buttonlist.5') }}
    </router-link>

    <router-link to="/certificates">
        {{ $t('nav.buttonlist.4') }}
    </router-link>
    </nav>

    <img
      src="https://avatars.githubusercontent.com/u/114741595?v=4"
      alt="Profile Picture"
      class="profile-picture image-scaled tilt"
    >

    <button
      class="contact-menu-button"
      @click="toggleMenu('contact')"
    >
      <span class="contact-text">
        {{ $t('nav.concattext') }}
      </span>
      <i class="fas fa-comments"></i>
    </button>

    <nav
    class="social-nav"
    :class="{ open: isContactMenuOpen }"
    >
        <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank">
            <i class="fab fa-linkedin"></i>
            <span class="social-label">LinkedIn</span>
        </a>

        <a href="https://github.com/Jpergon251" target="_blank">
            <i class="fab fa-github"></i>
            <span class="social-label">GitHub</span>
        </a>

        <a href="mailto:joseperzant00@gmail.com">
            <i class="fas fa-envelope"></i>
            <span class="social-label">Email</span>
        </a>

        <a :href="`https://wa.me/${$t('home.whatsapp')}`">
            <i class="fab fa-whatsapp"></i>
            <span class="social-label">WhatsApp</span>
        </a>
    </nav>
    <div
    v-if="isLinkMenuOpen || isContactMenuOpen"
    class="header-overlay"
    @click="closeMenus"
    ></div>
  </header>
</template>

<script setup>  
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTilt } from '../scripts/useTilt.js';

useTilt('.tilt');

const isLinkMenuOpen = ref(false);
const isContactMenuOpen = ref(false);

const BREAKPOINT = 1200;

const toggleMenu = (menu) => {
  if (menu === 'links') {
    isLinkMenuOpen.value = !isLinkMenuOpen.value;
    isContactMenuOpen.value = false;
  }

  if (menu === 'contact') {
    isContactMenuOpen.value = !isContactMenuOpen.value;
    isLinkMenuOpen.value = false;
  }
};

const handleResize = () => {
  if (window.innerWidth > BREAKPOINT) {
    isLinkMenuOpen.value = false;
    isContactMenuOpen.value = false;
  }
};

const closeMenus = () => {
  isLinkMenuOpen.value = false;
  isContactMenuOpen.value = false;
};

watch(
  () => isLinkMenuOpen.value || isContactMenuOpen.value,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
  }
);

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>