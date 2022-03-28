<template>
  <section>
    <LoadingComponent :isLoading="isLoading"></LoadingComponent>
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
          <div class="flex flex-wrap flex-col-reverse md:h-[calc(100vh-140px)]">
            <div class="w-full h-full md:w-[240px]">
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
            <div class="w-full h-full md:w-[calc(100%-240px)]">
              <div
                class="relative pt-[100%] h-full md:border-primary md:border-l-2 md:pt-0"
              >
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <router-link
            to="/products"
            class="flex justify-center items-center text-white bg-primary h-[60px] md:absolute md:bottom-0 md:left-0 md:text-primary md:bg-secondary md:w-[240px] md:h-20"
            >立即點餐
            <svg
              class="stroke-white ml-5 md:stroke-primary"
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
                    所有麵包皆為手工製作，原料100%無添加任何天然化學物，<br />堅持著健康、低油、低糖、低熱量，給予純天然的優質麵包，<br />製作品質及過程皆有嚴格把關，讓顧客吃的健康、吃的心安。
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap flex-col-reverse lg:flex-row">
              <div class="w-full lg:w-1/3">
                <div class="mt-[15px] lg:p-5 lg:mt-0">
                  <p class="text-primary leading-loose">
                    本店將食材安全性為優先考量，<br />使用在地優質的新鮮有機與友善耕作之蔬果，<br />秉持著「以人為本、從良心出發」，<br />不僅讓顧客吃的安心又健康，更是對用心栽種的有機小農最好的回饋。
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
  <section>
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
          <div class="p-[15px] md:p-5">
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
                    <span class="text-20px text-primary">{{
                      $filters.currency(product.price)
                    }}</span>
                  </div>
                  <div class="flex">
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
                          alt="icon-購物"
                          class="w-4"
                        />
                        <span class="text-primary ml-3">加入購物車</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div class="swiper-button-prev">
                <img
                  src="@/assets/images/icon-arrow-left.svg"
                  alt="icon-arrow-left"
                />
              </div>
              <div class="swiper-button-next">
                <img
                  src="@/assets/images/icon-arrow-right.svg"
                  alt="icon-arrow-right"
                />
              </div>
            </Swiper>
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
  <section>
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
          <div class="article p-[15px] md:p-5">
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
                      class="w-full pt-5 px-[15px] pb-[30px] md:w-[calc(100%-240px)] md:min-h-[240px] md:px-5 md:py-10"
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
              <div class="swiper-button-prev">
                <img
                  src="@/assets/images/icon-arrow-left.svg"
                  alt="icon-arrow-left"
                />
              </div>
              <div class="swiper-button-next">
                <img
                  src="@/assets/images/icon-arrow-right.svg"
                  alt="icon-arrow-right"
                />
              </div>
            </Swiper>
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
  <section class="subscribe">
    <div class="flex flex-wrap flex-col-reverse md:flex-row-reverse md:h-20">
      <div class="w-full md:w-[calc(100%-240px)]">
        <div
          class="flex items-center border-primary border-l-2 h-[60px] md:h-full"
        >
          <input
            type="email"
            placeholder="訂閱獲得最新好康資訊"
            class="text-primary bg-secondary flex-1 w-full h-full p-5"
          />
          <button
            type="button"
            class="text-white bg-primary w-[120px] h-full md:w-40"
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
import LoadingComponent from '@/components/LoadingComponent.vue';
import emitter from '@/methods/emitter';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';

export default {
  data() {
    return {
      products: [],
      discountProducts: [],
      monthMainProducts: [],
      articles: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [], // 若陣列沒資料，賦予空陣列
      isLoading: false,
      modules: [Navigation, Autoplay],
    };
  },
  components: {
    LoadingComponent,
    Swiper,
    SwiperSlide,
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
    // 取得特價產品資料
    getDiscountProducts() {
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
          this.discountProducts = discountResult;
          products.forEach((item) => {
            if (item.category === '漢堡') {
              monthMainResult.add(item);
            }
          });
          this.monthMainProducts = monthMainResult;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 取得所有文章資料
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
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
          this.$messageState(res, status);
          this.isLoadingItem = '';
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
    this.getDiscountProducts();
    this.getArticles();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
