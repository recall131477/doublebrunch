<template>
  <ProgressBar step="4"></ProgressBar>
  <section>
    <h2 class="text-20px text-white bg-primary p-[15px] md:p-5">
      感謝您的購買
    </h2>
    <ul class="px-5 pt-5 pb-10">
      <li class="border-primary border-b-2 pb-5">
        <p class="text-primary md:hidden">
          下單時間：{{ $filters.date(order.create_at) }}
        </p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">下單時間</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary">{{
              $filters.date(order.create_at)
            }}</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <p class="text-primary md:hidden">訂單編號：{{ order.id }}</p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">訂單編號</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary">{{ order.id }}</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <p class="text-primary md:hidden">姓名：{{ user.name }}</p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">姓名</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary">{{ user.name }}</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <p class="text-primary md:hidden">電話：{{ user.tel }}</p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">電話</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary">{{ user.tel }}</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <p class="text-primary md:hidden">E-mail：{{ user.email }}</p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">E-mail</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary">{{ user.email }}</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <p class="text-primary md:hidden">地址：{{ user.address }}</p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">地址</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary">{{ user.address }}</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <div class="flex md:hidden">
          <p class="text-primary">備註：</p>
          <span class="text-primary" v-if="order.message">{{
            order.message
          }}</span>
          <span class="text-primary" v-else>無</span>
        </div>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">備註</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary" v-if="order.message">{{
              order.message
            }}</span>
            <span class="text-primary" v-else>無</span>
          </div>
        </div>
      </li>
      <li class="border-primary border-b-2 py-5">
        <p class="text-primary md:hidden">
          總計：${{ $filters.currency(order.total) }}
        </p>
        <div class="hidden md:flex">
          <div class="w-1/2">
            <span class="text-primary">總計</span>
          </div>
          <div class="w-1/2">
            <span class="text-primary"
              >${{ $filters.currency(order.total) }}</span
            >
          </div>
        </div>
      </li>
    </ul>
  </section>
  <section class="complete">
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
          v-for="item in products"
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
        <p class="text-24px text-primary mb-5">
          總計金額 : ${{ $filters.currency(order.total) }}
        </p>
        <div class="flex justify-end -ml-[15px]">
          <div class="w-1/2 pl-[15px] md:w-auto">
            <router-link
              to="/"
              class="btn duration-[400ms] flex justify-center items-center text-primary border-primary border-2 h-[60px] md:w-40"
              >前往首頁
            </router-link>
          </div>
          <div class="w-1/2 pl-[15px] md:w-auto">
            <router-link
              to="/products"
              class="btn-light duration-300 flex justify-center items-center text-white bg-primary h-[60px] md:w-40"
              >繼續購物
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';
import ProgressBar from '@/components/frontend/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      order: {},
      user: {},
      products: {},
      isOpen: true,
    };
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.order;
          this.user = res.data.order.user;
          this.products = res.data.order.products;
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
    toggleOrderInfo() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
