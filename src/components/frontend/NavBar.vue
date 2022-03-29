<template>
  <div
    class="duration-500 fixed top-[75px] bottom-[15px] left-[15px] z-50 w-[calc(100%-1.875rem)] overflow-hidden md:top-[100px] md:bottom-5 md:left-5 md:w-[calc(100%-2.5rem)] lg:top-[120px]"
    :class="{ 'translate-y-0': isOpen, '-translate-y-[100%]': !isOpen }"
  >
    <div
      class="duration-500 flex h-full"
      :class="{ 'translate-y-0': isOpen, 'translate-y-[100%]': !isOpen }"
    >
      <div class="w-full lg:w-1/2">
        <ul class="bg-secondary h-full border-primary border-r-2">
          <li class="h-1/4">
            <router-link
              to="/products"
              class="flex items-center h-full border-primary border-b-2 p-5 md:p-10"
            >
              <span class="text-primary w-[60px]">Menu</span>
              <h2 class="text-24px text-primary md:text-32px">美味餐點</h2>
            </router-link>
          </li>
          <li class="h-1/4">
            <router-link
              to="/about"
              class="flex items-center h-full border-primary border-b-2 p-5 md:p-10"
            >
              <span class="text-primary w-[60px]">About</span>
              <h2 class="text-24px text-primary md:text-32px">關於午分之食</h2>
            </router-link>
          </li>
          <li class="h-1/4">
            <router-link
              to="/articles"
              class="flex items-center h-full border-primary border-b-2 p-5 md:p-10"
            >
              <span class="text-primary w-[60px]">News</span>
              <h2 class="text-24px text-primary md:text-32px">最新消息</h2>
            </router-link>
          </li>
          <li class="h-1/4">
            <router-link
              to="/cart"
              class="flex items-center h-full border-primary border-b-2 p-5 md:p-10"
            >
              <span class="text-primary w-[60px]">Cart</span>
              <h2 class="text-24px text-primary md:text-32px">購物車</h2>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="hidden w-1/2 lg:block">
        <img
          src="@/assets/images/bg-menu.jpg"
          alt="菜單圖片"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route: {
      // 網址變更時觸發
      handler() {
        this.isOpen = false;
      },
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    emitter.on('toggle-menu', () => {
      this.toggleMenu();
    });
  },
};
</script>
