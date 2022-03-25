<template>
  <div
    class="fixed top-5 left-5 w-[calc(100%-2.5rem)] h-[calc(100vh-2.5rem)] pt-[100px] z-50"
    v-if="isOpen"
  >
    <div class="flex h-full">
      <div class="w-1/2">
        <ul class="bg-secondary h-full border-primary border-r-2">
          <li class="h-1/4">
            <router-link
              to="/about"
              class="flex items-center h-full border-primary border-b-2 p-10"
            >
              <span class="text-primary mr-5">About</span>
              <h2 class="text-32px text-primary">關於我們</h2>
            </router-link>
          </li>
          <li class="h-1/4">
            <a
              href="javascript:;"
              class="flex items-center h-full border-primary border-b-2 p-10"
            >
              <span class="text-primary mr-5">Menu</span>
              <h2 class="text-32px text-primary">餐點</h2>
            </a>
          </li>
          <li class="h-1/4">
            <a
              href="javascript:;"
              class="flex items-center h-full border-primary border-b-2 p-10"
            >
              <span class="text-primary mr-5">Cart</span>
              <h2 class="text-32px text-primary">購物車</h2>
            </a>
          </li>
          <li class="h-1/4">
            <a
              href="javascript:;"
              class="flex items-center h-full border-primary border-b-2 p-10"
            >
              <span class="text-primary mr-5">Blog</span>
              <h2 class="text-32px text-primary">部落格</h2>
            </a>
          </li>

          <li>
            <a href="javascript:;"></a>
          </li>
          <li>
            <a href="javascript:;"></a>
          </li>
        </ul>
      </div>
      <div class="w-1/2">
        <img
          src="@/assets/images/bg-test.png"
          alt="測試圖片"
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
