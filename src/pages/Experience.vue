<template>
    <div class="experience">
        <h1 class="title">{{ $t('experience.title') }}</h1>
        <ul class="experience-list">
            <li class="experience-item item-card" v-for="(job, index) in tm('experience.items')" :key="index">
                <img :src="job.logo" alt="Company Logo" class="company-logo image-scaled tilt">
                <section class="experience-info">
                    <h2 class="job-position">{{ job.position }}</h2>
                    <p class="job-company"><a :href="job.link" target="_blank" rel="noopener noreferrer">{{ job.company }}</a> - <span class="job-location">{{ job.location }}</span></p>
                    <p class="job-duration">{{ job.startDate }} - {{ job.endDate }}</p>
                    <section class="job-description">
                        <p class="paragraph">{{ job.description.paragraph1 }}</p>
                        <p class="paragraph">{{ job.description.paragraph2 }}</p>
                        <p class="paragraph">{{ job.description.paragraph3 }}</p>
                    </section>
                    <ul class="job-technologies">
                        <li v-for="(tech, rIndex) in job.technologies" :key="rIndex" class="technology">{{ tech }}</li>
                    </ul>
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