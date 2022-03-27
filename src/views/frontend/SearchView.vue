<template>
  <section>
    <div class="pt-[30px] px-5 pb-5">
      <div class="relative border-primary border-2 mb-2.5">
        <input
          type="text"
          id="keyword"
          class="text-primary bg-secondary w-full p-5"
          v-model="keyword"
        />
        <button type="button" class="absolute top-1/2 right-5 -translate-y-1/2">
          <img src="@/assets/images/icon-search.svg" alt="放大鏡" />
        </button>
      </div>
      <p class="text-primary mb-5">
        共有
        <span class="text-24px">{{ filterProducts.length }}</span> 筆搜尋結果
      </p>
      <ul class="grid grid-cols-5 gap-5">
        <li v-for="product in filterProducts" :key="product.id">
          <div class="relative border-primary border-2">
            <div class="absolute top-0 left-5 z-20">
              <img src="@/assets/images/icon-tag.svg" alt="標籤" />
              <span
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                >{{ product.category }}</span
              >
            </div>
            <router-link :to="`/product/${product.id}`" class="group block">
              <div class="relative pt-[100%] overflow-hidden">
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="duration-300 absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110"
                />
              </div>
            </router-link>
            <div class="flex justify-between border-primary border-b-2 p-5">
              <h4 class="text-20px text-primary">{{ product.title }}</h4>
              <span class="text-20px text-primary"
                >${{ $filters.currency(product.price) }}</span
              >
            </div>
            <div class="flex">
              <button type="button" class="relative w-[60px] h-[60px]" @click="toggleFavorite(product)">
                <img
                  src="@/assets/images/icon-heart-fill.svg"
                  alt="愛心"
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  v-if="isFavorite(product)"
                />
                <img
                  src="@/assets/images/icon-heart.svg"
                  alt="愛心"
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  v-else
                />
              </button>
              <div class="flex-1">
                <button
                  type="button"
                  class="flex justify-center items-center border-primary border-l-2 w-full h-full"
                  @click="addToCart(product.id)"
                >
                  <img
                    src="@/assets/images/icon-cart.svg"
                    alt="icon-購物"
                    class="w-4"
                  />
                  <span class="text-primary ml-3">加入購物車</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      products: [],
      keyword: '',
      favorite: JSON.parse(localStorage.getItem('favorite')) || [], // 若陣列沒資料，賦予空陣列
    };
  },
  computed: {
    filterProducts() {
      return this.keyword === ''
        ? this.products
        : this.products.filter((item) => item.title.match(this.keyword) || item.category.match(this.keyword));
    },
  },
  inject: ['routerRefresh'],
  watch: {
    $route: {
      // 網址變更時觸發
      handler() {
        this.routerRefresh();
      },
    },
    // 因為是陣列，需要做深層監聽
    favorite: {
      handler() {
        // localStorage 自訂欄位
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
        emitter.emit('get-favorite');
      },
      deep: true,
    },
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 加入購物車
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
          console.log(res);
          this.$messageState(res, status);
          emitter.emit('get-cart');
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 加入我的最愛
    toggleFavorite(product) {
      // 查資料，有沒有這一個 id 如果有 1，沒有 -1
      const favoriteIndex = this.favorite.findIndex(
        (item) => item.id === product.id,
      );
      if (favoriteIndex === -1) {
        this.favorite.push(product);
      } else {
        this.favorite.splice(favoriteIndex, 1);
      }
    },
    // 比對我的最愛產品 id 是否存在
    isFavorite(item) {
      return this.favorite.some((element) => element.id === item.id);
    },
  },
  mounted() {
    if (this.$route.query.keyword) {
      this.keyword = this.$route.query.keyword;
    }
    this.getProducts();
  },
};
</script>
