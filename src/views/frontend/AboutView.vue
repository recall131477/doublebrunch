<template>
<<<<<<< HEAD
  <section>
    <div class="relative h-[calc(100vh-140px)] border-primary border-b-2">
      <div class="flex h-[calc(100%-80px)]">
        <div class="w-[240px]">
          <div class="relative h-full">
            <h4 class="absolute bottom-5 left-5 text-20px text-primary">
              Since 2022
            </h4>
          </div>
        </div>
        <div class="relative flex-1">
          <div class="border-primary border-l-2 h-full">
            <h2 class="absolute bottom-[60px] left-[60px] text-80px text-white">
              關於午分之食
            </h2>
            <img
              src="@/assets/images/test.jpg"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div class="border-primary border-t-2 h-20 px-5">
        <p class="flex items-center text-primary h-full">
          加倍用心、加倍美味。
        </p>
      </div>
    </div>
  </section>
  <section>
    <ul>
      <li class="border-primary border-b-2">
        <div class="grid grid-cols-5 h-[200px]">
          <div class="col-span-2">
            <div class="border-primary border-r-2 h-full">
              <h2
                class="flex justify-center items-center h-full text-80px text-primary"
              >
                理念
              </h2>
            </div>
          </div>
          <div class="col-span-3">
            <div class="flex items-center h-full px-5">
              <p class="text-primary">
                「午分之食」構思來自「五分之十」。<br />
                五分之十以數學角度計算結果為2，猶如「Double」加倍的意思並藉此當作出發點。<br />
                對於食材的選用、食材的運用、對待客人都秉持加倍的心態對待，讓午分之食為你美好一天的開始注入元氣。
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2">
        <div class="grid grid-cols-5 grid-flow-row-dense h-[200px]">
          <div class="col-span-3">
            <div class="flex justify-end items-center h-full px-5">
              <p class="text-primary text-right">
                不論是早上忙碌趕著上班、放假想睡到自然醒、下午想來點悠閒時光，<br />
                我們提供多種不同餐點因應不同時段用餐的人，給你多樣味覺上的享受。
              </p>
            </div>
          </div>
          <div class="col-span-2">
            <div class="border-primary border-l-2 h-full">
              <h2
                class="flex justify-center items-center h-full text-80px text-primary"
              >
                特色
              </h2>
            </div>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2">
        <div class="grid grid-cols-5 h-[200px]">
          <div class="col-span-2">
            <div class="border-primary border-r-2 h-full">
              <h2
                class="flex justify-center items-center h-full text-80px text-primary"
              >
                精神
              </h2>
            </div>
          </div>
          <div class="col-span-3">
            <div class="flex items-center h-full px-5">
              <p class="text-primary">
                加倍用心、吃得安心。<br />
                加倍美味、征服你胃。
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
=======
  <div>關於我們</div>
  <Swiper :modules="modules" :slides-per-view="3" :space-between="50">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
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
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
