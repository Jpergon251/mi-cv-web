<template>
  <section>
    <h3 class="info-title">Videojuegos</h3>
    <ul class="project-list">
      <li class="project-card">
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
              Midnight Gallery
            </a>

            <p class="project-description">
              Midnight Gallery es un plataformero 2D con elementos de puzle en el que encarnas a Kassia, una intrépida aventurera que explora los rincones más oscuros y misteriosos de la historia. Su objetivo es recuperar reliquias y tesoros olvidados para enriquecer un museo que busca preservar el legado de la humanidad. A lo largo de su viaje, Kassia deberá enfrentarse a desafíos físicos, acertijos y trampas que pondrán a prueba su ingenio y habilidades.
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
            Los Giros
          </a>
          <p class="project-description">
            Los Giros es un juego en el que el mundo está en 3D, pero tanto los enemigos como los escenarios están representados en 2D. Encarnas a John Colt, un cazarrecompensas que debe eliminar a todos los enemigos que se interponen en su camino.
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
          GlobRush
          </a>
          <p class="project-description">
            En este juego, los órganos del personaje juegan un papel clave en la dificultad. Cada órgano tiene un porcentaje de “oxígeno” y, si este baja de cierto nivel, se activan “efectos negativos” que aumentan la dificultad de la partida.
          </p>
        </div>
      </li>
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

useTilt('.tilt')
</script>