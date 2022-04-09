<template>
  <div
    class="favorite duration-300 fixed top-[77px] left-[15px] right-[15px] z-10 bg-secondary border-primary border-2 max-h-[400px] overflow-y-auto opacity-0 invisible p-5 md:top-[102px] md:left-[260px] md:right-5 md:w-[400px] lg:top-[122px]"
    :class="{
      '!opacity-100 !visible': isOpen,
    }"
  >
    <div v-if="favorite.length === 0">
      <p class="text-20px text-primary mb-2.5 md:text-24px md:mb-5">
        目前我的最愛沒有商品哦!
      </p>
      <router-link
        to="/products"
        class="btn duration-300 inline-block text-primary border-primary border-2 px-5 py-2.5"
        >前往購物
      </router-link>
    </div>
    <ul class="overflow-hidden" v-else>
      <li
        class="border-primary border-t-2 pt-5"
        :class="{ 'mb-5': favorite.length > 1 }"
        v-for="product in favorite"
        :key="product.id"
      >
        <div class="relative flex items-center mb-5">
          <img
            :src="product.imageUrl"
            :alt="product.title"
            class="w-20 h-20 object-cover"
          />
          <div class="flex-1 text-primary ml-2.5">
            <span class="block mb-2">{{ product.title }}</span>
            <span class="block">${{ product.price }}</span>
          </div>
          <button
            type="button"
            class="duration-300 absolute top-0 right-0 w-6 h-6 hover:rotate-90"
            @click="deleteFavorite(product)"
          >
            <span
              class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary -rotate-45 w-4 h-[2px]"
            >
            </span>
            <span
              class="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rotate-45 w-4 h-[2px]"
            >
            </span>
          </button>
        </div>
        <div class="relative inline-block">
          <button
            type="button"
            class="btn duration-300 text-primary border-primary border-2 px-4 py-3"
            @click="addToCart(product.id)"
          >
            加入購物車
          </button>
          <div
            class="absolute inset-0 flex justify-center items-center bg-primary"
            v-show="isLoadingItem === product.id"
          >
            <div class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span class="text-white">加入中...</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';

export default {
  props: {
    favorite: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isOpen: false,
      tempFavorite: [],
      isLoadingItem: '',
    };
  },
  watch: {
    $route: {
      handler() {
        this.isOpen = false;
      },
    },
    favorite() {
      this.tempFavorite = JSON.parse(JSON.stringify(this.favorite));
    },
  },
  methods: {
    addToCart(id, qty = 1) {
      this.isLoadingItem = id;
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const status = '已加入購物車';
      this.$http
        .post(url, { data })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          emitter.emit('get-cart');
          // 我的最愛產品直接新增購物車頁面
          emitter.emit('add-cart');
          this.isLoadingItem = '';
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    deleteFavorite(item) {
      const index = this.tempFavorite.findIndex((obj) => obj.id === item.id);
      this.tempFavorite.splice(index, 1);
      localStorage.setItem('favorite', JSON.stringify(this.tempFavorite));
      this.$emit('update-favorite');
      emitter.emit('update-favorite');
      const status = '已移除我的最愛';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: status,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>
