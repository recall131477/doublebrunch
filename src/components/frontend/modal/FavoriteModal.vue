<template>
  <div
    class="favorite duration-300 fixed top-[77px] left-[15px] right-[15px] z-10 bg-secondary border-primary border-2 max-h-[400px] overflow-y-auto opacity-0 invisible p-5 md:top-[102px] md:left-[260px] md:right-5 md:w-[400px] lg:top-[122px]"
    :class="{
      '!opacity-100 !visible': isOpen
    }"
  >
    <div v-if="favorite.length === 0">
      <p class="text-20px text-primary mb-2.5 md:text-24px md:mb-5">目前我的最愛沒有商品哦!</p>
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
        <button
          type="button"
          class="btn duration-300 text-primary border-primary border-2 px-4 py-3"
          @click="addToCart(product.id)"
        >
          加入購物車
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
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
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const status = '加入購物車';
      this.$http
        .post(url, { data })
        .then((res) => {
          this.$messageState(res, status);
          emitter.emit('get-cart');
          // 我的最愛產品直接新增購物車頁面
          emitter.emit('add-cart');
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    deleteFavorite(item) {
      const index = this.tempFavorite.findIndex((obj) => obj.id === item.id);
      this.tempFavorite.splice(index, 1);
      localStorage.setItem('favorite', JSON.stringify(this.tempFavorite));
      this.$emit('update-favorite');
      emitter.emit('update-favorite');
    },
  },
};
</script>
