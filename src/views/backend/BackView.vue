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
    <NavBar />
    <main>
      <router-view v-if="checkSuccess" />
    </main>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import NavBar from '@/components/backend/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      checkSuccess: false,
    };
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
        const status = '已登入';
        this.$http
          .post(url, { api_token: this.token })
          .then(() => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: status,
              showConfirmButton: false,
              timer: 1500,
            });
            this.checkSuccess = true;
          })
          .catch((err) => {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: err.response.data.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push('/login');
          });
      } else {
        const status = '請先登入';
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: status,
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
