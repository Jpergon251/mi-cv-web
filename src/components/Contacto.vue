<template>
  <!-- Esta tarjeta solo visible en móvil -->
  <section class="contact-mobile card">
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
            <a href="https://www.linkedin.com/in/joseperzant" target="_blank" rel="noopener">
              <LinkedinIcon class="icon" /> LinkedIn
            </a>
          </li>
        </ul>

      </div>
  </section>
</template>
