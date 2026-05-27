<template>
  <div class="videogames">
    <!-- Game Title -->
    <h1 class="title">{{ $t('videogames.title') }}</h1>
    <!-- Game Description -->
    <p class="description">{{ $t('videogames.description.paragraph1') }}</p>
    <!-- Game List -->
    <ul class="videogame-list">
      <!-- Game Items -->
      <li class="videogame-item item-card" v-for="(game, index) in tm('videogames.items')" :key="index">
        
        <!-- Game Image -->
        <img :src="game.image" alt="Game Image" class="game-image image-scaled tilt" />

        <!-- Game Info -->
        <section class="game-info">
          <h2 class="game-title"> <a :href="game.link" class="game-link" target="_blank" rel="noopener noreferrer">{{ game.name }}</a> </h2>
          <p class="game-description">{{ game.description }}</p>
        </section>

      </li>
    </ul>
  </div>
</template>

<script setup>  
import { useI18n } from 'vue-i18n';
import { useTilt } from '../scripts/useTilt.js';

const { tm } = useI18n();
useTilt('.tilt');
</script>