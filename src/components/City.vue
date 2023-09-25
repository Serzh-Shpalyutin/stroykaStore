<script setup>
import Marker from './icons/Marker.vue'
</script>

<template>
  <div class="city">
    <Marker />
    <span>Москва</span>
  </div>
</template>

<style scoped>
.city {
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
}

.city:hover {
  opacity: 0.7;
}

.city span {
  display: inline-block;
  margin-left: 8px;
  font-size: 15px;
  font-weight: 500;
  line-height: 145%;
  color: #5D6066;
}
</style>