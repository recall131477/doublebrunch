<template>
  <header
    class="fixed top-[15px] left-[15px] w-[calc(100%-1.875rem)] z-[999] flex bg-secondary border-primary border-2 md:top-5 md:left-5 md:w-[calc(100%-2.5rem)]"
  >
    <div class="w-[100px] md:w-[240px]">
      <h1 class="border-primary border-r-2 h-full">
        <router-link
          to="/"
          class="relative block bg-primary h-[60px] md:h-20 lg:h-[100px]"
        >
          <picture>
            <source
              media="(min-width:768px)"
              srcset="@/assets/images/logo.svg"
            />
            <img
              src="@/assets/images/mobile-logo.svg"
              alt="logo"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </picture>
        </router-link>
      </h1>
    </div>
    <div class="w-[calc(100%-100px)] flex md:w-[calc(100%-240px)]">
      <button
        type="button"
        class="relative flex justify-center items-center border-primary border-r-2 w-[60px] h-[60px] group md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
        @click="openFavoriteModal"
      >
        <div class="relative">
          <svg
            class="duration-300 stroke-primary fill-transparent group-hover:fill-primary"
            :class="{ 'fill-primary': isOpenFavorite }"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <defs>
              <clipPath id="clip-icon-favorite">
                <rect width="20" height="20" />
              </clipPath>
            </defs>
            <g id="icon-favorite" clip-path="url(#clip-icon-favorite)">
              <path
                id="heart-solid"
                d="M14.435,32.924a4.273,4.273,0,0,0-5.831.425l-.616.634-.616-.634a4.273,4.273,0,0,0-5.831-.425,4.487,4.487,0,0,0-.309,6.5l6.047,6.244a.98.98,0,0,0,1.416,0l6.047-6.244a4.484,4.484,0,0,0-.306-6.5Z"
                transform="translate(2.012 -28.967)"
                stroke-width="2"
              />
            </g>
          </svg>
          <span
            class="absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full"
            v-if="favorite.length > 0"
            >{{ favorite.length }}
          </span>
        </div>
      </button>
      <form class="flex-1 md:hidden" @submit.prevent="searchProducts">
        <div class="flex items-center h-[60px] px-5">
          <img src="@/assets/images/icon-search.svg" alt="放大鏡" />
          <input
            type="text"
            id="keyword"
            class="text-primary bg-secondary w-full h-full ml-2.5"
            v-model="keyword"
          />
        </div>
      </form>
      <form class="hidden flex-1 md:block" @submit.prevent="searchProducts">
        <div class="flex items-center h-20 px-10 lg:h-[100px]">
          <img src="@/assets/images/icon-search.svg" alt="放大鏡" />
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
        class="hamburger relative flex justify-center items-center border-primary border-l-2 w-[60px] h-[60px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
        @click="toggleMenu"
      >
        <div class="relative w-5 h-5">
          <span :class="{ 'is-active': isOpenMenu }"></span>
          <span :class="{ 'is-active': isOpenMenu }"></span>
          <span :class="{ 'is-active': isOpenMenu }"></span>
          <span :class="{ 'is-active': isOpenMenu }"></span>
          <span :class="{ 'is-active': isOpenMenu }"></span>
          <span :class="{ 'is-active': isOpenMenu }"></span>
        </div>
      </button>
    </div>
    <FavoriteModal
      ref="favoriteModal"
      :favorite="favorite"
      @update-favorite="getFavorite"
    ></FavoriteModal>
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
      isOpenFavorite: false,
      isOpenMenu: false,
    };
  },
  components: {
    FavoriteModal,
  },
  watch: {
    $route: {
      handler() {
        this.isOpenMenu = false;
        this.isOpenFavorite = false;
      },
    },
  },
  methods: {
    toggleMenu() {
      emitter.emit('toggle-menu');
      this.isOpenMenu = !this.isOpenMenu;
    },
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
      this.isOpenFavorite = !this.isOpenFavorite;
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
