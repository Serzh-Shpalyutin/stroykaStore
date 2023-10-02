<script setup>

</script>

<template>
  <nav class="header__categories-nav">
    <ul class="list-reset header__categories-nav-list">
      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Акции</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Строительные материалы</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Керамическая плитка</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Краски</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Сантехника</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Напольные покрытия</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Инструменты</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Обои</router-link>
      </li>

      <li class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" to="/catalog/">Окна</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header__categories-nav-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header__categories-nav-link {
  color: #454950;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}

.header__categories-nav-link:hover {
  color: #171B24;
}

.header__categories-nav-link:active {
  color: #000;
}
</style>