<template>
  <section>
    <LoadingComponent :isLoading="isLoading"></LoadingComponent>
    <div class="relative h-[calc(100vh-140px)] border-primary border-b-2">
      <Swiper
        class="h-full"
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
          <div class="flex h-full">
            <div class="w-[240px]">
              <div class="border-primary border-b-2 h-[calc(100%-5rem)]">
                <div class="flex flex-col justify-center items-center h-full">
                  <h2 class="writing-mode-ver-lr text-48px text-primary mb-5">
                    {{ product.title }}
                  </h2>
                  <span class="text-32px text-primary"
                    >${{ $filters.currency(product.price) }}</span
                  >
                </div>
              </div>
            </div>
            <div class="w-[calc(100%-240px)]">
              <div class="border-primary border-l-2 h-full">
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <router-link
              to="/products"
              class="absolute bottom-0 left-0 flex justify-center items-center text-primary w-[240px] h-20"
              >立即點餐
              <img
                src="@/assets/images/icon-cta.svg"
                alt="icon-cta"
                class="ml-5"
              />
            </router-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <section>
    <div class="flex border-primary border-b-2">
      <div class="w-[calc(100%-240px)]">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-20"></div>
          <div class="grid grid-cols-3">
            <div class="col-span-2">
              <div class="border-primary border-b-2 border-r-2 h-full p-5">
                <img
                  src="@/assets/images/bg-persist-1.png"
                  alt="堅持素材背景圖"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="col-span-1">
              <div class="border-primary border-b-2 h-full p-5">
                <p class="text-primary leading-loose">
                  所有麵包皆為手工製作，原料100%無添加任何天然化學物，<br />堅持著健康、低油、低糖、低熱量，給予純天然的優質麵包，<br />製作品質及過程皆有嚴格把關，讓顧客吃的健康、吃的心安。
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="col-span-1">
              <div class="h-full p-5">
                <p class="text-primary leading-loose">
                  本店將食材安全性為優先考量，<br />使用在地優質的新鮮有機與友善耕作之蔬果，<br />秉持著「以人為本、從良心出發」，<br />不僅讓顧客吃的安心又健康，更是對用心栽種的有機小農最好的回饋。
                </p>
              </div>
            </div>
            <div class="col-span-2">
              <div class="border-primary border-l-2 h-full p-5">
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
      <div class="w-[240px]">
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
      <div class="w-[calc(100%-240px)]">
        <div class="border-primary border-l-2">
          <div class="border-primary border-b-2 h-20"></div>
          <div class="p-5">
            <Swiper :slides-per-view="4" :space-between="20">
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
            </Swiper>
          </div>
        </div>
      </div>
      <div class="w-[240px]">
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
      <div class="w-[calc(100%-240px)]">
        <div class="border-primary border-r-2">
          <div class="border-primary border-b-2 h-20"></div>
          <div class="p-5">
            <Swiper :slides-per-view="2" :space-between="20">
              <SwiperSlide v-for="article in articles" :key="article.id">
                <div class="flex border-primary border-2">
                  <router-link
                    :to="`/article/${article.id}`"
                    class="group overflow-hidden"
                    v-if="article.isPublic"
                  >
                    <img
                      :src="article.imageUrl"
                      :alt="article.title"
                      class="duration-300 w-[240px] h-[240px] object-cover group-hover:scale-110"
                    />
                  </router-link>
                  <div class="flex-1 px-5 py-10">
                    <span class="block text-primary opacity-50 mb-1">{{
                      $filters.date(article.create_at)
                    }}</span>
                    <h4 class="text-20px text-primary mb-5">
                      {{ article.title }}
                    </h4>
                    <p class="text-primary">
                      {{ article.description }}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            食在好文
          </h3>
        </div>
        <div class="h-[calc(100%-5rem)] p-5">
          <p class="text-primary h-full">好文持續更新...</p>
        </div>
      </div>
    </div>
  </section>
  <section class="subscribe">
    <div class="flex flex-row-reverse h-20">
      <button
        type="button"
        class="flex items-center text-white bg-primary px-16"
      >
        訂閱
      </button>
      <div class="flex-1">
        <div class="flex items-center border-primary border-l-2 h-full px-5">
          <input
            type="email"
            placeholder="訂閱我們已獲得最新好康資訊"
            class="text-primary bg-secondary w-full h-full"
          />
        </div>
      </div>
      <div class="w-[240px]">
        <h3
          class="flex justify-center items-center text-24px text-primary h-full"
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
import { Autoplay } from 'swiper';

export default {
  data() {
    return {
      products: [],
      discountProducts: [],
      monthMainProducts: [],
      articles: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [], // 若陣列沒資料，賦予空陣列
      isLoading: true,
    };
  },
  components: {
    LoadingComponent,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
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
          console.log(1);
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
