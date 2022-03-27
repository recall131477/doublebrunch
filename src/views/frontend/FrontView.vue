<template>
  <div class="fixed top-0 left-0 z-[999] w-full h-full p-5 pointer-events-none">
    <div class="absolute top-0 left-0 w-full h-5 bg-secondary"></div>
    <div class="absolute top-0 left-0 w-5 h-full bg-secondary"></div>
    <div class="absolute bottom-0 right-0 w-full h-5 bg-secondary"></div>
    <div class="absolute bottom-0 right-0 w-5 h-full bg-secondary"></div>
    <div class="w-full h-full border-primary border-2"></div>
  </div>
  <router-link
    to="/cart"
    class="fixed bottom-0 right-0 z-[9999] flex justify-center items-center w-20 h-20 bg-secondary border-primary border-2"
  >
    <div class="relative">
      <img src="@/assets/images/icon-cart.svg" alt="購物車" />
      <span
        class="absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full"
        v-if="cart.carts.length > 0"
        >{{ cart.carts.length }}
      </span>
    </div>
  </router-link>
  <div class="p-5">
    <HeaderLayout></HeaderLayout>
    <NavBar></NavBar>
    <main class="mt-[100px]">
      <router-view></router-view>
    </main>
    <FooterLayout></FooterLayout>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import HeaderLayout from '@/components/frontend/layout/HeaderLayout.vue';
import FooterLayout from '@/components/frontend/layout/FooterLayout.vue';
import NavBar from '@/components/frontend/NavBar.vue';

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
    };
  },
  components: {
    HeaderLayout,
    FooterLayout,
    NavBar,
  },
  methods: {
    // 取得購物車資料
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
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
