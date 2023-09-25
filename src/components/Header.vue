<script setup>
import TopNav from './TopNav.vue'
import City from './City.vue'
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="container header__top-container">
        <div class="header__top-lside">
          <City />
        </div>

        <div class="header__top-rside">
          <TopNav />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__top {
  background-color: #f6f6f6;
}

.header__top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 0;
}
</style>