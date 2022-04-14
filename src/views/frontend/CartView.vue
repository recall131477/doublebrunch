<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <ProgressBar step="1"></ProgressBar>
  <section>
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
        class="btn-pulse inline-block text-white bg-primary px-7 py-2 md:px-12 md:py-[18px]"
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
              class="relative flex border-primary border-2 my-2.5 md:w-[200px] md:my-0"
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
              <span
                class="absolute top-[52px] right-0 text-14px text-warning md:top-11 md:left-0"
                v-if="item.qty === 30"
                >商品數量不可超過30</span
              >
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
                class="btn duration-[400ms] flex justify-center items-center text-primary border-primary border-r-2 w-full h-[60px]"
                @click="deleteAllCarts"
              >
                清空購物車
              </button>
            </div>
            <div class="w-1/2">
              <router-link
                to="/products"
                class="btn duration-[400ms] flex justify-center items-center text-primary border-primary border-r-2 h-[60px] group"
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
              class="btn-light text-white bg-primary h-[60px] px-5"
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
          class="btn-light inline-block text-white bg-primary px-12 py-[18px]"
          >前往結帳</router-link
        >
      </div>
    </div>
    <CouponModal ref="couponModal" @get-coupon="useCoupon"></CouponModal>
  </section>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';
import { mapState } from 'pinia';
import statusStore from '@/stores/statusStore';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ProgressBar from '@/components/frontend/ProgressBar.vue';
import CouponModal from '@/components/frontend/modal/CouponModal.vue';

const statusModule = statusStore();

export default {
  components: {
    LoadingComponent,
    ProgressBar,
    CouponModal,
  },
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
  computed: {
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
          this.cart.carts.forEach((item) => {
            const newItem = item;
            if (newItem.qty > 30) {
              newItem.qty = 30;
              newItem.total = newItem.product.price * 30;
            }
          });
          if (this.cart.final_total !== this.cart.total) {
            this.isCoupon = true;
            this.couponCode = 'double777';
          } else {
            this.isCoupon = false;
          }
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
    updateCartItem(item, calculate) {
      let newQty = item.qty;
      if (calculate === 'reduce') {
        newQty -= 1;
      } else if (calculate === 'add') {
        newQty += 1;
      } else {
        newQty = calculate;
      }
      if (newQty > 30) {
        newQty = 30;
      }
      const data = {
        product_id: item.product_id,
        qty: newQty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const status = '已更新商品';
      this.$http
        .put(url, { data })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
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
    deleteCartItem(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const status = '已刪除商品';
      this.$http
        .delete(url)
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
    deleteAllCarts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      const status = '已刪除全部商品';
      this.$http
        .delete(url)
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
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    openCouponModal() {
      this.$refs.couponModal.openModal();
    },
  },
  mounted() {
    statusModule.isLoading = true;
    setTimeout(() => {
      statusModule.isLoading = false;
    }, 1000);
    this.getCart();
    // 我的最愛產品直接被新增購物車頁面
    emitter.on('add-cart', () => {
      this.getCart();
    });
  },
};
</script>
