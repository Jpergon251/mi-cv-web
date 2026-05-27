<template>
    <div class="home">
        <h1 class="title">{{ $t('home.title') }}</h1>
        <p class="description">{{ $t('home.description.paragraph1') }}</p>
        <p class="description">{{ $t('home.description.paragraph2') }}</p>
        <p class="description">{{ $t('home.description.paragraph3') }}</p>
        <section class="card personal-info">
            <h2>{{ $t('home.subtitle') }}</h2>
            <p class="name"><User class="personal-icon user" size="24" />{{ $t('home.name') }}</p>
            <p class="email"><Mail class="personal-icon mail" size="24" /> <a class="personal-link email" href="joseperzant00@gmail.com">{{ "joseperzant00@gmail.com" }}</a></p>
            <p class="phone"><i class="fa-brands fa-whatsapp personal-icon whatsapp" /> <a class="personal-link phone" :href="`https://wa.me/${$t('home.whatsapp')}`" target="_blank">{{ $t('home.phone') }}</a></p>
            <p class="location"><MapPin class="personal-icon mappin" size="24" /> {{ $t('home.location') }}</p>
        </section>
    </div>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css'
</script>


