<template>
  <header
    class="fixed top-5 left-5 w-[calc(100%-2.5rem)] z-[999] flex bg-secondary border-primary border-2 h-[100px]"
  >
    <div class="w-[240px]">
      <h1 class="border-primary border-r-2 h-full">
        <router-link to="/" class="relative block bg-primary h-full">
          <img
            src="@/assets/images/logo.svg"
            alt="logo圖片"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </router-link>
      </h1>
    </div>
    <div class="flex flex-1">
      <button
        type="button"
        class="relative flex justify-center items-center border-primary border-r-2 w-[100px]"
        :disabled="!favorite.length"
        @click="openFavoriteModal"
      >
        <div class="relative">
          <img src="@/assets/images/icon-heart.svg" alt="我的最愛" />
          <span
            class="absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full"
            v-if="favorite.length > 0"
            >{{ favorite.length }}
          </span>
        </div>
      </button>
      <form class="flex-1" @submit.prevent="searchProducts">
        <div class="flex items-center h-full px-10">
          <img src="@/assets/images/icon-search.svg" alt="icon-放大鏡" />
          <input
            type="text"
            id="keyword"
            placeholder="早安，今天我想來點..."
            class="text-primary bg-secondary w-full h-full ml-5"
            v-model="keyword"
          />
        </div>
      </form>
      <button
        type="button"
        class="relative flex justify-center items-center border-primary border-l-2 w-[100px]"
        @click="toggleMenu"
      >
        <div class="relative w-5 h-5">
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
      </button>
    </div>
    <FavoriteModal ref="favoriteModal" :favorite="favorite"></FavoriteModal>
  </header>
</template>

<script>
import FavoriteModal from '@/components/frontend/modal/FavoriteModal.vue';
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      favorite: [],
      keyword: '',
    };
  },
  components: {
    FavoriteModal,
  },
  methods: {
    toggleMenu() {
      emitter.emit('toggle-menu');
    },
    // 取得 localStorage 資料
    getFavorite() {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    },
    searchProducts() {
      this.$router.push({
        path: '/search',
        query: { keyword: this.keyword },
      });
      this.keyword = '';
    },
    openFavoriteModal() {
      this.$refs.favoriteModal.isOpen = !this.$refs.favoriteModal.isOpen;
    },
  },
  mounted() {
    this.getFavorite();
    emitter.on('get-favorite', () => {
      this.getFavorite();
    });
  },
};
</script>
