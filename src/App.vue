<template>
  <div class="container">
    <Header class="vue-component header-component"/>
    <div class="columns">
      <div class="column">
        <SobreMi class="vue-component sobre-mi-component card"/>
        <Estudios class="vue-component estudios-component card"/>
        <Objetivos class="vue-component objetivos-component card"/>
        <Disponibilidad class="vue-component disponibilidad-component card"/>
        <!-- Puedes añadir más tarjetas aquí -->
      </div>
      <div class="column">
        <ProyectosVideojuegos class="vue-component proyectos-component videogames-list card"/>
        <!-- <ProyectosPaginas class="vue-component proyectos-component pages-list card"/> -->
        <Contacto class="vue-component contacto-component card"/>
        <!-- Puedes añadir más tarjetas aquí -->
      </div>
    </div>
  </div>
</template>

<script setup>

import Header from './components/Header.vue'
import SobreMi from './components/SobreMi.vue'
import Contacto from './components/Contacto.vue'
import Estudios from './components/Estudios.vue'
import Objetivos from './components/Objetivos.vue'
import Disponibilidad from './components/Disponibilidad.vue'
import ProyectosVideojuegos from './components/ProyectosVideojuegos.vue'
import ProyectosPaginas from './components/ProyectosPaginas.vue'

</script>
