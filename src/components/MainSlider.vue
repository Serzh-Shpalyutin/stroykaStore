<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const components = { Swiper, SwiperSlide };
const modules = [Navigation, Pagination, Autoplay];

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const slides = ref([
  {
    img: '/src/assets/img/slide1.jpg',
    title: 'Специальные предложения',
    subtitle: 'на строительные материалы и товары для ремонта',
    linkText: 'Подробнее',
    linkPath: '/catalog/',
  },
  {
    img: '/src/assets/img/slide2.jpg',
    title: 'Распродажа инструментов',
    subtitle: '«СтройкаСтор» стремится сделать условия покупки максимально выгодными для каждого покупателя, поэтому на сайте регулярно появляются товары со скидкой',
    linkText: 'Подробнее',
    linkPath: '/catalog/',
  },
]);

</script>

<template>
  <section class="main-slider">
    <swiper 
    class="slider" 
    :modules="modules"
      :navigation="{ nextEl: '.slider__content-btn--next', prevEl: '.slider__content-btn--prev' }"
      :pagination="{ clickable: true }" 
      :autoplay="{ delay: 5000 }" 
      :slides-per-view="1" :space-between="50"
      @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="slide in slides" :key="slide.img" class="slider__slide">
        <div class="slider__slide-item" :style="{ backgroundImage: `url(${slide.img})` }">
          <div class="container">
            <div class="slider__content">
              <div class="slider__content-lside">
                <h1 class="slider__title">
                  {{ slide.title }}
                  <span>{{ slide.subtitle }}</span>
                </h1>

                <router-link class="btn btn--default" :to="slide.linkPath">{{ slide.linkText }}</router-link>
              </div>

              <div class="slider__content-rside">
                <div class="slider__content-navigation">
                  <button class="slider__content-btn slider__content-btn--prev" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5" stroke="#454950" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M12 5L5 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </button>

                  <button class="slider__content-btn slider__content-btn--next" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>
.main-slider {
  max-width: 1390px;
  width: 100%;
  margin: 40px auto 0;
  padding: 0 15px;
}

.slider__slide-item {
  max-width: 100%;
  width: 100%;
  min-height: 420px;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.slider__content {
  padding: 40px 0;
  min-height: 340px;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.slider__content-lside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slider__title {
  max-width: 570px;
  width: 100%;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #171B24;
}

.slider__title span {
  display: block;
  margin-top: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: #454950;
}

.slider__content-rside {
  margin-top: auto;
}

.slider__content-navigation {
  display: flex;
  gap: 12px;
}

.slider__content-btn {
  box-sizing: border-box;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D1D1D3;
  background-color: #FFF;
  cursor: pointer;
}

.slider__content-btn--prev:active svg {
  transform: translateX(-3px);
}

.slider__content-btn--next:active svg {
  transform: translateX(3px);
}

.slider__content-btn.swiper-button-disabled {
  opacity: 0.5;
}

.main-slider .swiper-pagination {
  display: none;
}
</style>