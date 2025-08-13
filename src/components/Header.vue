<template>
  <header class="header-component">
    <div class="profile-info">
      <img src="https://avatars.githubusercontent.com/u/114741595?v=4" alt="Foto de perfil" class="profile-image tilt" />

      <div class="profile-details">
        <!-- <h1 class="profile-name">Developer Snake</h1> -->
        <h1 class="profile-name">Jose Antonio Pérez González</h1>
        <h2 class="profile-title">{{ $t('profile.title') }}</h2>
        <h2 class="profile-title">{{ $t('profile.languages') }}</h2>
      </div>  
    </div>

    <TranslateButton />
   
    <div class="contact-header">
      <h2 class="contact-title">{{ $t('contact-title') }}</h2>

      <ul class="contact-list">
        <li class="contact-item">
          <a href="mailto:joseperzant00@gmail.com" target="_blank" rel="noopener">
            <MailIcon class="icon" /> Gmail
          </a>
        </li>
        
        <li class="contact-item">
          <a href="https://github.com/Jpergon251" target="_blank" rel="noopener">
            <GithubIcon class="icon" /> GitHub
          </a>
        </li>
        <li class="contact-item">
          <a href="https://developersnake.itch.io/" target="_blank" rel="noopener">
            <i class="fab fa-itch-io icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /></i> Itch.io
            
          </a>
        </li>
        <li class="contact-item">
          <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank" rel="noopener">
            <LinkedinIcon class="icon" /> LinkedIn
          </a>
        </li>
        <li class="contact-item">
          <a href="tel:+34601251537" target="_blank" rel="noopener noreferrer">
            <PhoneCall class="icon" /> 
            +34 601251537
          </a>
        </li>
        <!-- <li class="contact-item">
          <a href="#" @click.prevent="descargarCV">
            <i class="fas fa-file-text icon"></i> Descargar CV
          </a>
        </li> -->
      </ul>

    </div>
  </header>
</template>

<script setup>
import { PhoneCall } from 'lucide-vue-next';
import { useTilt } from '../scripts/useTilt'
import TranslateButton from './TranslateButton.vue';

useTilt('.tilt')
</script>