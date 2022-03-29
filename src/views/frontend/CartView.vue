<template>
  <ProgressBar step="1"></ProgressBar>
  <section class="cart">
    <div
      class="text-center p-[15px] md:px-5 md:py-20"
      v-if="cart.carts.length === 0"
    >
      <p
        class="text-24px text-primary text-center mb-[15px] md:text-32px md:mb-5 lg:text-48px"
      >
        目前購物車沒有商品哦!
      </p>
      <router-link
        to="/products"
        class="inline-block text-white bg-primary px-7 py-2 md:px-12 md:py-[18px]"
        >前往購物</router-link
      >
    </div>
    <div v-else>
      <ul>
        <li class="hidden border-primary border-b-2 px-5 py-2.5 md:flex">
          <div class="w-2/6 lg:w-1/4">
            <span class="text-primary">商品資訊</span>
          </div>
          <div class="w-1/6 lg:w-1/4">
            <span class="text-primary">單件價格</span>
          </div>
          <div class="w-2/6 lg:w-1/4">
            <span class="text-primary">數量</span>
          </div>
          <div class="w-1/6 lg:w-1/4">
            <span class="text-primary">小計</span>
          </div>
        </li>
        <li
          class="relative flex flex-wrap items-center border-primary border-b-2 p-[15px] md:px-5 md:py-2.5"
          v-for="item in cart.carts"
          :key="item.id"
        >
          <div class="w-full md:w-2/6 lg:w-1/4">
            <div class="flex items-center mb-2.5 md:mb-0">
              <img
                :src="item.product.imageUrl"
                :alt="item.product.title"
                class="w-20 h-20 object-cover mr-5"
              />
              <span class="text-primary">{{ item.product.title }}</span>
            </div>
          </div>
          <div class="w-full md:w-1/6 lg:w-1/4">
            <span class="text-primary md:hidden">單件價格：</span>
            <span class="text-primary"
              >${{ $filters.currency(item.product.price) }}</span
            >
          </div>
          <div class="w-full md:w-2/6 lg:w-1/4">
            <div
              class="flex border-primary border-2 my-2.5 md:w-[200px] md:my-0"
            >
              <button
                type="button"
                class="duration-300 relative w-10 h-10 group"
                :disabled="item.qty === 1"
                :class="{
                  'cursor-not-allowed opacity-30': item.qty === 1,
                  'hover:bg-primary': item.qty > 1,
                }"
                @click="updateCartItem(item, 'reduce')"
              >
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-[2px]"
                  :class="{ 'group-hover:bg-white': item.qty > 1 }"
                ></span>
              </button>
              <!-- onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')" 讓 input 不能輸入 '-','+','.' -->
              <input
                type="text"
                class="text-primary text-center bg-secondary border-primary border-x-2 flex-1 w-full"
                onkeyup="value=value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')"
                v-model.number="item.qty"
                @change="updateCartItem(item, item.qty)"
              />
              <button
                type="button"
                class="duration-300 relative w-10 h-10 group"
                :disabled="item.qty === 30"
                :class="{
                  'cursor-not-allowed opacity-30': item.qty === 30,
                  'hover:bg-primary': item.qty < 30,
                }"
                @click="updateCartItem(item, 'add')"
              >
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-[2px]"
                  :class="{ 'group-hover:bg-white': item.qty < 30 }"
                ></span>
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-primary w-3 h-[2px]"
                  :class="{ 'group-hover:bg-white': item.qty < 30 }"
                ></span>
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/6 lg:w-1/4">
            <span class="text-primary md:hidden">小計：</span>
            <span class="text-primary"
              >${{ $filters.currency(item.total) }}</span
            >
          </div>
          <button
            type="button"
            class="duration-300 absolute top-[15px] right-[15px] w-6 h-6 hover:rotate-90 md:top-1/2 md:right-5 md:-translate-y-1/2"
            @click="deleteCartItem(item.id)"
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
        </li>
      </ul>
      <div class="flex flex-wrap border-primary border-b-2">
        <div class="w-full md:w-1/2">
          <div class="flex border-primary border-b-2 md:border-none">
            <div class="w-1/2">
              <button
                type="button"
                class="flex justify-center items-center text-primary border-primary border-r-2 w-full h-[60px]"
                @click="deleteAllCarts"
              >
                清空購物車
              </button>
            </div>
            <div class="w-1/2">
              <router-link
                to="/products"
                class="flex justify-center items-center text-primary border-primary border-r-2 h-[60px]"
              >
                <img src="@/assets/images/icon-cart.svg" alt="購物" />
                <span class="ml-3">繼續購物</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex">
            <input
              type="text"
              placeholder="輸入優惠券代碼"
              class="text-primary bg-secondary w-full h-[60px] flex-1 px-5"
              :disabled="isCoupon"
              v-model="couponCode"
            />
            <button
              type="button"
              class="text-white bg-primary px-5"
              :disabled="isCoupon"
              v-if="isCoupon"
            >
              已套用優惠券
            </button>
            <button
              type="button"
              class="text-white bg-primary h-[60px] px-5"
              v-else
              @click="openCouponModal"
            >
              領取優惠券
            </button>
          </div>
        </div>
      </div>
      <div class="text-right pt-5 px-[15px] pb-2 md:p-5">
        <p
          class="mb-2"
          :class="{
            'text-20px text-primary/50 line-through': isCoupon,
            'text-24px text-primary': !isCoupon,
          }"
        >
          總計金額 : ${{ $filters.currency(cart.total) }}
        </p>
        <p class="text-24px text-primary mb-5" v-if="isCoupon">
          折扣後金額 : ${{ $filters.currency(Math.round(cart.final_total)) }}
        </p>
        <router-link
          to="/checkout"
          class="inline-block text-white bg-primary px-12 py-[18px]"
          >前往結帳</router-link
        >
      </div>
    </div>
    <CouponModal ref="couponModal" @get-coupon="useCoupon"></CouponModal>
  </section>
