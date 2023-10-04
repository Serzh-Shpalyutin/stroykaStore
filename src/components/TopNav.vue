<script setup>
const topNavList = [
  {
    name: 'Бренды',
    link: '/catalog/'
  },
  {
    name: 'Доставка',
    link: '/catalog/'
  },
  {
    name: 'Возврат',
    link: '/catalog/'
  },
  {
    name: 'Документация',
    link: '/catalog/'
  },
  {
    name: 'Контакты',
    link: '/catalog/'
  },
]
</script>

<template>
  <nav class="top-nav">
    <ul class="list-reset top-nav__list">
      <li v-for="item in topNavList" :key="item.name" class="top-nav__item">
        <router-link class="top-nav__link" :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.top-nav__list {
  display: flex;
  align-items: center;
}

.top-nav__item:not(:last-child) {
  margin-right: 24px;
}

.top-nav__link {
  font-size: 15px;
  font-weight: 500;
  line-height: 145%;
  color: #5D6066;
  transition: opacity .2s ease-in-out;
}

.top-nav__link:hover {
  opacity: 0.7;
}

.top-nav__link:active {
  opacity: 0.5;
}
</style>