<template>
  <div class="fixed top-0 left-0 z-[999] w-full h-full p-[15px] md:p-5">
    <div
      class="absolute top-0 left-0 w-full h-[15px] bg-secondary md:h-5"
    ></div>
    <div
      class="absolute top-0 left-0 w-[15px] h-full bg-secondary md:w-5"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-full h-[15px] bg-secondary md:h-5"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-[15px] h-full bg-secondary md:w-5"
    ></div>
    <div
      class="flex justify-center items-center flex-col w-full h-full border-primary border-2 p-[15px] md:p-5"
    >
      <div>
        <h2 class="text-40px text-primary mb-2.5 md:text-48px md:mb-5">此頁面不存在哦!</h2>
        <div class="flex -ml-5">
          <div class="w-1/2 pl-5">
            <router-link
              to="/"
              class="btn duration-[400ms] block text-primary text-center border-primary border-2 px-5 py-2.5"
              >前往首頁
            </router-link>
          </div>
          <div class="w-1/2 pl-5">
            <router-link
              :to="{ path: '/products', query: { category: 'all', page: 1 } }"
              class="btn duration-[400ms] block border-primary text-center border-2 px-5 py-2.5"
              >前往商店
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
