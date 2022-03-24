<template>
  <header
    class="fixed top-5 left-5 w-[calc(100%-2.5rem)] z-999 flex bg-secondary border-primary border-2 h-[100px]"
  >
    <div class="w-[240px]">
<<<<<<< HEAD
      <h1 class="border-primary border-r-2 h-full">
        <router-link to="/" class="relative block bg-primary h-full">
          <img
            src="@/assets/images/logo.svg"
            alt="logo圖片"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </router-link>
      </h1>
=======
      <router-link to="/" class="block">
        <img src="@/assets/images/logo.svg" alt="logo圖片" />
      </router-link>
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
    </div>
    <div class="flex flex-1">
      <router-link
        to="cart"
        class="relative border-primary border-r-2 w-[100px]"
      >
<<<<<<< HEAD
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src="@/assets/images/icon-cart.svg" alt="icon-購物" />
          <span
            class="absolute top-[-6px] left-[12px] flex justify-center items-center text-white bg-primary w-[18px] h-[18px] rounded-full"
            >2</span
          >
        </div>
=======
        <img
          src="@/assets/images/icon-cart.svg"
          alt="icon-購物"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
      </router-link>
      <div class="flex-1">
        <div class="flex items-center h-full px-10">
          <img src="@/assets/images/icon-search.svg" alt="icon-放大鏡" />
          <input
            type="text"
            placeholder="早安，今天我想來點..."
<<<<<<< HEAD
            class="text-primary bg-secondary w-full h-full ml-5"
          />
        </div>
      </div>
      <a
        href="#"
        class="relative border-primary border-l-2 w-[100px]"
        @click="toggleMenu"
      >
=======
            class="bg-secondary w-full ml-5"
          />
        </div>
      </div>
      <div class="relative border-primary border-l-2 w-[100px] cursor-pointer">
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5"
        >
          <span class="absolute top-0 left-0 bg-primary w-[5px] h-[5px]"></span>
          <span
            class="absolute top-0 right-0 bg-primary w-[5px] h-[5px]"
          ></span>
          <span
            class="absolute bottom-0 left-0 bg-primary w-[5px] h-[5px]"
          ></span>
          <span
            class="absolute bottom-0 right-0 bg-primary w-[5px] h-[5px]"
          ></span>
        </div>
<<<<<<< HEAD
      </a>
=======
      </div>
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
    </div>
  </header>
</template>
