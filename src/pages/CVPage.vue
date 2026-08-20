<template>
  <div class="cv-page">
    
    <CVHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </main>

    <CVFooter />
  </div>
</template>

<script setup>
import CVHeader from '../components/layout/CVHeader.vue'
import HeroSection from '../components/cv/HeroSection.vue'
import AboutSection from '../components/cv/AboutSection.vue'
import JourneySection from '../components/cv/JourneySection.vue'
import SkillsSection from '../components/cv/SkillsSection.vue'
import ProjectsSection from '../components/cv/ProjectsSection.vue'
import CertificatesSection from '../components/cv/CertificatesSection.vue'
import ContactSection from '../components/cv/ContactSection.vue'
import CVFooter from '../components/layout/CVFooter.vue'
</script>