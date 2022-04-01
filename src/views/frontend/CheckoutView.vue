<template>
  <ProgressBar step="2"></ProgressBar>
  <section class="checkout">
    <h2 class="text-20px text-white bg-primary p-[15px] md:p-5">填寫資訊</h2>
    <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
      <div
        class="grid grid-cols-2 gap-5 pt-[15px] px-[15px] pb-[30px] md:pt-5 md:px-5 md:pb-10"
      >
        <div class="col-span-2 md:col-span-1">
          <label for="name" class="block text-primary w-full mb-1">姓名</label>
          <div class="relative">
            <VField
              type="text"
              name="姓名"
              id="name"
              placeholder="請輸入姓名"
              rules="required"
              class="text-primary bg-secondary border-primary/50 border-2 w-full h-[60px] px-5"
              :class="{
                '!border-warning': errors['姓名'],
                '!border-primary': form.user.name && !errors['姓名'],
              }"
              v-model="form.user.name"
            >
            </VField>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="errors['姓名']"
            >
              <img
                src="@/assets/images/icon-remind.svg"
                alt="icon-checked"
                class="bg-warning rounded-full"
              />
            </div>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="form.user.name && !errors['姓名']"
            >
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
          <ErrorMessage
            name="姓名"
            class="block text-14px text-warning mt-1"
          ></ErrorMessage>
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="email" class="block text-primary w-full mb-1"
            >E-mail</label
          >
          <div class="relative">
            <VField
              type="email"
              name="email"
              id="email"
              placeholder="請輸入E-mail"
              rules="email|required"
              class="text-primary bg-secondary border-primary/50 border-2 w-full h-[60px] px-5"
              :class="{
                '!border-warning': errors['email'],
                '!border-primary': form.user.email && !errors['email'],
              }"
              v-model="form.user.email"
            >
            </VField>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="errors['email']"
            >
              <img
                src="@/assets/images/icon-remind.svg"
                alt="icon-checked"
                class="bg-warning rounded-full"
              />
            </div>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="form.user.email && !errors['email']"
            >
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
          <ErrorMessage
            name="email"
            class="block text-14px text-warning mt-1"
          ></ErrorMessage>
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="tel" class="block text-primary w-full mb-1">電話</label>
          <div class="relative">
            <VField
              type="tel"
              name="電話"
              id="tel"
              placeholder="請輸入電話"
              :rules="isPhone"
              class="text-primary bg-secondary border-primary/50 border-2 w-full h-[60px] px-5"
              :class="{
                '!border-warning': errors['電話'],
                '!border-primary': form.user.tel && !errors['電話'],
              }"
              v-model="form.user.tel"
            ></VField>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="errors['電話']"
            >
              <img
                src="@/assets/images/icon-remind.svg"
                alt="icon-checked"
                class="bg-warning rounded-full"
              />
            </div>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="form.user.tel && !errors['電話']"
            >
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
          <ErrorMessage
            name="電話"
            class="block text-14px text-warning mt-1"
          ></ErrorMessage>
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="address" class="block text-primary w-full mb-1"
            >地址</label
          >
          <div class="relative">
            <VField
              type="text"
              name="地址"
              id="address"
              placeholder="請輸入地址"
              rules="required"
              class="text-primary bg-secondary border-primary/50 border-2 w-full h-[60px] px-5"
              :class="{
                '!border-warning': errors['地址'],
                '!border-primary': form.user.address && !errors['地址'],
              }"
              v-model="form.user.address"
            ></VField>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="errors['地址']"
            >
              <img
                src="@/assets/images/icon-remind.svg"
                alt="icon-checked"
                class="bg-warning rounded-full"
              />
            </div>
            <div
              class="absolute top-1/2 right-5 -translate-y-1/2"
              v-if="form.user.address && !errors['地址']"
            >
              <img
                src="@/assets/images/icon-checked.svg"
                alt="icon-checked"
                class="bg-primary rounded-full"
              />
            </div>
          </div>
          <ErrorMessage
            name="地址"
            class="block text-14px text-warning mt-1"
          ></ErrorMessage>
        </div>
        <div class="col-span-2">
          <label for="remark" class="block text-primary w-full mb-1"
            >備註</label
          >
          <textarea
            name="remark"
            id="remark"
            class="text-primary bg-secondary border-primary/50 border-2 resize-none w-full min-h-[160px] p-5"
            :class="{ '!border-primary': form.message }"
            v-model="form.message"
          ></textarea>
        </div>
      </div>
      <div
        class="flex justify-between bg-primary p-[15px] md:p-5"
        @click="toggleOrderInfo"
      >
        <h2 class="text-20px text-white">訂單資訊</h2>
        <img
          src="@/assets/images/icon-arrow-down.svg"
          alt="icon-arrow-down"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
      <div class="px-[15px] py-5 md:p-5">
        <ul v-show="isOpen">
          <li class="hidden border-primary border-b-2 pb-2.5 md:flex">
            <div class="w-2/5 lg:w-1/4">
              <span class="text-primary">商品資訊</span>
            </div>
            <div class="w-1/5 lg:w-1/4">
              <span class="text-primary">單件價格</span>
            </div>
            <div class="w-1/5 lg:w-1/4">
              <span class="text-primary">數量</span>
            </div>
            <div class="w-1/5 lg:w-1/4">
              <span class="text-primary">小計</span>
            </div>
          </li>
          <li
            class="relative flex flex-wrap items-center border-primary border-b-2 py-[15px] md:py-5"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <div class="w-full md:w-2/5 lg:w-1/4">
              <div class="flex items-center mb-2.5 md:mb-0">
                <img
                  :src="item.product.imageUrl"
                  :alt="item.title"
                  class="w-20 h-20 object-cover mr-5"
                />
                <span class="text-primary">{{ item.product.title }}</span>
              </div>
            </div>
            <div class="w-full md:w-1/5 lg:w-1/4">
              <span class="text-primary md:hidden">單件價格：</span>
              <span class="text-primary"
                >${{ $filters.currency(item.product.price) }}</span
              >
            </div>
            <div class="w-full md:w-1/5 lg:w-1/4">
              <div class="my-2.5 md:my-0">
                <span class="text-primary md:hidden">數量：</span>
                <span class="text-primary">{{ item.qty }}</span>
              </div>
            </div>
            <div class="w-full md:w-1/5 lg:w-1/4">
              <span class="text-primary md:hidden">小計：</span>
              <span class="text-primary"
                >${{ $filters.currency(item.total) }}</span
              >
            </div>
          </li>
        </ul>
        <div class="text-right mt-5">
          <p
            class="mb-2"
            :class="{
              'text-20px text-primary/50 line-through':
                cart.total !== cart.final_total,
              'text-24px text-primary': cart.total === cart.final_total,
            }"
          >
            總計金額 : ${{ $filters.currency(cart.total) }}
          </p>
          <p
            class="text-24px text-primary mb-5"
            v-if="cart.total !== cart.final_total"
          >
            折扣後金額 : ${{ $filters.currency(Math.round(cart.final_total)) }}
          </p>
          <button
            type="submit"
            class="btn-light text-white bg-primary px-12 py-[18px]"
            :class="{
              'cursor-not-allowed opacity-50':
                Object.keys(errors).length > 0 || !checkFormData,
            }"
            :disabled="Object.keys(errors).length > 0 || !checkFormData"
          >
            送出訂單
          </button>
        </div>
      </div>
    </VForm>
  </section>
</template>

<script>
import emitter from '@/methods/emitter';
import ProgressBar from '@/components/frontend/ProgressBar.vue';

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      id: '',
      isOpen: true,
    };
  },
  components: {
    ProgressBar,
  },
  //
  computed: {
    checkFormData() {
      const formData = ['name', 'email', 'tel', 'address'];
      return formData.every((item) => this.form.user[item] !== '');
    },
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 判斷電話是否符合正規表達式
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的電話號碼';
    },
    toggleOrderInfo() {
      this.isOpen = !this.isOpen;
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      const status = '建立訂單';
      this.$http
        .post(url, { data: order })
        .then((res) => {
          this.$messageState(res, status);
          this.$refs.form.resetForm(); // 清空 form 表單內容，套件用法
          this.form.message = '';
          this.$router.push({
            name: 'checkorder', // params 只能用 name 不能用 path
            params: { id: res.data.orderId },
          });
          emitter.emit('get-cart');
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
