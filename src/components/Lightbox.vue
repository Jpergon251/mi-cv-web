<template>
  <div class="lightbox" @click.self="close">
    <img :src="image" alt="Imagen ampliada" />
    <button class="close-btn" @click="close">✕</button>
  </div>
</template>

<script setup>

const props = defineProps({
  image: String
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>