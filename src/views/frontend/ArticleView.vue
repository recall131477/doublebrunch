<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <section>
    <div
      class="flex flex-wrap flex-col-reverse lg:flex-row lg:h-[calc(100vh-140px)]"
    >
      <div class="w-full h-full lg:w-3/5">
        <div class="p-[15px] md:p-5 lg:p-10">
          <span class="block text-primary opacity-50 mb-1">{{
            $filters.date(article.create_at)
          }}</span>
          <span
            class="text-14px text-white bg-primary px-3 py-1 md:hidden"
            v-for="(tag, index) in article.tag"
            :key="index"
            >{{ tag }}</span
          >
          <div
            class="flex justify-between items-center mt-1 mb-2.5 md:mt-0 md:mb-5"
          >
            <h2 class="text-24px text-primary md:text-32px lg:text-40px">
              {{ article.title }}
            </h2>
            <div class="hidden md:flex">
              <span
                class="block text-14px text-white bg-primary px-3 py-1 ml-2"
                v-for="(tag, index) in article.tag"
                :key="index"
                >{{ tag }}</span
              >
            </div>
          </div>
          <div
            class="text-primary leading-loose mb-5 md:mb-10"
            v-html="article.content"
          ></div>
          <router-link
            to="/articles"
            class="btn flex justify-center items-center text-primary border-primary border-2 w-[120px] h-10 md:w-40 md:h-[60px]"
            >返回列表</router-link
          >
        </div>
      </div>
      <div class="w-full h-full lg:w-2/5">
        <div class="relative pt-[63%] h-full lg:pt-0">
          <img
            :src="article.imageUrl"
            :alt="article.title"
            class="absolute top-0 left-0 w-full h-full object-cover lg:relative"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';
import { mapMutations, mapGetters } from 'vuex';
import LoadingComponent from '@/components/LoadingComponent.vue';

export default {
  components: {
    LoadingComponent,
  },
  inject: ['routerRefresh'],
  watch: {
    $route: {
      handler() {
        this.routerRefresh();
      },
    },
  },
  data() {
    return {
      article: {},
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    ...mapMutations(['CHANGE_LOADING']),
    getArticle() {
      this.CHANGE_LOADING(true);
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.article = res.data.article;
          this.CHANGE_LOADING(false);
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
    this.getArticle();
  },
};
</script>
