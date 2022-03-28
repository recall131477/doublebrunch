<template>
  <section>
    <div class="border-primary border-b-2 p-5 md:hidden">
      <div class="relative">
        <select
          class="text-primary bg-secondary border-primary border-2 w-full px-4 py-2"
          v-model="category"
          @change="changeCategory(category)"
        >
          <option :value="'all'">全部餐點</option>
          <option :value="item" v-for="item in categories" :key="item">
            {{ item }}系列
          </option>
        </select>
        <svg
          class="absolute top-1/2 right-4 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_210"
                data-name="Rectangle 210"
                width="20"
                height="20"
              />
            </clipPath>
          </defs>
          <g
            id="icon-arrow-left"
            transform="translate(0 20) rotate(-90)"
            clip-path="url(#clip-path)"
          >
            <path
              id="Path_14"
              data-name="Path 14"
              d="M1078.15,822.453l-8,8,8,8"
              transform="translate(-1064.147 -820.453)"
              fill="none"
              stroke="#8CA06E"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
    </div>
    <ul
      class="hidden flex-wrap justify-center border-primary border-b-2 py-5 md:flex"
    >
      <li>
        <button
          type="button"
          class="text-14px text-primary opacity-50 md:px-[15px] md:py-2 lg:p-[15px]"
          :class="{ 'opacity-100': category === 'all' }"
          @click="changeCategory('all')"
        >
          全部餐點
        </button>
      </li>
      <li v-for="item in categories" :key="item">
        <button
          type="button"
          class="text-14px text-primary opacity-50 md:px-[15px] md:py-2 lg:p-[15px]"
          :class="{ 'opacity-100': category === item }"
          @click="changeCategory(item)"
        >
          {{ item }}系列
        </button>
      </li>
    </ul>
    <div class="p-5">
      <ul
        class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        <li v-for="product in products" :key="product.id">
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
            <div class="flex justify-between border-primary border-t-2 p-5">
              <h4 class="text-20px text-primary">
                {{ product.title }}
              </h4>
              <span class="text-20px text-primary"
                >${{ $filters.currency(product.price) }}</span
              >
            </div>
          </div>
          <div class="flex border-primary border-x-2 border-b-2">
            <button
              type="button"
              class="relative w-[60px] h-[60px]"
              @click="toggleFavorite(product)"
            >
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
                  alt="購物"
                  class="w-4"
                />
                <span class="text-primary ml-3">加入購物車</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Pagination
      :pages="pagination"
      @change-pages="getProducts"
      v-if="pagination.total_pages > 1"
    ></Pagination>
  </section>
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '@/components/frontend/PaginationComponent.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      category: 'all',
      categories: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [], // 若陣列沒資料，賦予空陣列
    };
  },
  components: {
    Pagination,
  },
  watch: {
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
    // 產品分類切換
    changeCategory(category) {
      this.category = category;
      this.getProducts();
    },
    // 取得分類
    getCategories() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          const { products } = res.data;
          const result = new Set();
          products.forEach((item) => {
            result.add(item.category);
          });
          this.categories = result;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 取得所有產品資料(有分頁)
    getProducts(page = 1) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (this.category !== 'all') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${this.category}`;
        this.$router.push(`/products?category=${this.category}`);
      } else {
        this.$router.push(`/products?page=${page}`);
      }
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
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
    if (this.$route.query.category) {
      this.category = this.$route.query.category;
    }
    this.getCategories();
    this.getProducts();
  },
};
</script>
