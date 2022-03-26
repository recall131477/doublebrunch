<template>
  <ProgressBar step="3"></ProgressBar>
  <section>
    <h2 class="text-20px text-white bg-primary p-5">確認訂單</h2>
    <ul class="px-5 pt-5 pb-10">
      <li class="flex border-primary border-b-2 pb-5">
        <div class="w-1/2">
          <span class="text-primary">下單時間</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">{{ $filters.date(order.create_at) }}</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">訂單編號</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">{{ order.id }}</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">姓名</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">{{ user.name }}</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">電話</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">{{ user.tel }}</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">E-mail</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">{{ user.email }}</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">地址</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary">{{ user.address }}</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">備註</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary" v-if="order.message">{{
            order.message
          }}</span>
          <span class="text-primary" v-else>無</span>
        </div>
      </li>
      <li class="flex border-primary border-b-2 py-5">
        <div class="w-1/2">
          <span class="text-primary">總計</span>
        </div>
        <div class="w-1/2">
          <span class="text-primary"
            >${{ $filters.currency(order.total) }}</span
          >
        </div>
      </li>
    </ul>
  </section>
  <section>
    <div class="flex justify-between bg-primary p-5" @click="toggleOrderInfo">
      <h2 class="text-20px text-white">訂單資訊</h2>
      <img
        src="@/assets/images/icon-arrow-down.svg"
        alt="icon-arrow-down"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <div class="p-5" v-show="isOpen">
      <ul>
        <li class="flex border-primary border-b-2 pb-2.5">
          <div class="w-1/4">
            <span class="text-primary">商品資訊</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">單件價格</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">數量</span>
          </div>
          <div class="w-1/4">
            <span class="text-primary">小計</span>
          </div>
        </li>
        <li
          class="relative flex items-center border-primary border-b-2 py-5"
          v-for="item in products"
          :key="item.id"
        >
          <div class="w-1/4">
            <div class="flex items-center">
              <img
                :src="item.product.imageUrl"
                :alt="item.title"
                class="w-20 mr-5"
              />
              <span class="text-primary">{{ item.product.title }}</span>
            </div>
          </div>
          <div class="w-1/4">
            <span class="text-primary"
              >${{ $filters.currency(item.product.price) }}</span
            >
          </div>
          <div class="w-1/4">
            <span class="text-primary">{{ item.qty }}</span>
          </div>
          <div class="w-1/4">
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
        <button
          type="button"
          class="text-white bg-primary px-12 py-[18px]"
          @click="payOrder"
        >
          確認結帳
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from '@/components/frontend/ProgressBar.vue';

export default {
  data() {
    return {
      order: {},
      orderId: '',
      user: {},
      products: {},
      isOpen: true,
    };
  },
  components: {
    ProgressBar,
  },
  methods: {
    // 取得訂單資料
    getOrder() {
      const { id } = this.$route.params; // 解構式取出 id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.order;
          this.user = res.data.order.user;
          this.products = res.data.order.products;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    // 切換訂單資訊
    toggleOrderInfo() {
      this.isOpen = !this.isOpen;
    },
    // 訂單付款
    payOrder() {
      const { id } = this.$route.params; // 解構式取出 id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`;
      const status = '付款';
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.success) {
            this.$router.push({
              name: '完成購物', // params 只能用 name 不能用 path
              params: { id: this.orderId },
            });
            this.$messageState(res, status);
          } else {
            this.$messageState(res.data.message, '錯誤訊息');
          }
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.orderId = this.$route.params.id;
    }
    this.getOrder();
  },
};
</script>
