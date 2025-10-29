<template>
  <section>
    <h2 class="info-title">{{ $t('languages-card.title') }}</h2>

    <!-- Añadir las lenguas que hablas -->
    <ul class="languages-list">
      <li class="language-item">
        <h3 class="language-name">{{ $t('languages-card.spanish.name') }}</h3>
        <p class="language-level">{{ $t('languages-card.spanish.level') }}</p>
        <p class="language-description" v-html="$t('languages-card.spanish.description')"></p>
      </li>
      <li class="language-item">
        <h3 class="language-name">{{ $t('languages-card.english.name') }}</h3>
        <p class="language-level">{{ $t('languages-card.english.level') }}</p>
        <p class="language-description" v-html="$t('languages-card.english.description')"></p>
      </li>
    </ul>
  
  </section>
</template>
