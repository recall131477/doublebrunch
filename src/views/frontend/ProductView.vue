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
          <h2
            class="text-24px text-primary mb-[15px] md:text-32px md:mb-5 lg:text-40px"
          >
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
                class="duration-300 relative w-[60px] h-[60px] group"
                :disabled="qty === 1"
                :class="{
                  'cursor-not-allowed opacity-30': qty === 1,
                  'hover:bg-primary': qty > 1,
                }"
                @click="qty -= 1"
              >
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                  :class="{ 'group-hover:bg-white': qty > 1 }"
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
                class="duration-300 relative w-[60px] h-[60px] group"
                :disabled="qty === 30"
                :class="{
                  'cursor-not-allowed opacity-30': qty === 30,
                  'hover:bg-primary': qty < 30,
                }"
                @click="qty += 1"
              >
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-4 h-[2px]"
                  :class="{ 'group-hover:bg-white': qty < 30 }"
                ></span>
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-4 h-[2px]"
                  :class="{ 'group-hover:bg-white': qty < 30 }"
                ></span>
              </button>
            </div>
            <div class="h-[60px]">
              <button
                type="button"
                class="flex justify-center items-center w-full h-full"
                @click="addToCart(product.id, qty)"
              >
                <img src="@/assets/images/icon-cart.svg" alt="購物" />
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
                    <div class="flex-1">
                      <button
                        type="button"
                        class="duration-300 flex justify-center items-center border-primary border-l-2 w-full h-full group hover:bg-primary"
                        @click="addToCart(product.id)"
                      >
                        <svg
                          class="stroke-primary w-4 h-4 group-hover:stroke-white"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectangle_79"
                                data-name="Rectangle 79"
                                width="10"
                                height="9"
                                transform="translate(305 60)"
                                fill="#fff"
                                stroke="#707070"
                                stroke-width="1"
                              />
                            </clipPath>
                            <clipPath id="clip-icon-cart">
                              <rect width="20" height="20" />
                            </clipPath>
                          </defs>
                          <g id="icon-cart" clip-path="url(#clip-icon-cart)">
                            <g
                              id="Group_247"
                              data-name="Group 247"
                              transform="translate(9)"
                            >
                              <path
                                id="Rectangle_206"
                                data-name="Rectangle 206"
                                d="M3,0H13a3,3,0,0,1,3,3v8a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V3A3,3,0,0,1,3,0Z"
                                transform="translate(-7 6)"
                                fill="none"
                                stroke-width="2"
                              />
                              <g
                                id="Group_246"
                                data-name="Group 246"
                                transform="translate(-309 -61)"
                              >
                                <g
                                  id="Mask_Group_16"
                                  data-name="Mask Group 16"
                                  transform="translate(0 2)"
                                  clip-path="url(#clip-path)"
                                >
                                  <g
                                    id="Rectangle_80"
                                    data-name="Rectangle 80"
                                    transform="translate(305 60)"
                                    fill="none"
                                    stroke-width="2"
                                  >
                                    <rect
                                      width="10"
                                      height="14"
                                      rx="5"
                                      stroke="none"
                                    />
                                    <rect
                                      x="1"
                                      y="1"
                                      width="8"
                                      height="12"
                                      rx="4"
                                      fill="none"
                                    />
                                  </g>
                                </g>
                                <circle
                                  id="Ellipse_8"
                                  data-name="Ellipse 8"
                                  cx="1"
                                  cy="1"
                                  r="1"
                                  transform="translate(305 70)"
                                  fill="#8ca06e"
                                />
                                <circle
                                  id="Ellipse_9"
                                  data-name="Ellipse 9"
                                  cx="1"
                                  cy="1"
                                  r="1"
                                  transform="translate(313 70)"
                                  fill="#8ca06e"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span class="text-primary ml-3 group-hover:text-white"
                          >加入購物車</span
                        >
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
    emitter.on('update-favorite', () => {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    });
  },
};
</script>
