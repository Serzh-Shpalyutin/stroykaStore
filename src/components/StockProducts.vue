<script setup>
import { RouterLink } from 'vue-router'
import StockProduct from '@/components/StockProduct.vue'
</script>

<template>
  <section class="stock-products section-margin">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title stock-products__title">Акции</h2>

        <RouterLink class="btn btn--transparent section-head__link" to="/catalog/">
          Все акции
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </RouterLink>
      </div>

      <div class="stock-products__grid">
        <StockProduct />
        <StockProduct />
        <StockProduct />
        <StockProduct />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-head__link {
  display: flex;
}

.section-head__link svg path {
  transition: all 0.2s ease-in-out;
}

.section-head__link:hover svg path {
  stroke: #fff;
}

.stock-products__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>