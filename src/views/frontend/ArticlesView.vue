<template>
  <section>
    <div class="pt-[30px] px-5 pb-5">
      <div class="relative border-primary border-2 mb-2.5">
        <input type="text" class="text-primary bg-secondary w-full p-5" />
        <button type="button" class="absolute top-1/2 right-5 -translate-y-1/2">
          <img src="@/assets/images/icon-search.svg" alt="放大鏡" />
        </button>
      </div>
      <p class="text-primary mb-5">
        共有 <span class="text-24px">{{ articles.length }}</span> 筆搜尋結果
      </p>
      <ul class="grid grid-cols-2 gap-5">
        <li v-for="article in articles" :key="article.id">
          <div class="flex border-primary border-2">
            <router-link :to="`/article/${article.id}`" class="group overflow-hidden" v-if="article.isPublic">
              <img
                :src="article.imageUrl"
                :alt="article.title"
                class="duration-300 w-[240px] h-[240px] object-cover group-hover:scale-110"
              />
            </router-link>
            <div class="flex-1 px-5 py-10">
              <span class="block text-primary opacity-50 mb-1">{{
                $filters.date(article.create_at)
              }}</span>
              <h4 class="text-20px text-primary mb-5">{{ article.title }}</h4>
              <p class="text-primary">
                {{ article.description }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      pagination: {},
    };
  },
  methods: {
    // 取得所有文章資料
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
