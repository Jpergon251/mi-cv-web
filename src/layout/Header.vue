<template>
  <header class="header">
    <button class="burger-page-menu-button" @click="isLinkMenuOpen = !isLinkMenuOpen">
      <i class="fas fa-bars"></i> <span class="burger-text">{{ $t('nav.burgertext') }}</span>
    </button>

    <nav class="link-menu-nav hidden-nav" v-if="isLinkMenuOpen">
        <router-link to="/">{{ $t('nav.buttonlist.0') }}</router-link>
        <router-link to="/education">{{ $t('nav.buttonlist.2') }}</router-link>
        <router-link to="/experience">{{ $t('nav.buttonlist.1') }}</router-link>
        <router-link to="/skills">{{ $t('nav.buttonlist.3') }}</router-link>
        <router-link to="/videogames">{{ $t('nav.buttonlist.5') }}</router-link>
        <router-link to="/certificates">{{ $t('nav.buttonlist.4') }}</router-link>

    </nav>

    <nav class="main-nav">
        <router-link to="/">{{ $t('nav.buttonlist.0') }}</router-link>
        <router-link to="/education">{{ $t('nav.buttonlist.2') }}</router-link>
        <router-link to="/experience">{{ $t('nav.buttonlist.1') }}</router-link>
        <router-link to="/skills">{{ $t('nav.buttonlist.3') }}</router-link>
        <router-link to="/videogames">{{ $t('nav.buttonlist.5') }}</router-link>
        <router-link to="/certificates">{{ $t('nav.buttonlist.4') }}</router-link>

    </nav>
    <img src="https://avatars.githubusercontent.com/u/114741595?v=4" alt="Profile Picture" class="profile-picture image-scaled tilt">
    
    <button class="contact-menu-button" @click="isContactMenuOpen = !isContactMenuOpen">
        <span class="concat-text">{{ $t('nav.concattext') }}</span> <i class="fas fa-comments"></i> 
    </button>

    <nav class="contact-menu-nav hidden-nav" v-if="isContactMenuOpen">
        <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/Jpergon251" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
        <a href="mailto:joseperzant00@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i>Gmail</a>
        <a :href="`https://wa.me/${$t('home.whatsapp')}`" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i>WhatsApp</a>
        <!-- <a href="https://friki-snake.itch.io/" target="_blank" rel="noopener noreferrer"><i class="fab fa-itch-io"></i>Itch.io</a> -->
    </nav>   
    
    <nav class="social-nav">
      
        <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Jpergon251" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a href="mailto:joseperzant00@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
        <a :href="`https://wa.me/${$t('home.whatsapp')}`" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
        <!-- <a href="https://friki-snake.itch.io/" target="_blank" rel="noopener noreferrer"><i class="fab fa-itch-io"></i></a> -->
    </nav>
  </header>
</template>

<script setup>  
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTilt } from '../scripts/useTilt.js';
const { tm } = useI18n();
useTilt('.tilt');

const isLinkMenuOpen = ref(false);
const isContactMenuOpen = ref(false);


</script>