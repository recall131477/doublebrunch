<template>
  <section>
    <div class="relative h-[calc(100vh-140px)] border-primary border-b-2">
      <div class="flex h-full">
        <div class="w-1/2">
          <img
            src="@/assets/images/bg-test.png"
            alt="測試圖片"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-1/2">
          <div class="p-[60px]">
            <span class="text-primary opacity-50">漢堡系列</span>
            <h2 class="text-40px text-primary mb-5">薯泥香雞</h2>
            <p class="text-primary mb-[30px]">
              雞肉排搭上清脆爽口的生菜及綿密的薯泥，將口感更提升一個檔次，不僅油而不膩，口感更是豐富。
            </p>
            <div class="mb-10">
              <span class="block text-24px text-primary opacity-50 mb-1"
                >原價 $80</span
              >
              <span class="block text-32px text-primary">特價 $60</span>
            </div>
            <div class="border-primary border-2">
              <div class="flex border-primary border-b-2 h-[60px]">
                <button type="button" class="relative w-[60px] h-full">
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                  ></span>
                </button>
                <input
                  type="text"
                  value="1"
                  class="text-primary text-center bg-secondary border-primary border-x-2 flex-1 w-full"
                />
                <button type="button" class="relative w-[60px] h-full">
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                  ></span>
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-4 h-[2px]"
                  ></span>
                </button>
              </div>
              <div class="h-[60px]">
                <button
                  type="button"
                  class="flex justify-center items-center w-full h-full"
                >
                  <img src="@/assets/images/icon-cart.svg" alt="icon-購物" />
                  <span class="text-primary ml-3">加入購物車</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex border-primary border-b-2">
      <div class="w-[calc(100%-240px)]">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-20"></div>
          <ul class="pl-10 pr-5 py-[30px]">
            <li class="mb-10">
              <h3 class="text-24px text-primary mb-5">餐點注意事項</h3>
              <p class="text-primary leading-loose">
                餐點皆為現點現做，為保食物品質，請儘早食用，隔餐勿食。<br />
                因冰品及甜點皆是手工製作，若當下未立即食用，請將其冷藏、冷凍，並於兩天內食用完畢。<br />
                餐點內的季節水果，會隨著每季做更換，若有疑慮可提前詢問。
              </p>
            </li>
            <li>
              <h3 class="text-24px text-primary mb-5">退款須知</h3>
              <p class="text-primary leading-loose">
                依《消費者保護法》及《食品安全衛生管理法》之規定，如遇餐點包裝瑕疵、餐點品項不符……等狀況，請立即聯絡本店，如情形屬實，皆可選擇重新製作或退款。
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            注意事項
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-row-reverse border-primary border-b-2">
      <div class="w-[calc(100%-240px)]">
        <div class="border-primary border-l-2">
          <div class="border-primary border-b-2 h-20"></div>
          <div class="p-5">
            <Swiper :slides-per-view="4" :space-between="20">
              <SwiperSlide>
                <div class="relative border-primary border-2">
                  <div class="absolute top-0 left-5 z-20">
                    <img src="@/assets/images/icon-tag.svg" alt="icon-標籤" />
                    <span
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                      >漢堡</span
                    >
                  </div>
                  <div class="relative pt-[100%]">
                    <img
                      src="@/assets/images/bg-test.png"
                      alt="測試圖片"
                      class="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="flex justify-between border-primary border-b-2 p-5"
                  >
                    <h4 class="text-20px text-primary">薯泥香雞</h4>
                    <span class="text-20px text-primary">$60</span>
                  </div>
                  <div class="flex">
                    <button type="button" class="relative w-[60px] h-[60px]">
                      <img
                        src="@/assets/images/icon-heart.svg"
                        alt="icon-愛心"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </button>
                    <div class="flex-1">
                      <button
                        type="button"
                        class="flex justify-center items-center border-primary border-l-2 w-full h-full"
                      >
                        <img
                          src="@/assets/images/icon-cart.svg"
                          alt="icon-購物"
                          class="w-4"
                        />
                        <span class="text-primary ml-3">加入購物車</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            相關餐點
          </h3>
        </div>
      </div>
    </div>
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
