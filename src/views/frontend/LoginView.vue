<template>
  <div class="flex justify-center items-center flex-col h-screen">
    <h1 class="text-48px text-primary mb-5">午分之食後台</h1>
    <form class="min-w-[500px]" @submit.prevent="login">
      <div class="mb-5">
        <label for="email" class="block text-primary w-full mb-2">帳號</label>
        <input
          type="email"
          id="email"
          placeholder="請輸入帳號"
          required
          class="bg-secondary text-primary border-primary border-2 w-full px-5 py-2.5"
          v-model="user.username"
        />
      </div>
      <div class="mb-5">
        <label for="password" class="block text-primary w-full mb-2"
          >密碼</label
        >
        <input
          type="password"
          id="password"
          placeholder="請輸入密碼"
          required
          class="bg-secondary text-primary border-primary border-2 w-full px-5 py-2.5"
          v-model="user.password"
        />
      </div>
      <button
        type="submit"
        class="text-primary border-primary border-2 px-10 py-2.5"
      >
        登入
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          this.$messageState(err.response, '登入');
        });
    },
  },
};
</script>
