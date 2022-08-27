<template>
  <div v-html="info_item.content" style="padding: 20px; background-color: transparent;"></div>
</template>

<script setup>
import {reactive, onBeforeUnmount} from "vue";

const info_item = JSON.parse(localStorage.getItem('info_item'))

onBeforeUnmount(() => {
  localStorage.removeItem('info_item')
})

</script>

<style scoped>

</style>
