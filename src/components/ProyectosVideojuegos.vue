<template>
  <section>
    <h3 class="info-title">{{ $t('videogames.title') }}</h3>
    <ul class="project-list">
      <!-- <li class="project-card">
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
              {{ $t('videogames.games[0].name') }} <img src="/src/assets/icons/godot-icon.png" alt="Godot" class="engine-icon" />
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
            {{ $t('videogames.games[1].name') }} <img src="/src/assets/icons/unity-icon.png" alt="Unity" class="engine-icon" />
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
          {{ $t('videogames.games[2].name') }} <img src="/src/assets/icons/godot-icon.png" alt="Godot" class="engine-icon" />
          </a>
          <p class="project-description">
            {{ $t('videogames.games[2].description') }}
          </p>
        </div>
      </li> -->
      <li class="project-card" v-for="(game, index) in games" :key="index">
        <img :src="game.image" :alt="game.name + ' portada'" class="project-image tilt" />
        <div class="project-info">
          <a
            :href="game.url"
            target="_blank"
            rel="noopener"            
            class="project-title"
          >
            {{ game.name }} <img :src="`/icons/${game.engine.toLowerCase()}-icon.png`" :alt="game.engine" class="engine-icon" />
          </a>
          <p class="project-description" v-html="game.description">
          </p>
        </div>
      </li>
      <!-- Puedes añadir más proyectos igual -->
    </ul>
  </section>
</template>

<script setup>
import { Icon } from 'lucide-vue-next';
import { useTilt } from '../scripts/useTilt'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

// Convertimos el array traducido a datos reactivos
const games = computed(() => tm('videogames.games'))


useTilt('.tilt')
</script>