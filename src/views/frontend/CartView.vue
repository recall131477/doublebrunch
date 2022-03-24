<template>
  <ProgressBar></ProgressBar>
  <section class="cart">
    <ul>
      <li class="flex border-primary border-b-2 px-5 py-2.5">
        <div class="w-1/4">
          <span class="text-primary">商品資訊</span>
        </div>
        <div class="w-1/4">
          <span class="text-primary">單件價格</span>
        </div>
        <div class="w-1/4">
          <span class="text-primary">數量</span>
        </div>
        <div class="w-1/4">
          <span class="text-primary">小計</span>
        </div>
      </li>
      <li
        class="relative flex items-center border-primary border-b-2 px-5 py-2.5"
      >
        <div class="w-1/4">
          <div class="flex items-center">
            <img
              src="@/assets/images/bg-test.png"
              alt="測試圖片"
              class="w-20 mr-5"
            />
            <span class="text-primary">薯泥香雞</span>
          </div>
        </div>
        <div class="w-1/4">
          <span class="text-primary">$60</span>
        </div>
        <div class="w-1/4">
          <div class="flex border-primary border-2 w-[200px] h-[40px]">
            <a href="javascript:;" class="relative w-[40px] h-full">
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-[2px]"
              ></span>
            </a>
            <input
              type="text"
              value="1"
              class="text-primary text-center bg-secondary border-primary border-x-2 flex-1 w-full"
            />
            <a href="javascript:;" class="relative w-[40px] h-full">
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-[2px]"
              ></span>
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-3 h-[2px]"
              ></span>
            </a>
          </div>
        </div>
        <div class="w-1/4">
          <span class="text-primary">小計</span>
        </div>
        <a
          href="javascript:;"
          class="absolute top-1/2 right-5 -translate-y-1/2 w-6 h-6"
        >
          <span
            class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-45 w-4 h-[2px]"
          >
          </span>
          <span
            class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rotate-45 w-4 h-[2px]"
          >
          </span>
        </a>
      </li>
      <li
        class="relative flex items-center border-primary border-b-2 px-5 py-2.5"
      >
        <div class="w-1/4">
          <div class="flex items-center">
            <img
              src="@/assets/images/bg-test.png"
              alt="測試圖片"
              class="w-20 mr-5"
            />
            <span class="text-primary">薯泥香雞</span>
          </div>
        </div>
        <div class="w-1/4">
          <span class="text-primary">$60</span>
        </div>
        <div class="w-1/4">
          <div class="flex border-primary border-2 w-[200px] h-[40px]">
            <a href="javascript:;" class="relative w-[40px] h-full">
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-[2px]"
              ></span>
            </a>
            <input
              type="text"
              value="1"
              class="text-primary text-center bg-secondary border-primary border-x-2 flex-1 w-full"
            />
            <a href="javascript:;" class="relative w-[40px] h-full">
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-[2px]"
              ></span>
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-3 h-[2px]"
              ></span>
            </a>
          </div>
        </div>
        <div class="w-1/4">
          <span class="text-primary">小計</span>
        </div>
        <a
          href="javascript:;"
          class="absolute top-1/2 right-5 -translate-y-1/2 w-6 h-6"
        >
          <span
            class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-45 w-4 h-[2px]"
          >
          </span>
          <span
            class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rotate-45 w-4 h-[2px]"
          >
          </span>
        </a>
      </li>
    </ul>
    <div class="flex border-primary border-b-2 h-[60px]">
      <div class="w-1/2">
        <div class="flex h-full">
          <div class="w-1/2">
            <a
              href="javascript:;"
              class="flex justify-center items-center text-primary border-primary border-r-2 h-full"
              >清空購物車</a
            >
          </div>
          <div class="w-1/2">
            <a
              href="javascript:;"
              class="flex justify-center items-center text-primary border-primary border-r-2 h-full"
            >
              <img src="@/assets/images/icon-cart.svg" alt="icon-購物" />
              <span>繼續購物</span>
            </a>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex h-full">
          <input
            type="text"
            placeholder="輸入優惠券代碼"
            class="text-primary bg-secondary w-full flex-1 px-5"
          />
          <button type="button" class="text-white bg-primary px-5">
            套用優惠券
          </button>
        </div>
      </div>
    </div>
    <div class="text-right p-5">
      <p class="text-20px text-primary opacity-50 mb-2">總計金額 : $420</p>
      <p class="text-24px text-primary mb-5">折扣後金額 : $320</p>
      <a
        href="javascript:;"
        class="inline-block text-white bg-primary px-12 py-[18px]"
        >前往結帳</a
      >
    </div>
  </section>
</template>

<script>
import ProgressBar from '@/components/frontend/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
};
</script>
