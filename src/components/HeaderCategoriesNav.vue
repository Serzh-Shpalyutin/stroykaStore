<script setup>
const categoriesNav = [
  {
    name: 'Акции',
    link: '/catalog/'
  },
  {
    name: 'Строительные материалы',
    link: '/catalog/'
  },
  {
    name: 'Керамическая плитка',
    link: '/catalog/'
  },
  {
    name: 'Краски',
    link: '/catalog/'
  },
  {
    name: 'Сантехника',
    link: '/catalog/'
  },
  {
    name: 'Напольные покрытия',
    link: '/catalog/'
  },
  {
    name: 'Инструменты',
    link: '/catalog/'
  },
  {
    name: 'Обои',
    link: '/catalog/'
  },
  {
    name: 'Окна',
    link: '/catalog/'
  },
]
</script>

<template>
  <nav class="header__categories-nav">
    <ul class="list-reset header__categories-nav-list">
      <li v-for="item in categoriesNav" :key="item.name" class="header__categories-nav-item">
        <router-link class="header__categories-nav-link" :to="item.link">{{ item.name }}</router-link>
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