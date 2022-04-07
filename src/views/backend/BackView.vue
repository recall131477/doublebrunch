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
  <div class="p-5">
    <NavBar></NavBar>
    <main>
      <router-view v-if="checkSuccess"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/backend/NavBar.vue';

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    // 確認是否登入並儲存 token
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        // axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_API}/api/user/check`;
        const status = '登入';
        this.$http
          .post(url, { api_token: this.token })
          .then((res) => {
            this.$messageState(res, status);
            this.checkSuccess = true;
          })
          .catch((err) => {
            this.$messageState(err.response, '錯誤訊息');
            this.$router.push('/login');
          });
      } else {
        const status = '請先登入';
        this.$messageState(status);
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
