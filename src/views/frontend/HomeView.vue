<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <section>
    <div class="relative border-primary border-b-2">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :speed="1000"
        :autoplay="{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }"
        :loop="true"
      >
        <SwiperSlide v-for="product in monthMainProducts" :key="product.id">
          <div
            class="flex flex-wrap flex-col-reverse md:flex-row md:min-h-[calc(100vh-140px)]"
          >
            <div class="w-full md:w-[240px]">
              <div
                class="flex justify-between items-center p-[15px] md:justify-center md:flex-col md:h-[calc(100%-5rem)] md:border-primary md:border-b-2 md:p-0"
              >
                <h2
                  class="writing-mode-ver-lr text-24px text-primary md:text-40px md:mb-5 lg:text-48px"
                >
                  {{ product.title }}
                </h2>
                <span class="text-24px text-primary md:text-32px"
                  >${{ $filters.currency(product.price) }}</span
                >
              </div>
            </div>
            <div class="w-full md:w-[calc(100%-240px)]">
              <div
                class="relative pt-[100%] h-full bg-cover bg-center md:border-primary md:border-l-2 md:pt-0"
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
              ></div>
            </div>
          </div>
          <div class="relative">
            <router-link
              :to="{ path: '/products', query: { category: 'all', page: 1 } }"
              class="btn-arrow duration-300 relative flex justify-center items-center text-white bg-primary h-[60px] group hover:text-white md:absolute md:bottom-0 md:left-0 md:z-10 md:text-primary md:bg-secondary md:w-[240px] md:h-20"
              >立即點餐
              <svg
                class="duration-300 stroke-white ml-5 group-hover:stroke-white md:stroke-primary"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="clip-icon-cta">
                    <rect width="20" height="20" />
                  </clipPath>
                </defs>
                <g id="icon-cta" clip-path="url(#clip-icon-cta)">
                  <g
                    id="Group_249"
                    data-name="Group 249"
                    transform="translate(-174.5 -828.5)"
                  >
                    <line
                      id="Line_107"
                      data-name="Line 107"
                      y1="16"
                      x2="16"
                      transform="translate(176 831)"
                      fill="none"
                      stroke-width="2"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M1835.9,816.491h10v10"
                      transform="translate(-1654 14.509)"
                      fill="none"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
            </router-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <section>
    <div class="flex border-primary border-b-2">
      <div class="w-full md:w-[calc(100%-240px)]">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-[60px] md:h-20">
            <h3
              class="flex items-center text-20px text-primary h-full p-[15px] md:hidden"
            >
              食分堅持
            </h3>
          </div>
          <div class="p-[15px] md:p-5 lg:p-0">
            <div
              class="flex flex-wrap mb-[15px] lg:border-primary lg:border-b-2 lg:mb-0"
            >
              <div class="w-full lg:w-2/3">
                <div
                  class="h-[200px] lg:border-primary lg:border-r-2 lg:h-full lg:p-5"
                >
                  <img
                    src="@/assets/images/bg-persist-1.png"
                    alt="堅持素材背景圖"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/3">
                <div class="mt-[15px] lg:p-5 lg:mt-0">
                  <p class="text-primary leading-loose">
                    所有麵包皆為手工製作，原料100%無添加任何天然化學物，堅持著健康、低油、低糖、低熱量，給予純天然的優質麵包，製作品質及過程皆有嚴格把關，讓顧客吃的健康、吃的心安。
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap flex-col-reverse lg:flex-row">
              <div class="w-full lg:w-1/3">
                <div class="mt-[15px] lg:p-5 lg:mt-0">
                  <p class="text-primary leading-loose">
                    本店將食材安全性為優先考量，使用在地優質的新鮮有機與友善耕作之蔬果，秉持著「以人為本、從良心出發」，不僅讓顧客吃的安心又健康，更是對用心栽種的有機小農最好的回饋。
                  </p>
                </div>
              </div>
              <div class="w-full lg:w-2/3">
                <div
                  class="h-[200px] lg:border-primary lg:border-l-2 lg:h-full lg:p-5"
                >
                  <img
                    src="@/assets/images/bg-persist-2.png"
                    alt="堅持素材背景圖"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食分堅持
          </h3>
        </div>
        <div class="h-[calc(100%-5rem)] p-5">
          <p class="text-primary h-full">沒有最好，只有更好。</p>
        </div>
      </div>
    </div>
  </section>
  <section class="discount">
    <div class="flex flex-row-reverse border-primary border-b-2">
      <div class="w-full md:w-[calc(100%-240px)]">
        <div class="border-primary border-l-2">
          <div class="border-primary border-b-2 h-[60px] md:h-20">
            <h3
              class="flex items-center text-20px text-primary h-full p-[15px] md:hidden"
            >
              食分好康
            </h3>
          </div>
          <div class="relative p-[15px] md:p-5">
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :navigation="{
                nextEl: '.discount .swiper-button-next',
                prevEl: '.discount .swiper-button-prev',
              }"
              :breakpoints="{
                '992': {
                  slidesPerView: 2,
                },
                '1200': {
                  slidesPerView: 3,
                },
                '1440': {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide
                v-for="product in discountProducts"
                :key="product.id"
              >
                <div class="relative border-primary border-2">
                  <div class="absolute top-0 left-5 z-20">
                    <img src="@/assets/images/icon-tag.svg" alt="標籤" />
                    <span
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                      >{{ product.category }}</span
                    >
                  </div>
                  <router-link
                    :to="`/product/${product.id}`"
                    class="group block"
                  >
                    <div class="relative pt-[100%] overflow-hidden">
                      <img
                        :src="product.imageUrl"
                        :alt="product.title"
                        class="duration-300 absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110"
                      />
                    </div>
                  </router-link>
                  <div
                    class="flex justify-between border-primary border-b-2 p-5"
                  >
                    <h4 class="text-20px text-primary">{{ product.title }}</h4>
                    <span class="text-20px text-primary"
                      >${{ $filters.currency(product.price) }}</span
                    >
                  </div>
                  <div class="flex">
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
                        <g
                          id="icon-favorite"
                          clip-path="url(#clip-icon-favorite)"
                        >
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
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-prev group">
              <svg
                class="duration-300 stroke-primary group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="clip-icon-arrow-left">
                    <rect width="20" height="20" />
                  </clipPath>
                </defs>
                <g id="icon-arrow-left" clip-path="url(#clip-icon-arrow-left)">
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M1078.147,822.453l-8,8,8,8"
                    transform="translate(-1064.147 -820.453)"
                    fill="none"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
            <div class="swiper-button-next group">
              <svg
                class="duration-300 stroke-primary group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="clip-icon-arrow-right">
                    <rect width="20" height="20" />
                  </clipPath>
                </defs>
                <g
                  id="icon-arrow-right"
                  clip-path="url(#clip-icon-arrow-right)"
                >
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M1078.147,822.453l-8,8,8,8"
                    transform="translate(1084.147 840.453) rotate(180)"
                    fill="none"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食分好康
          </h3>
        </div>
        <div class="h-[calc(100%-5rem)] p-5">
          <p class="text-primary h-full">優惠中，買起來!</p>
        </div>
      </div>
    </div>
  </section>
  <section class="article">
    <div class="flex border-primary border-b-2">
      <div class="w-full md:w-[calc(100%-240px)]">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-[60px] md:h-20">
            <h3
              class="flex items-center text-20px text-primary h-full p-[15px] md:hidden"
            >
              食在好文
            </h3>
          </div>
          <div class="relative p-[15px] md:p-5">
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :navigation="{
                nextEl: '.article .swiper-button-next',
                prevEl: '.article .swiper-button-prev',
              }"
              :breakpoints="{
                '1200': {
                  slidesPerView: 2,
                },
              }"
            >
              <SwiperSlide v-for="article in articles" :key="article.id">
                <div class="border-primary border-2 h-full">
                  <router-link
                    :to="`/article/${article.id}`"
                    class="flex flex-wrap group"
                    v-if="article.isPublic"
                  >
                    <div
                      class="relative pt-[63%] w-full overflow-hidden md:w-[240px] md:pt-0"
                    >
                      <img
                        :src="article.imageUrl"
                        :alt="article.title"
                        class="duration-300 absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110"
                      />
                    </div>
                    <div
                      class="w-full pt-5 px-[15px] pb-[30px] md:w-[calc(100%-240px)] md:min-h-[240px] md:pl-5 md:pr-10 md:py-10"
                    >
                      <span class="block text-primary opacity-50 mb-1">{{
                        $filters.date(article.create_at)
                      }}</span>
                      <h4 class="text-20px text-primary mb-2.5 md:mb-5">
                        {{ article.title }}
                      </h4>
                      <p class="text-primary">
                        {{ article.description }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-prev group">
              <svg
                class="duration-300 stroke-primary group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="clip-icon-arrow-left">
                    <rect width="20" height="20" />
                  </clipPath>
                </defs>
                <g id="icon-arrow-left" clip-path="url(#clip-icon-arrow-left)">
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M1078.147,822.453l-8,8,8,8"
                    transform="translate(-1064.147 -820.453)"
                    fill="none"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
            <div class="swiper-button-next group">
              <svg
                class="duration-300 stroke-primary group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <defs>
                  <clipPath id="clip-icon-arrow-right">
                    <rect width="20" height="20" />
                  </clipPath>
                </defs>
                <g
                  id="icon-arrow-right"
                  clip-path="url(#clip-icon-arrow-right)"
                >
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M1078.147,822.453l-8,8,8,8"
                    transform="translate(1084.147 840.453) rotate(180)"
                    fill="none"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食在好文
          </h3>
        </div>
        <p class="text-primary p-5">好文持續更新...</p>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-wrap flex-col-reverse md:flex-row-reverse md:h-20">
      <div class="w-full md:w-[calc(100%-240px)]">
        <div
          class="flex items-center border-primary border-l-2 h-[60px] md:h-full"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="訂閱獲得最新好康資訊"
            class="text-primary bg-secondary flex-1 w-full h-full p-5"
            v-model="subscribeMail"
          />
          <button
            type="button"
            class="btn-light text-white bg-primary w-[120px] h-full opacity-50 pointer-events-none md:w-40"
            :class="{ 'opacity-100 pointer-events-auto': subscribeMail }"
            @click="sendSubscribe"
          >
            訂閱
          </button>
        </div>
      </div>
      <div class="w-full md:w-[240px]">
        <h3
          class="flex items-center text-20px text-primary border-primary border-b-2 h-[60px] p-[15px] md:justify-center md:text-24px md:border-none md:h-full md:p-0"
        >
          訂閱我們
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
import { mapState } from 'pinia';
import statusStore from '@/stores/statusStore';
import LoadingComponent from '@/components/LoadingComponent.vue';

const statusModule = statusStore();

export default {
  components: {
    Swiper,
    SwiperSlide,
    LoadingComponent,
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
  data() {
    return {
      products: [],
      discountProducts: [],
      monthMainProducts: [],
      cart: {
        carts: [],
      },
      subscribeMail: '',
      articles: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [], // 若陣列沒資料，賦予空陣列
      modules: [Navigation, Autoplay],
      isLoadingItem: '',
    };
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          const { products } = res.data;
          const discountResult = new Set();
          const monthMainResult = new Set();
          products.forEach((item) => {
            if (item.origin_price !== item.price) {
              discountResult.add(item);
            }
          });
          this.discountProducts = [...discountResult].reverse();
          products.forEach((item) => {
            if (item.category === '漢堡') {
              monthMainResult.add(item);
            }
          });
          this.monthMainProducts = monthMainResult;
          setTimeout(() => {
            statusModule.isLoading = false;
          }, 1000);
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
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
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
      if (result && result.qty === 30) {
        return true;
      }
      return false;
    },
    sendSubscribe() {
      const status = '已訂閱';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: status,
        showConfirmButton: false,
        timer: 1500,
      });
      this.subscribeMail = '';
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
    this.getArticles();
    emitter.on('update-favorite', () => {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    });
  },
  created() {
    statusModule.isLoading = true;
  },
};
</script>
