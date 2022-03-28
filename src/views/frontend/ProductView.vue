<template>
  <section>
    <div
      class="flex flex-wrap border-primary border-b-2 lg:h-[calc(100vh-140px)]"
    >
      <div class="w-full h-full lg:w-1/2">
        <div class="relative pt-[100%] h-full lg:pt-0">
          <img
            :src="product.imageUrl"
            :alt="product.title"
            class="absolute top-0 left-0 w-full h-full object-cover lg:relative"
          />
        </div>
      </div>
      <div class="w-full h-full lg:w-1/2">
        <div class="p-[15px] md:p-10 lg:p-[60px]">
          <span class="text-primary opacity-50">{{ product.category }}</span>
          <h2 class="text-24px text-primary mb-[15px] md:text-32px md:mb-5 lg:text-40px">
            {{ product.title }}
          </h2>
          <p class="text-primary mb-2">
            {{ product.description }}
          </p>
          <p class="text-12px text-primary mb-[15px] md:text-14px md:mb-[30px]">
            {{ product.content }}
          </p>
          <div class="mb-[15px] md:mb-10">
            <span
              class="block"
              :class="{
                'text-primary/50 line-through md:text-24px':
                  product.origin_price !== product.price,
                'text-24px text-primary md:text-32px':
                  product.origin_price === product.price,
              }"
              >原價 ${{ $filters.currency(product.origin_price) }}</span
            >
            <span
              class="block text-24px text-primary mt-1 md:text-32px"
              v-if="product.origin_price !== product.price"
              >特價 ${{ $filters.currency(product.price) }}</span
            >
          </div>
          <div class="border-primary border-2">
            <div class="flex border-primary border-b-2">
              <button
                type="button"
                class="relative w-[60px] h-[60px]"
                :disabled="qty === 1"
                :class="{ 'cursor-not-allowed opacity-30': qty === 1 }"
                @click="changeProductQty('reduce')"
              >
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                ></span>
              </button>
              <!-- onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')" 讓 input 不能輸入 '-','+','.' -->
              <input
                type="text"
                class="text-primary text-center bg-secondary border-primary border-x-2 flex-1 w-full h-[60px]"
                onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
                v-model.number="qty"
              />
              <button
                type="button"
                class="relative w-[60px] h-[60px]"
                :disabled="qty === 30"
                :class="{ 'cursor-not-allowed opacity-30': qty === 30 }"
                @click="changeProductQty('add')"
              >
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                ></span>
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-4 h-[2px]"
                ></span>
              </button>
            </div>
            <div class="h-[60px]">
              <button
                type="button"
                class="flex justify-center items-center w-full h-full"
                @click="addToCart(product.id)"
              >
                <img src="@/assets/images/icon-cart.svg" alt="icon-購物" />
                <span class="text-primary ml-3">加入購物車</span>
              </button>
            </div>
          </div>
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
              注意事項
            </h3>
          </div>
          <ul class="p-[15px] md:pl-10 md:pr-5 md:py-[30px]">
            <li class="mb-5 md:mb-10">
              <h3 class="text-20px text-primary mb-[15px] md:text-24px md:mb-5">
                餐點注意事項
              </h3>
              <p class="text-primary leading-loose">
                餐點皆為現點現做，為保食物品質，請儘早食用，隔餐勿食。<br />
                因冰品及甜點皆是手工製作，若當下未立即食用，請將其冷藏、冷凍，並於兩天內食用完畢。<br />
                餐點內的季節水果，會隨著每季做更換，若有疑慮可提前詢問。
              </p>
            </li>
            <li>
              <h3 class="text-20px text-primary mb-[15px] md:text-24px md:mb-5">
                退款須知
              </h3>
              <p class="text-primary leading-loose">
                依《消費者保護法》及《食品安全衛生管理法》之規定，如遇餐點包裝瑕疵、餐點品項不符……等狀況，請立即聯絡本店，如情形屬實，皆可選擇重新製作或退款。
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="hidden md:block md:w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            注意事項
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="flex flex-row-reverse">
      <div class="w-full md:w-[calc(100%-240px)]">
        <div class="border-primary border-l-2">
          <div class="border-primary border-b-2 h-[60px] md:h-20">
            <h3
              class="flex items-center text-20px text-primary h-full p-[15px] md:hidden"
            >
              相關餐點
            </h3>
          </div>
          <div class="p-[15px] md:p-5">
            <Swiper
              :slides-per-view="1"
              :space-between="20"
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
              <SwiperSlide v-for="product in filterProducts" :key="product.id">
                <div class="relative border-primary border-2">
                  <div class="absolute top-0 left-5 z-20">
                    <img src="@/assets/images/icon-tag.svg" alt="icon-標籤" />
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
      <div class="hidden md:block md:w-[240px]">
        <div class="border-primary border-b-2 h-20">
          <h3
            class="flex justify-center items-center text-24px text-primary h-full"
          >
            相關餐點
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emitter from '@/methods/emitter';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  data() {
    return {
      products: [],
      product: [],
      favorite: JSON.parse(localStorage.getItem('favorite')) || [], // 若陣列沒資料，賦予空陣列
      qty: 1,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
  computed: {
    // 過濾產品並顯示該系列相關產品
    filterProducts() {
      const { category, id } = this.product; // 解構取出 category 與 id
      return this.products.filter(
        (item) => item.category === category && item.id !== id,
      );
    },
  },
  methods: {
    // 取得所有產品資料
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 取得產品資料
    getProduct() {
      const { id } = this.$route.params; // 解構式取出 id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 變更產品數量
    changeProductQty(calculate) {
      if (calculate === 'reduce') {
        this.qty -= 1;
      } else {
        this.qty += 1;
      }
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
    this.getProduct();
    this.getProducts();
  },
};
</script>
