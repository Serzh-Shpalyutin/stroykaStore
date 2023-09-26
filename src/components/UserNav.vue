<script setup>
import ProfileIcon from './icons/ProfileIcon.vue'
import OrdersIcon from './icons/OrdersIcon.vue'
import CartIcon from './icons/CartIcon.vue'
</script>

<template>
  <nav class="user-nav">
    <ul class="user-nav__list list-reset">
      <li class="user-nav__item">
        <router-link class="user-nav__link" to="/profile/">
          <ProfileIcon />
          <span>Профиль</span>
        </router-link>
      </li>

      <li class="user-nav__item">
        <router-link class="user-nav__link" to="/orders/">
          <OrdersIcon />
          <span>Заказы</span>
        </router-link>
      </li>

      <li class="user-nav__item">
        <router-link class="user-nav__link" to="/cart/">
          <CartIcon />
          <span>Корзина</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.user-nav {
  max-width: 246px;
  width: 100%;
}

.user-nav__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
}

.user-nav__link:hover {
  opacity: 0.7;
}

.user-nav__link:active {
  opacity: 0.5;
}

.user-nav__link span {
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  color: #454950;
}
</style>