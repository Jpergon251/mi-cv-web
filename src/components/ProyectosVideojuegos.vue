<template>
  <section>
    <h3 class="info-title">Videojuegos</h3>
    <ul class="project-list">
      <li class="project-card">
        <img
          src="https://img.itch.zone/aW1nLzE4NzYzNzk0LnBuZw==/315x250%23c/VX%2FdVj.png"
          alt="Midnight Gallery portada"
          class="project-image tilt"
        />
          <div class="project-info">
            <a
              href="https://karambitstudios.itch.io/midnight-gallery"
              target="_blank"
              rel="noopener"
              class="project-title"
            >
              {{ $t('videogames.games[0].name') }}
            </a>

            <p class="project-description">
              {{ $t('videogames.games[0].description') }}
            </p>
          </div>
      </li>

      <li class="project-card">
        <img
          src="https://img.itch.zone/aW1nLzE5Mzg0MjU5LmpwZw==/315x250%23c/KoHPVr.jpg"
          alt="Los Giros portada"
          class="project-image tilt"
        />
        <div class="project-info">
          <a
            href="https://karambitstudios.itch.io/los-giros"
            target="_blank"
            rel="noopener"
            class="project-title"
          >
            {{ $t('videogames.games[1].name') }}
          </a>
          <p class="project-description">
            {{ $t('videogames.games[1].description') }}
          </p>
        </div>
      </li>
      <li class="project-card">
        <img src="https://img.itch.zone/aW1nLzE5NTMzNTYwLnBuZw==/315x250%23c/HtYpaL.png" alt="" class="project-image tilt" />
        <div class="project-info">
          <a
            href="https://francescovr.itch.io/globrush"
            target="_blank"
            rel="noopener"            
            class="project-title"
          >
          {{ $t('videogames.games[2].name') }}
          </a>
          <p class="project-description">
            {{ $t('videogames.games[2].description') }}
          </p>
        </div>
      </li>
      <!-- <li class="project-card">
        <img src="" alt="" class="project-image tilt" />
        <div class="project-info">
          <a
            href=""
            target="_blank"
            rel="noopener"            
            class="project-title"
          >
          </a>
          <p class="project-description">
          </p>
        </div>
      </li> -->
      <!-- Puedes añadir más proyectos igual -->
    </ul>
  </section>
</template>

<script setup>
import { useTilt } from '../scripts/useTilt'

useTilt('.tilt')
</script>