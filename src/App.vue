<template>

<Header></Header>
<router-view class="page-content"></router-view>
<LanguageButton class="lang-btn"></LanguageButton>

</template>

<script setup>

import Header from './layout/Header.vue'
import LanguageButton from './components/LanguageButton.vue'

</script>
