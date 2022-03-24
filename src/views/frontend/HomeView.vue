<template>
  <section>
    <div class="relative flex h-[calc(100vh-144px)]">
      <div class="w-[240px]">
        <div class="border-primary border-r-2 border-b-2 h-[calc(100%-5rem)]">
          <div class="flex flex-col justify-center items-center h-full">
            <h2 class="text-48px text-primary">煎蛋吐司</h2>
            <span class="text-32px text-primary">$40</span>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <img
          src="@/assets/images/test.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <router-link
        to="/product"
        class="absolute bottom-0 left-0 flex justify-center items-center text-primary border-primary border-r-2 w-[240px] h-20"
        >立即點餐</router-link
      >
    </div>
    <Swiper :modules="modules" :slides-per-view="3" :space-between="50">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
