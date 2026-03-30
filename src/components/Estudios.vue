<template>
  <section>

    <h2 class="info-title">{{ $t('education.title') }}</h2>

    <!-- <p v-html="$t('education.description-1')"> -->
    <!-- </p> -->
    <!-- <p v-html="$t('education.description-2')"> -->
    <!-- </p> -->

    <h3
      v-for="(estudio, index) in estudios"
      :key="index"
      class="education-item"
    >
      {{ estudio.degree }} ({{ estudio.date }}) <span class="institution"><a href="https://iesrafaelalberti.es/">{{ estudio.institution }}</a></span>
      <ul class="education-skill-list">
        <li class="education-skill-item" v-for="(skill, skillIndex) in estudio.skills" :key="skillIndex">
          {{ skill }}
        </li>
      </ul>
    </h3>
    
</section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();
const estudios = computed(() => tm('education.items'));

</script>