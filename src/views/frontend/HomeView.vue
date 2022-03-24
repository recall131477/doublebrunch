<template>
  <section>
    <div class="relative flex h-[calc(100vh-140px)] border-primary border-b-2">
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-[calc(100%-5rem)]">
          <div class="flex flex-col justify-center items-center h-full">
            <h2
              class="writing-mode-ver-lr text-48px text-primary tracking-[0.3em] mb-5"
            >
              煎蛋吐司
            </h2>
            <span class="text-32px text-primary">$40</span>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="border-primary border-l-2 h-full">
          <img
            src="@/assets/images/test.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="flex items-center">
        <router-link
          to="/products"
          class="absolute bottom-0 left-0 flex justify-center items-center text-primary w-[240px] h-20"
          >立即點餐
          <img src="@/assets/images/icon-cta.svg" alt="icon-cta" class="ml-5" />
        </router-link>
      </div>
    </div>
  </section>
  <section>
    <div class="flex border-primary border-b-2">
      <div class="flex-1">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-20"></div>
          <div class="grid grid-cols-3">
            <div class="col-span-2">
              <div class="border-primary border-b-2 border-r-2 h-full p-5">
                <img
                  src="@/assets/images/bg-persist-1.png"
                  alt="堅持素材背景圖"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="col-span-1">
              <div class="border-primary border-b-2 h-full p-5">
                <p class="text-primary h-full">
                  「午分之食」構思來自「五分之十」。
                  五分之十以數學角度計算結果為2，猶如「Double」加倍的意思並藉此當作出發點。
                  對於食材的選用、食材的運用、對待客人都秉持加倍的心態對待，讓午分之食為你美好一天的開始注入元氣。
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="col-span-1">
              <div class="h-full p-5">
                <p class="text-primary h-full">
                  「午分之食」構思來自「五分之十」。
                  五分之十以數學角度計算結果為2，猶如「Double」加倍的意思並藉此當作出發點。
                  對於食材的選用、食材的運用、對待客人都秉持加倍的心態對待，讓午分之食為你美好一天的開始注入元氣。
                </p>
              </div>
            </div>
            <div class="col-span-2">
              <div class="border-primary border-l-2 h-full p-5">
                <img
                  src="@/assets/images/bg-persist-2.png"
                  alt="堅持素材背景圖"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食分堅持
          </h3>
        </div>
        <div class="h-[calc(100%-5rem)] p-5">
          <p class="text-primary h-full">
            「午分之食」構思來自「五分之十」。
            五分之十以數學角度計算結果為2，猶如「Double」加倍的意思並藉此當作出發點。
            對於食材的選用、食材的運用、對待客人都秉持加倍的心態對待，讓午分之食為你美好一天的開始注入元氣。
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-row-reverse border-primary border-b-2">
      <div class="flex-1">
        <div class="border-primary border-l-2">
          <div class="border-primary border-b-2 h-20"></div>
          <ul class="grid grid-cols-3 gap-5 p-5">
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
                  <a href="javascript:;" class="relative w-[60px] h-[60px]">
                    <img
                      src="@/assets/images/icon-heart.svg"
                      alt="icon-愛心"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </a>
                  <div class="flex-1">
                    <a
                      href="javascript:;"
                      class="flex justify-center items-center border-primary border-l-2 h-full"
                    >
                      <img
                        src="@/assets/images/icon-cart.svg"
                        alt="icon-購物"
                        class="w-4"
                      />
                      <span class="text-primary ml-3">加入購物車</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
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
                  <a href="javascript:;" class="relative w-[60px] h-[60px]">
                    <img
                      src="@/assets/images/icon-heart.svg"
                      alt="icon-愛心"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </a>
                  <div class="flex-1">
                    <a
                      href="javascript:;"
                      class="flex justify-center items-center border-primary border-l-2 h-full"
                    >
                      <img
                        src="@/assets/images/icon-cart.svg"
                        alt="icon-購物"
                        class="w-4"
                      />
                      <span class="text-primary ml-3">加入購物車</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
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
                  <a href="javascript:;" class="relative w-[60px] h-[60px]">
                    <img
                      src="@/assets/images/icon-heart.svg"
                      alt="icon-愛心"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </a>
                  <div class="flex-1">
                    <a
                      href="javascript:;"
                      class="flex justify-center items-center border-primary border-l-2 h-full"
                    >
                      <img
                        src="@/assets/images/icon-cart.svg"
                        alt="icon-購物"
                        class="w-4"
                      />
                      <span class="text-primary ml-3">加入購物車</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食分推薦
          </h3>
        </div>
        <div class="h-[calc(100%-5rem)] p-5">
          <p class="text-primary h-full">「午分之食」每日推薦</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex border-primary border-b-2">
      <div class="flex-1">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-20"></div>
          <ul class="grid grid-cols-3 gap-5 p-5">
            <li>
              <div class="border-primary border-2">
                <div class="relative pt-[75%]">
                  <img
                    src="@/assets/images/bg-test.png"
                    alt="測試圖片"
                    class="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div class="p-5">
                  <span class="text-14px text-primary opacity-50 mb-1"
                    >2022/3/22</span
                  >
                  <h4 class="text-20px text-primary mb-3">怎麼吃最健康</h4>
                  <p class="text-primary line-clamp-2">
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="border-primary border-2">
                <div class="relative pt-[75%]">
                  <img
                    src="@/assets/images/bg-test.png"
                    alt="測試圖片"
                    class="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div class="p-5">
                  <span class="text-14px text-primary opacity-50 mb-1"
                    >2022/3/22</span
                  >
                  <h4 class="text-20px text-primary mb-3">怎麼吃最健康</h4>
                  <p class="text-primary line-clamp-2">
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="border-primary border-2">
                <div class="relative pt-[75%]">
                  <img
                    src="@/assets/images/bg-test.png"
                    alt="測試圖片"
                    class="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div class="p-5">
                  <span class="text-14px text-primary opacity-50 mb-1"
                    >2022/3/22</span
                  >
                  <h4 class="text-20px text-primary mb-3">怎麼吃最健康</h4>
                  <p class="text-primary line-clamp-2">
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                    描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食在好文
          </h3>
        </div>
        <div class="h-[calc(100%-5rem)] p-5">
          <p class="text-primary h-full">好文不斷更新中...</p>
        </div>
      </div>
    </div>
  </section>
  <section class="subscribe">
    <div class="flex flex-row-reverse h-20">
      <button
        type="button"
        class="flex items-center text-white bg-primary px-16"
      >
        訂閱
      </button>
      <div class="flex-1">
        <div class="flex items-center border-primary border-l-2 h-full px-5">
          <input
            type="email"
            placeholder="訂閱我們已獲得最新好康資訊"
            class="bg-secondary w-full h-full"
          />
        </div>
      </div>
      <div class="w-[240px]">
        <h3
          class="flex justify-center items-center text-24px text-primary h-full"
        >
          訂閱我們
        </h3>
      </div>
    </div>
  </section>
</template>
