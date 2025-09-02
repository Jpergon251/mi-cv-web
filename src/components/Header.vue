<template>
  <header class="header-component">
    <div class="profile-info">
      <img src="https://avatars.githubusercontent.com/u/114741595?v=4" alt="Foto de perfil" class="profile-image tilt" />

      <div class="profile-details">
        <!-- <h1 class="profile-name">Developer Snake</h1> -->
        <h1 class="profile-name">Jose Antonio Pérez González</h1>
        <h2 class="profile-title">{{ $t('profile.title') }}</h2>
        <h2 class="profile-title">{{ $t('profile.languages') }}</h2>
      </div>  
    </div>

    <TranslateButton />
   
    <div class="contact-header">
      <h2 class="contact-title">{{ $t('contact-title') }}</h2>

      <ul class="contact-list">
        <li class="contact-item">
          <a href="mailto:joseperzant00@gmail.com" target="_blank" rel="noopener">
            <MailIcon class="icon" /> Gmail
          </a>
        </li>
        
        <li class="contact-item">
          <a href="https://github.com/Jpergon251" target="_blank" rel="noopener">
            <GithubIcon class="icon" /> GitHub
          </a>
        </li>
        <li class="contact-item">
          <a href="https://developersnake.itch.io/" target="_blank" rel="noopener">
            <i class="fab fa-itch-io icon"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /></i> Itch.io
            
          </a>
        </li>
        <li class="contact-item">
          <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank" rel="noopener">
            <LinkedinIcon class="icon" /> LinkedIn
          </a>
        </li>
        <li class="contact-item">
          <a href="tel:+34601251537" target="_blank" rel="noopener noreferrer">
            <PhoneCall class="icon" /> 
            +34 601251537
          </a>
        </li>
        <li class="contact-item">
          <a href="#" @click.prevent="descargarCV">
            <i class="fas fa-file-text icon"></i> Descargar CV
          </a>
        </li>
      </ul>

    </div>
  </header>
</template>

<script setup>
import { PhoneCall } from 'lucide-vue-next';
import { useTilt } from '../scripts/useTilt'
import TranslateButton from './TranslateButton.vue';
import { jsPDF } from "jspdf";

// Método para descargar el CV
const descargarCV = () => {
  const doc = new jsPDF();

  // === CABECERA ===
  doc.setFontSize(22);
  doc.text("José Antonio Pérez González", 20, 30);

  // Foto de perfil (a la derecha)
  const imgUrl = "https://avatars.githubusercontent.com/u/114741595?v=4";
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imgUrl;

  img.onload = () => {
    doc.addImage(img, "PNG", 160, 15, 40, 40); // derecha arriba

    // === TITULACIONES ===
    doc.setFontSize(14);
    doc.text("Técnico Superior en Desarrollo de Aplicaciones Web", 20, 45);
    doc.text("Especialista en Desarrollo de Videojuegos y Realidad Virtual", 20, 55);

    // === DESCRIPCIÓN PERSONAL ===
    doc.setFontSize(12);
    doc.text("Soy un desarrollador apasionado por la tecnología, la innovación y el aprendizaje constante.", 20, 70, { maxWidth: 170 });

    // === EXPERIENCIA / LO QUE HAGO ===
    doc.setFontSize(12);
    doc.text("Actualmente desarrollo videojuegos de manera independiente, centrado en la programación y el diseño de mecánicas. Busco oportunidades para crecer profesionalmente y aplicar mis conocimientos en proyectos reales.", 20, 85, { maxWidth: 170 });

    doc.setFontSize(12);
    doc.text("Tengo experiencia en backend y frontend, he practicado con lenguajes como Java, JavaScript, Python, PHP, TypeScript, Kotlin y C#. He utilizado frameworks como Spring Boot, Laravel, Vue y React.", 20, 105, { maxWidth: 170 });

    // === ENLACES / CONTACTO ===
    doc.setFontSize(12);
    doc.text("Para ver la informacion detallada tengo mi Curriculum Web", 20, 125);
    //color Azul subrayado
    doc.setTextColor(0, 102, 204);
    doc.setFont("Helvetica", "bold");
    doc.textWithLink("Curriculum Web", 20, 135, { url: "https://joseantonioperezcurriculum.netlify.app/" });

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(0, 0, 0); // Volver al color negro
    doc.text("+34 601 251 537", 20, 145);
    doc.textWithLink("joseperzant00@gmail.com", 20, 155, { url: "mailto:joseperzant00@gmail.com" });

    // Guardar PDF
    doc.save("CV_Jose_Antonio_Perez.pdf");
  };
};
useTilt('.tilt')
</script>