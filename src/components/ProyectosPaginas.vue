<template>
  <section>
    <h3 class="info-title">Páginas</h3>
    <ul class="project-list">


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
// Aplicar el efecto tilt a las imágenes con la clase 'tilt'


useTilt('.tilt')

// Aquí puedes definir los datos de tus proyectos
const proyectos = [
  {
    titulo: 'Mi Portafolio',
    descripcion: 'Mi portafolio personal donde muestro mis proyectos y habilidades.',
    imagen: 'https://via.placeholder.com/150',
    enlace: 'https://miportafolio.com'
  },
  {
    titulo: 'Blog de Tecnología',
    descripcion: 'Un blog donde comparto artículos sobre las últimas tendencias en tecnología.',
    imagen: 'https://via.placeholder.com/150',
    enlace: 'https://blogtecnologia.com',
    foto: 'https://avatars.githubusercontent.com/u/114741595?v=4'
  },
]
// Lo mismo pero usando un constructor
const proyectos_constructor = [
  new proyecto(
    'Mi Portafolio',
    'Mi portafolio personal donde muestro mis proyectos y habilidades.',
    'https://via.placeholder.com/150',
    'https://miportafolio.com'
  ),
  new proyecto(
    'Blog de Tecnología',
    'Un blog donde comparto artículos sobre las últimas tendencias en tecnología.',
    'https://via.placeholder.com/150',
    'https://blogtecnologia.com',
    'https://avatars.githubusercontent.com/u/114741595?v=4'
  ),
]

class proyecto {
  constructor(titulo, descripcion, imagen, enlace) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.enlace = enlace;
  }
}

</script>