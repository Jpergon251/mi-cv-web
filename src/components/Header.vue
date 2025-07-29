<template>
  <header class="header-component">
    <div class="profile-info">
      <img src="https://avatars.githubusercontent.com/u/114741595?v=4" alt="Foto de perfil" class="profile-image tilt" />

      <div class="profile-details">
        <!-- <h1 class="profile-name">Developer Snake</h1> -->
        <h1 class="profile-name">Jose Antonio Pérez González</h1>
        <h2 class="profile-title">Desarrollador especializado en Videojuegos y en aplicaciones web</h2>
      </div>  
    </div>

    <div class="contact-header">
      <h2 class="contact-title">Contacto y perfiles</h2>

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
          <a href="https://itch.io/profile/jpergon251" target="_blank" rel="noopener">
            <i class="fab fa-itch-io icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /></i> Itch.io
            
          </a>
        </li>
        <li class="contact-item">
          <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank" rel="noopener">
            <LinkedinIcon class="icon" /> LinkedIn
          </a>
        </li>
      </ul>

    </div>
  </header>
</template>

<script setup>
import { useTilt } from '../scripts/useTilt'

useTilt('.tilt')
</script>