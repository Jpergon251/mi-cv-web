<template>
  <header class="header">
    <nav class="nav main-nav">
        <router-link to="/">{{ $t('nav.button-list.0') }}</router-link>
        <router-link to="/experience">{{ $t('nav.button-list.1') }}</router-link>
        <router-link to="/education">{{ $t('nav.button-list.2') }}</router-link>
        <router-link to="/skills">{{ $t('nav.button-list.3') }}</router-link>
        <router-link to="/videogames">{{ $t('nav.button-list.5') }}</router-link>
        <router-link to="/certificates">{{ $t('nav.button-list.4') }}</router-link>

    </nav>
    <img src="https://avatars.githubusercontent.com/u/114741595?v=4" alt="Profile Picture" class="profile-picture">
    <nav class="nav social-nav">
      
        <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-p%C3%A9rez-gonz%C3%A1lez-977999330/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Jpergon251" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  </header>
</template>