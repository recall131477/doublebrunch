<template>
  <div
    class="fixed top-0 left-0 z-[999] w-full h-full p-[15px] pointer-events-none md:p-5"
  >
    <div
      class="absolute top-0 left-0 w-full h-[15px] bg-secondary md:h-5"
    ></div>
    <div
      class="absolute top-0 left-0 w-[15px] h-full bg-secondary md:w-5"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-full h-[15px] bg-secondary md:h-5"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-[15px] h-full bg-secondary md:w-5"
    ></div>
    <div class="w-full h-full border-primary border-2"></div>
  </div>
  <router-link
    to="/cart"
    class="btn-line fixed bottom-0 right-0 z-[9999] flex justify-center items-center bg-secondary w-[60px] h-[60px] group md:w-20 md:h-20"
  >
    <svg class="absolute top-0 left-0 w-full h-full">
      <rect class="line" fill="transparent" />
    </svg>
    <div class="relative">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="stroke-primary group-hover:stroke-white"
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
      <span
        class="absolute top-[-6px] right-[-12px] flex justify-center items-center text-12px text-white bg-primary w-[18px] h-[18px] rounded-full group-hover:text-primary group-hover:bg-white"
        v-if="cart.carts.length > 0"
        >{{ cart.carts.length }}
      </span>
    </div>
  </router-link>
  <div class="p-[15px] md:p-5">
    <HeaderLayout />
    <NavBar />
    <main class="mt-[60px] md:mt-20 lg:mt-[100px]">
      <router-view />
    </main>
    <FooterLayout />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';
import HeaderLayout from '@/components/frontend/layout/HeaderLayout.vue';
import FooterLayout from '@/components/frontend/layout/FooterLayout.vue';
import NavBar from '@/components/frontend/NavBar.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    NavBar,
  },
  data() {
    return {
      cart: {
        carts: [],
      },
    };
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
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
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
