<template>
  <section>
    <h2 class="info-title">{{ $t('frameworks.title') }}</h2>

    <ul class="competencies-list">
        <li class="competencies-item">
            <h3 class="frameworks-subtitle ">{{ $t('frameworks.subtitle.frameworks.name') }}</h3>
            <p class="frameworks-description">{{ $t('frameworks.subtitle.frameworks.description') }}</p>
            <ul class="frameworks-list">
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/vue.js" alt="Vue.js" class="frameworks-icon" />
                    Vue.js
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/react" alt="React" class="frameworks-icon" />
                    React
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/angular" alt="Angular" class="frameworks-icon" />
                    Angular
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/spring" alt="Spring" class="frameworks-icon" />
                    Springboot
                </li>


            </ul>
        </li>
        <li class="competencies-item">
            <h3 class="frameworks-subtitle">{{ $t('frameworks.subtitle.languages.name') }}</h3>
            <p class="frameworks-description">{{ $t('frameworks.subtitle.languages.description') }}</p>
            <ul class="frameworks-list">
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" class="frameworks-icon" />
                    JavaScript
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" class="frameworks-icon" />
                    TypeScript
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/python" alt="Python" class="frameworks-icon" />
                    Python
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" class="frameworks-icon" />
                    Java
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" class="frameworks-icon" />
                    C#
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/kotlin" alt="Kotlin" class="frameworks-icon" />
                    kotlin
                </li>
                <li class="frameworks-item">
                    <img src="https://cdn.simpleicons.org/php" alt="PHP" class="frameworks-icon">
                    PHP
                </li>

            </ul>
        </li>
    </ul>
    

    
  </section>
</template>

<script setup>

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
