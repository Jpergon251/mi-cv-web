<template>
  <div class="container">
    <Header class="vue-component header-component"/>
    <div class="columns">
      <div class="column">
        <SobreMi class="vue-component sobre-mi-component card"/>
        
        <!-- Puedes añadir más tarjetas aquí -->
      </div>
      <div class="column">
        <Proyectos class="vue-component proyectos-component card"/>
        <!-- Puedes añadir más tarjetas aquí -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import SobreMi from './components/SobreMi.vue'
import Proyectos from './components/Proyectos.vue'
import Contacto from './components/Contacto.vue'
</script>
