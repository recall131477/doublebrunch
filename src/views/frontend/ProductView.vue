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
                <a href="javascript:;" class="relative w-[60px] h-full">
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                  ></span>
                </a>
                <input
                  type="text"
                  value="1"
                  class="text-primary text-center bg-secondary border-primary border-x-2 flex-1 w-full"
                />
                <a href="javascript:;" class="relative w-[60px] h-full">
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                  ></span>
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-4 h-[2px]"
                  ></span>
                </a>
              </div>
              <div class="h-[60px]">
                <a
                  href="javascript:;"
                  class="flex justify-center items-center h-full"
                >
                  <img src="@/assets/images/icon-cart.svg" alt="icon-購物" />
                  <span class="text-primary ml-3">加入購物車</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex border-primary border-b-2">
      <div class="flex-1">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-20"></div>
          <ul class="pl-10 pr-5 py-[30px]">
            <li class="mb-10">
              <h3 class="text-24px text-primary mb-5">餐點注意事項</h3>
              <p class="text-primary">
                餐點因拍攝關係顏色可能略有差異，實際以出餐為主。
                餐點情境照為示意用。<br />
                午分之食盡可能確保所列餐點備貨充足，但偶爾仍會有餐點售罄的情況。如您所訂購的餐點庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
              </p>
            </li>
            <li>
              <h3 class="text-24px text-primary mb-5">退款須知</h3>
              <p class="text-primary">
                依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退款。
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
            相關餐點
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
