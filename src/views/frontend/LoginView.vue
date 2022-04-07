<template>
  <div class="flex justify-center items-center h-screen px-[15px] md:px-0">
    <div class="max-w-[480px] mx-auto w-full">
      <div class="border-primary border-2 p-[15px] md:pt-[50px] md:px-[60px] md:pb-20">
        <div class="text-center">
          <h1 class="inline-block bg-primary px-5 py-2.5 -mb-[6px]">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </h1>
        </div>
        <h2 class="text-32px text-primary text-center my-2.5 md:text-40px md:mb-5">登入</h2>
        <VForm ref="form" v-slot="{ errors }" @submit="login">
          <div class="mb-5">
            <label for="email" class="block text-primary w-full mb-1"
              >帳號</label
            >
            <div class="relative">
              <VField
                type="email"
                name="帳號"
                id="email"
                rules="email|required"
                class="bg-secondary text-primary border-primary/50 border-2 w-full px-5 py-2.5"
                :class="{
                  '!border-warning': errors['帳號'],
                  '!border-primary': user.username && !errors['帳號'],
                }"
                v-model="user.username"
              >
              </VField>
              <div
                class="absolute top-1/2 right-5 -translate-y-1/2"
                v-if="errors['帳號']"
              >
                <img
                  src="@/assets/images/icon-remind.svg"
                  alt="icon-checked"
                  class="bg-warning rounded-full"
                />
              </div>
              <div
                class="absolute top-1/2 right-5 -translate-y-1/2"
                v-if="user.username && !errors['帳號']"
              >
                <img
                  src="@/assets/images/icon-checked.svg"
                  alt="icon-checked"
                  class="bg-primary rounded-full"
                />
              </div>
            </div>
            <ErrorMessage
              name="帳號"
              class="block text-14px text-warning mt-1"
            ></ErrorMessage>
          </div>
          <div class="mb-10">
            <label for="password" class="block text-primary w-full mb-2"
              >密碼</label
            >
            <div class="relative">
              <VField
                type="password"
                name="密碼"
                id="password"
                rules="required"
                class="bg-secondary text-primary border-primary/50 border-2 w-full px-5 py-2.5"
                :class="{
                  '!border-warning': errors['密碼'],
                  '!border-primary': user.password && !errors['密碼'],
                }"
                v-model="user.password"
              >
              </VField>
              <div
                class="absolute top-1/2 right-5 -translate-y-1/2"
                v-if="errors['密碼']"
              >
                <img
                  src="@/assets/images/icon-remind.svg"
                  alt="icon-checked"
                  class="bg-warning rounded-full"
                />
              </div>
              <div
                class="absolute top-1/2 right-5 -translate-y-1/2"
                v-if="user.password && !errors['密碼']"
              >
                <img
                  src="@/assets/images/icon-checked.svg"
                  alt="icon-checked"
                  class="bg-primary rounded-full"
                />
              </div>
            </div>
            <ErrorMessage
              name="密碼"
              class="block text-14px text-warning mt-1"
            ></ErrorMessage>
          </div>
          <div class="flex justify-between items-center">
            <router-link
              to="/"
              class="duration-300 text-primary border-transparent border-b-2 hover:border-primary"
              >回到首頁</router-link
            >
            <button
              type="submit"
              class="btn-light text-white bg-primary w-[120px] h-10 md:w-40 md:h-[60px]"
            >
              登入
            </button>
          </div>
        </VForm>
      </div>
    </div>
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
