<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <section>
    <div class="pt-[30px] px-5 pb-5">
      <div class="relative border-primary border-2 mb-2.5">
        <input
          type="text"
          class="text-primary bg-secondary w-full h-[60px] px-5"
          v-model="keyword"
        />
        <img
          src="@/assets/images/icon-search.svg"
          alt="放大鏡"
          class="absolute top-1/2 right-5 -translate-y-1/2"
        />
      </div>
      <p class="text-primary mb-5">
        共有
        <span class="text-24px">{{ filterArticles.length }}</span> 筆搜尋結果
      </p>
      <ul class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <li v-for="article in filterArticles" :key="article.id">
          <div class="flex border-primary border-2 h-full">
            <router-link
              :to="`/article/${article.id}`"
              class="flex flex-wrap group w-full h-full"
              v-if="article.isPublic"
            >
              <div
                class="relative pt-[63%] w-full overflow-hidden md:w-[240px] md:pt-0"
              >
                <img
                  :src="article.imageUrl"
                  :alt="article.title"
                  class="duration-300 absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110"
                />
              </div>
              <div
                class="w-full pt-5 px-[15px] pb-[30px] md:w-[calc(100%-240px)] md:min-h-[240px] md:px-5 md:py-10"
              >
                <span class="block text-primary opacity-50 mb-1">{{
                  $filters.date(article.create_at)
                }}</span>
                <h4 class="text-20px text-primary mb-2.5 md:mb-5">
                  {{ article.title }}
                </h4>
                <p class="text-primary">
                  {{ article.description }}
                </p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <Pagination
      :pages="pagination"
      @change-pages="getArticles"
      v-if="pagination.total_pages > 1"
    ></Pagination>
  </section>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState } from 'pinia';
import statusStore from '@/stores/statusStore';
import LoadingComponent from '@/components/LoadingComponent.vue';
import Pagination from '@/components/PaginationComponent.vue';

const statusModule = statusStore();

export default {
  components: {
    LoadingComponent,
    Pagination,
  },
  data() {
    return {
      articles: [],
      keyword: '',
      pagination: {},
    };
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    filterArticles() {
      return this.keyword === ''
        ? this.articles
        : this.articles.filter((item) => item.title.match(this.keyword) || item.description.match(this.keyword));
    },
  },
  methods: {
    getArticles(page = 1) {
      statusModule.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
          statusModule.isLoading = false;
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
    this.getArticles();
  },
};
</script>
