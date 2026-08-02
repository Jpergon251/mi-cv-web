<template>

<Header/>
<router-view class="page-content"></router-view>
<LanguageButton class="lang-btn"></LanguageButton>
<Footer/>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './layout/Footer.vue'
import Header from './layout/Header.vue'
import LanguageButton from './components/LanguageButton.vue'
</script>
