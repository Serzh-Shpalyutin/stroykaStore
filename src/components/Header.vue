<script setup>
import TopNav from './TopNav.vue'
import City from './City.vue'
import HeaderLogo from './icons/HeaderLogo.vue'
import CatalogIcon from './icons/CatalogIcon.vue'
import Search from './Search.vue'
import UserNav from './UserNav.vue'

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

    <div class="header__middle">
      <div class="container header__middle-container">
          <router-link class="logo" to="/">
            <HeaderLogo />
          </router-link>

        <div class="header__middle-rside">
          <router-link class="btn btn--catalog" to="/catalog/">
            <CatalogIcon class="catalog-icon" />
            Каталог
          </router-link>

          <Search />

          <UserNav />
        </div>
      </div>
    </div>

    <div class="header__bottom">

    </div>
  </header>
</template>

<style scoped>
.header__top {
  background-color: #f6f6f6;
}

.header__top-container,
.header__middle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__top-container {
  padding: 9px 15px;
}

.header__middle {
  padding: 16px 0px;
  border-bottom: 1px solid #E8E9EA;
}

.logo {
  display: inline-block;
  transition: transform 0.2s ease-in-out;
  margin-right: 15px;
}

.logo:hover {
  transform: rotate(3deg);
}

.header__middle-rside {
  max-width: 866px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}

</style>