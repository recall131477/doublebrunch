<template>
  <section>
    <div class="border-primary border-b-2 px-5 pt-[30px] pb-5">
      <div class="relative border-primary border-2 mb-2.5">
        <input type="text" class="text-primary bg-secondary w-full p-5" />
        <a
          href="javascript:;"
          class="absolute top-1/2 right-5 -translate-y-1/2"
        >
          <img src="@/assets/images/icon-search.svg" alt="icon-放大鏡" />
        </a>
      </div>
      <p class="text-primary mb-5">
        共有 <span class="text-24px">4</span> 筆搜尋結果
      </p>
      <ul class="grid grid-cols-2 gap-5">
        <li>
          <div class="relative flex border-primary border-2">
            <img src="@/assets/images/bg-test.png" alt="側視圖片" class="w-[240px]"/>
            <div class="px-5 py-10">
              <span class="text-primary opacity-50">2022/3/25</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
