<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="site-container">
    <Header />
    <RouterView />
    <footer>footer</footer>
  </div>
</template>
