<template>
  <div class="education">
    <h1 class="title">{{ $t('education.title') }}</h1>
    <ul class="education-list">
      <li class="education-item item-card" v-for="(edu, index) in tm('education.items')" :key="index">
        <img :src="edu.logo" alt="Institution Logo" class="institution-logo image-scaled tilt">
        <section class="education-details">
          <h2 class="education-degree">{{ edu.degree }}</h2>
          <p class="education-institution"><a :href="edu.link" target="_blank" rel="noopener noreferrer">{{ edu.institution }}</a> - <span class="education-location">{{ edu.location }}</span></p>
          <p class="education-duration">{{ edu.startDate }} - {{ edu.endDate }}</p>
        </section>
        
      </li>
    </ul>
  </div>
</template>

<script setup>  
import { useI18n } from 'vue-i18n'
import { useTilt } from '../scripts/useTilt.js';

const { tm } = useI18n()
useTilt('.tilt');
</script>