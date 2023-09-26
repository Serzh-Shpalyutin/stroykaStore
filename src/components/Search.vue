<script setup>
import SearchIcon from './icons/SearchIcon.vue'
</script>

<template>
  <div class="search">
    <form class="search__form">
      <input class="search__input" type="search" placeholder="Поиск">
      <button class="search__btn">
        <SearchIcon />
      </button>
    </form>
  </div>
</template>

<style scoped>
.search {
  max-width: 444px;
  width: 100%;
}

.search__form {
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 48px;
}

.search__input {
  padding: 16px 50px 16px 12px;
  max-width: 100%;
  width: 100%;
  height: 48px;
  border: none;
  border-bottom: 1px solid #D1D1D3;
  background-color: #f6f6f6;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 136%;
  color: #8B8D92;
}

.search__input::placeholder {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 136%;
  color: #8B8D92;
}

.search__btn {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}

.search__btn {
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>