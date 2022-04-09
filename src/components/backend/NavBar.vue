<template>
  <header class="flex border-primary border-2">
    <router-link to="/" class="relative bg-primary w-[240px] h-[100px]">
      <img
        src="@/assets/images/logo.svg"
        alt="logo"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </router-link>
    <div class="flex w-[calc(100%-240px)]">
      <ul class="flex justify-end items-center flex-1 px-[60px]">
        <li>
          <router-link
            to="/admin/products"
            class="duration-300 relative flex items-center h-[100px] text-primary/50 px-5 group hover:text-primary/100"
            :class="{
              '!text-primary': $route.path === '/admin/products',
            }"
            >產品列表
            <div
              class="duration-300 absolute bottom-0 left-0 w-full bg-primary h-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              :class="{
                '!opacity-100 !visible': $route.path === '/admin/products',
              }"
            ></div>
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/order"
            class="duration-300 relative flex items-center h-[100px] text-primary/50 px-5 group hover:text-primary/100"
            :class="{
              '!text-primary': $route.path === '/admin/order',
            }"
            >訂單
            <div
              class="duration-300 absolute bottom-0 left-0 w-full bg-primary h-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              :class="{
                '!opacity-100 !visible': $route.path === '/admin/order',
              }"
            ></div
          ></router-link>
        </li>
        <li>
          <router-link
            to="/admin/coupon"
            class="duration-300 relative flex items-center h-[100px] text-primary/50 px-5 group hover:text-primary/100"
            :class="{
              '!text-primary': $route.path === '/admin/coupon',
            }"
            >優惠券
            <div
              class="duration-300 absolute bottom-0 left-0 w-full bg-primary h-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              :class="{
                '!opacity-100 !visible': $route.path === '/admin/coupon',
              }"
            ></div
          ></router-link>
        </li>
        <li>
          <router-link
            to="/admin/articles"
            class="duration-300 relative flex items-center h-[100px] text-primary/50 px-5 group hover:text-primary/100"
            :class="{
              '!text-primary': $route.path === '/admin/articles',
            }"
            >貼文
            <div
              class="duration-300 absolute bottom-0 left-0 w-full bg-primary h-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              :class="{
                '!opacity-100 !visible': $route.path === '/admin/articles',
              }"
            ></div>
          </router-link>
        </li>
      </ul>
      <router-link
        to="/login"
        class="relative w-[100px] h-[100px] border-primary border-l-2 group"
        @click="signOut"
      >
        <img
          src="@/assets/images/icon-admin.svg"
          alt="登入/登出"
          class="duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  methods: {
    signOut() {
      const url = `${process.env.VUE_APP_API}/logout`;
      const status = '已登出';
      this.$http
        .post(url)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          document.cookie = 'hexToken=;expires=;'; // 登出並清除 token
          this.$router.push('/login');
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
};
</script>
