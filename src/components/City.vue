<script setup>
import Marker from './icons/Marker.vue'
import { useCityStore } from '../stores/CityStore';

const cityStore = useCityStore();

// Создаём флаг для отслеживания выполнения запроса
let isDataFetched = false;

async function fetchDataOnce() {
  if (!isDataFetched) {
    await cityStore.fetchUserCity();
    isDataFetched = true; // Устанавливаем флаг в true после выполнения запроса
  }
}

// Вызываем эту функцию один раз при загрузке сайта
fetchDataOnce();
</script>

<template>
  <div class="city">
    <Marker />
    <span>{{ cityStore.city }}</span>
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