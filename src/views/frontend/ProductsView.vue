<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
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
      class="category hidden flex-wrap justify-center border-primary border-b-2 py-5 md:flex"
    >
      <li class="md:px-[15px] md:py-2 lg:p-[15px]">
        <button
          type="button"
          class="text-14px text-primary opacity-50"
          :class="{ 'opacity-100': category === 'all' }"
          @click="changeCategory('all')"
        >
          全部餐點
        </button>
      </li>
      <li
        class="md:px-[15px] md:py-2 lg:p-[15px]"
        v-for="item in categories"
        :key="item"
      >
        <button
          type="button"
          class="text-14px text-primary opacity-50"
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
              class="relative w-[60px] h-[60px] group"
              @click="toggleFavorite(product)"
            >
              <img
                src="@/assets/images/icon-heart-fill.svg"
                alt="愛心"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                v-if="isFavorite(product)"
              />
              <svg
                class="duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-primary fill-transparent group-hover:fill-primary"
                v-else
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
            </button>
            <div class="relative flex-1">
              <button
                type="button"
                class="flex justify-center items-center text-primary border-primary border-l-2 w-full h-full pointer-events-none"
                v-if="isMaxNum(product)"
              >
                商品已達購買上限
              </button>
              <button
                type="button"
                class="btn duration-[400ms] flex justify-center items-center border-primary border-l-2 w-full h-full group"
                v-else
                @click="addToCart(product.id)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  class="duration-[400ms] stroke-primary group-hover:stroke-white"
                >
                  <rect
                    width="16"
                    height="12"
                    rx="3"
                    transform="translate(2 6)"
                    fill="none"
                    stroke-width="2"
                  />
                  <path
                    d="M13,9V5A4,4,0,0,0,5,5V9"
                    transform="translate(1 1)"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span class="ml-3">加入購物車</span>
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
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';
import { mapState } from 'pinia';
import statusStore from '@/stores/statusStore';
import LoadingComponent from '@/components/LoadingComponent.vue';
import Pagination from '@/components/PaginationComponent.vue';

const statusModule = statusStore();

export default {
  components: {
    LoadingComponent,
    Pagination,
  },
  watch: {
    $route: {
      handler() {
        if (this.$route.query.category && this.$route.query.page) {
          this.category = this.$route.query.category;
          this.page = this.$route.query.page;
          this.getProducts(this.page);
        }
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
  data() {
    return {
      products: [],
      pagination: {},
      cart: {
        carts: [],
      },
      page: 1,
      category: 'all',
      categories: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoadingItem: '',
    };
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    changeCategory(category) {
      this.category = category;
      this.getProducts();
    },
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
          this.categories = [...result].reverse();
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
    getProducts(page = 1) {
      statusModule.isLoading = true;
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (this.category !== 'all') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${this.category}&page=${page}`;
        this.$router.push(`/products?category=${this.category}&page=${page}`);
      } else {
        this.$router.push(`/products?category=all&page=${page}`);
      }
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          statusModule.isLoading = false;
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
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
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
          this.getCart();
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
    toggleFavorite(product) {
      // 查資料，有沒有這一個 id 如果有 1，沒有 -1
      const favoriteIndex = this.favorite.findIndex(
        (item) => item.id === product.id,
      );
      if (favoriteIndex === -1) {
        this.favorite.push(product);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '已加入我的最愛',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        this.favorite.splice(favoriteIndex, 1);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '已移除我的最愛',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    isFavorite(item) {
      return this.favorite.some((element) => element.id === item.id);
    },
    isMaxNum(product) {
      const result = this.cart.carts.filter(
        (cart) => cart.product_id === product.id,
      )[0];
      return result && result.qty === 30;
    },
  },
  mounted() {
    if (this.$route.query.category && this.$route.query.page) {
      this.category = this.$route.query.category;
      this.page = this.$route.query.page;
      this.getProducts(this.page);
    }
    this.getCategories();
    this.getCart();
    emitter.on('update-favorite', () => {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    });
  },
};
</script>
