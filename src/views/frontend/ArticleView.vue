<template>
  <section>
    <div class="relative h-[calc(100vh-140px)]">
      <div class="flex h-full">
        <div class="w-3/5">
          <div class="p-10">
            <span class="block text-primary opacity-50 mb-1">{{
              $filters.date(article.create_at)
            }}</span>
            <div class="flex justify-between items-center mb-5">
              <h2 class="text-40px text-primary">{{ article.title }}</h2>
              <div class="flex">
                <span
                  class="block text-14px text-white bg-primary px-3 py-1 ml-2"
                  v-for="(tag, index) in article.tag"
                  :key="index"
                  >{{ tag }}</span
                >
              </div>
            </div>
            <div
              class="text-primary leading-loose mb-10"
              v-html="article.content"
            >
            </div>
            <router-link
              to="/articles"
              class="inline-block text-primary border-primary border-2 px-12 py-5"
              >返回列表</router-link
            >
          </div>
        </div>
        <div class="w-2/5">
          <img
            :src="article.imageUrl"
            :alt="article.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  inject: ['routerRefresh'],
  watch: {
    $route: {
      // 網址變更時觸發
      handler() {
        this.routerRefresh();
      },
    },
  },
  methods: {
    // 取得特定文章資料
    getArticle() {
      this.isLoading = true;
      const { id } = this.$route.params; // 解構式取出 id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.article = res.data.article;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
