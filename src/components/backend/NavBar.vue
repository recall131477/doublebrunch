<template>
  <div class="flex items-center p-5">
    <h1 class="text-48px text-primary">午分之食後台</h1>
    <ul class="flex">
      <li>
        <router-link to="/" class="text-primary p-5">回到前台</router-link>
      </li>
      <li>
        <router-link to="/admin/products" class="text-primary p-5">產品列表</router-link>
      </li>
      <li>
        <router-link to="/admin/order" class="text-primary p-5">訂單</router-link>
      </li>
      <li>
        <router-link to="/admin/coupon" class="text-primary p-5">優惠券</router-link>
      </li>
      <li>
        <router-link to="/admin/articles" class="text-primary p-5">貼文</router-link>
      </li>
      <li>
        <router-link to="/login" class="text-primary p-5" @click="signOut">登出</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      const url = `${process.env.VUE_APP_API}/logout`;
      const status = '登出';
      this.$http
        .post(url)
        .then((res) => {
          this.$messageState(res, status);
          document.cookie = 'hexToken=;expires=;'; // 登出並清除 token
          this.$router.push('/login');
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
};
</script>
