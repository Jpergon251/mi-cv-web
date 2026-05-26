<template>
  <div class="skills">
    <h1 class="title">{{ $t('skills.title') }}</h1>
    <p class="description">{{ $t('skills.description.paragraph1') }}</p>
    <ul class="skills-list">
      <li class="skill-item item-card" v-for="(skill, index) in tm('skills.items')" :key="index">
        <h2 class="skill-name">{{ skill.name }}</h2>
        <ul class="skill-techs">
          <li class="tech-item" v-for="(tech, dIndex) in skill.technologies" :key="dIndex">
            <img :src="tech.logo" :alt="tech.name" class="tech-logo">
            <span class="tech-name">{{ tech.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>  
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

</script>