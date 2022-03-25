<template>
  <section>
    <ul class="flex flex-wrap justify-center border-primary border-b-2 py-5">
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >全部餐點</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >主餐系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >漢堡系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >炸物系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >拼盤系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >Pasta系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >沙拉系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >沙拉系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >吐司系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >湯品系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >飲品系列</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="text-14px text-primary opacity-50 p-[15px]"
          >甜點系列</a
        >
      </li>
    </ul>
    <div class="border-primary border-b-2 p-5">
      <ul class="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        <li>
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
            <div class="flex justify-between border-primary border-b-2 p-5">
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
        </li>
      </ul>
    </div>
    <ul class="flex justify-center h-[60px]">
      <li>
        <a
          href="javascript:;"
          class="flex justify-center items-center opacity-50 w-[60px] h-full"
        >
          <img
            src="@/assets/images/icon-arrow-left.svg"
            alt="icon-arrow-left"
          />
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          class="flex justify-center items-center text-primary opacity-50 w-[60px] h-full"
          >1</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="flex justify-center items-center text-primary opacity-50 w-[60px] h-full"
          >2</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="flex justify-center items-center text-primary opacity-50 w-[60px] h-full"
          >3</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          class="flex justify-center items-center opacity-50 w-[60px] h-full"
        >
          <img
            src="@/assets/images/icon-arrow-right.svg"
            alt="icon-arrow-right"
          />
        </a>
      </li>
    </ul>
  </section>
</template>
