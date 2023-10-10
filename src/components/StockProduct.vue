<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink class="stock-product" to="/stock/product-name/">
    <article class="stock-product__inner">
      <div class="stock-product__lside">
        <span class="stock-product__stock">-25%</span>
        <img class="stock-product__img" src="@/assets/img/stock-product.png" alt="">
      </div>

      <div class="stock-product__rside">
        <h3 class="stock-product__title">
          Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
        </h3>

        <div class="stock-product__prices">
          <div class="stock-product__price">449 ₽</div>
          <div class="stock-product__old-price">499 ₽</div>
        </div>

        <button class="btn btn--product">В корзину</button>
      </div>
    </article>
  </RouterLink>
</template>

<style scoped>
.stock-product {
  display: inline-block;
  max-width: 572px;
  width: 100%;
  border: 1px solid #E8E9EA;
}

.stock-product__inner {
  display: flex;
}

.stock-product__lside {
  position: relative;
  max-width: 278px;
  width: 100%;
  border-right: 1px solid #E8E9EA;
}

.stock-product__img {
  max-width: 278px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.stock-product__stock {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  color: #171B24;
  padding: 4px 8px;
  background-color: #fff;
  border: 2px solid #FBE303;
}

.stock-product__rside {
  max-width: 294px;
  width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stock-product__title {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.stock-product__prices {
  display: flex;
  align-items: flex-end;
}

.stock-product__price {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  color: #171B24;
  margin-right: 8px;
}

.stock-product__old-price {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #8B8D92;
  text-decoration: line-through;
}
</style>