</template>

<script>
import emitter from '@/methods/emitter';
import ProgressBar from '@/components/frontend/ProgressBar.vue';
import CouponModal from '@/components/frontend/modal/CouponModal.vue';

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
      couponCode: '',
      isCoupon: false,
      status: '',
    };
  },
  components: {
    ProgressBar,
    CouponModal,
  },
  methods: {
    // 取得購物車資料
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          if (this.cart.final_total !== this.cart.total) {
            this.isCoupon = true;
            this.couponCode = 'double777';
          } else {
            this.isCoupon = false;
          }
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 更新購物車
    updateCartItem(item, calculate) {
      // 判斷點擊 '-' 、 '+' 還是 input
      let newQty = item.qty;
      if (calculate === 'reduce') {
        newQty -= 1;
      } else if (calculate === 'add') {
        newQty += 1;
      } else {
        newQty = calculate;
      }
      // 若輸入數字大於30，數量直接等於30
      if (newQty > 30) {
        newQty = 30;
      }
      const data = {
        product_id: item.id,
        qty: newQty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const status = '更新商品';
      this.$http
        .put(url, { data })
        .then((res) => {
          this.$messageState(res, status);
          this.getCart();
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 刪除購物車特定產品
    deleteCartItem(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const status = '刪除商品';
      this.$http
        .delete(url)
        .then((res) => {
          this.$messageState(res, status);
          emitter.emit('get-cart');
          this.getCart();
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 刪除購物車全部產品
    deleteAllCarts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      const status = '刪除全部商品';
      this.$http
        .delete(url)
        .then((res) => {
          this.$messageState(res, status);
          emitter.emit('get-cart');
          this.getCart();
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 領取優惠券
    useCoupon() {
      this.couponCode = 'double777';
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const data = {
        code: this.couponCode,
      };
      this.$http
        .post(url, { data })
        .then((res) => {
          if (res.data.success) {
            this.cart.final_total = res.data.data.final_total;
            this.isCoupon = true;
          }
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    openCouponModal() {
      this.$refs.couponModal.openModal();
    },
  },
  mounted() {
    this.getCart();
    // 我的最愛產品直接被新增購物車頁面
    emitter.on('add-cart', () => {
      this.getCart();
    });
  },
};
</script>
