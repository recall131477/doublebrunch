<template>
  <div class="text-right h-[100px] p-5">
    <button
      type="button"
      class="btn-light text-white bg-primary h-full w-40"
      @click="openModal('add')"
    >
      建立新的文章
    </button>
  </div>
  <ul class="border-primary border-t-2">
    <li>
      <ul class="flex text-primary px-5 py-2.5">
        <li class="w-1/3">標題</li>
        <li class="min-w-[160px]">作者</li>
        <li class="w-1/3">描述</li>
        <li class="min-w-[160px]">建立時間</li>
        <li class="min-w-[160px]">是否公開</li>
        <li class="w-1/3">編輯</li>
      </ul>
    </li>
    <li v-for="article in articles" :key="article.id">
      <ul
        class="flex items-center text-primary border-primary border-t-2 px-5 py-2.5"
      >
        <li class="w-1/3">{{ article.title }}</li>
        <li class="min-w-[160px]">{{ article.author }}</li>
        <li class="w-1/3">{{ article.description }}</li>
        <li class="min-w-[160px]">{{ $filters.date(article.create_at) }}</li>
        <li class="min-w-[160px]">
          <div class="flex items-center">
            <input
              type="checkbox"
              :id="`${article.id}`"
              class="btn-check mr-2"
              :disabled="tempId === article.id"
              v-model="article.isPublic"
              @change="updateArticle(article.id)"
            />
            <label :for="`${article.id}`">
              <span v-if="article.isPublic">已上架</span>
              <span :class="{ 'text-warning': !article.isPublic }" v-else
                >未上架</span
              >
            </label>
          </div>
        </li>
        <li class="w-1/3 flex">
          <div class="w-1/2 mr-2.5">
            <button
              type="button"
              class="duration-300 border-primary border-2 w-full py-2.5 hover:text-white hover:bg-primary"
              @click="getArticle(article)"
            >
              編輯
            </button>
          </div>
          <div class="w-1/2">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 w-full py-2.5 hover:text-white hover:bg-warning"
              @click="openModal('delete', article)"
            >
              刪除
            </button>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <Pagination
    :pages="pagination"
    @change-pages="getArticles"
    v-if="pagination.total_pages > 1"
  ></Pagination>
  <ArticleModal
    ref="articleModal"
    :article="tempArticle"
    :status="status"
    :currentPage="pagination.current_page"
    @update-article="getArticles"
  ></ArticleModal>
  <DeleteModal
    ref="delArticleModal"
    :delArticle="tempArticle"
    :currentPage="pagination.current_page"
    :navItem="navItem"
    @update-article="getArticles"
  ></DeleteModal>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';
import Pagination from '@/components/PaginationComponent.vue';
import ArticleModal from '@/components/backend/modal/ArticleModal.vue';
import DeleteModal from '@/components/backend/modal/DeleteModal.vue';

export default {
  components: {
    Pagination,
    ArticleModal,
    DeleteModal,
  },
  data() {
    return {
      articles: {},
      tempArticle: {},
      status: '',
      pagination: {},
      navItem: 'article',
      tempId: '',
    };
  },
  methods: {
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          // 此 api 本身沒有 content 欄位，但 content 欄位為必填
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    getArticle(article) {
      const { id } = article;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          // 編輯文章 api 才有 content 欄位的資料，需要去接 api 回傳的內容而不是 v-for 的 article 資料
          this.openModal('edit', res.data.article);
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    updateArticle(id) {
      this.tempId = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          // ES lint 不能直接修改 res ，需額外設定變數
          const result = res;
          result.data.article.isPublic = !result.data.article.isPublic;
          emitter.emit('update-article', result.data.article);
          this.tempId = '';
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    openModal(status, item) {
      this.status = status;
      if (status === 'add') {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.$refs.articleModal.openModal();
      } else if (status === 'edit') {
        this.tempArticle = JSON.parse(JSON.stringify(item));
        this.$refs.articleModal.openModal();
      } else if (status === 'delete') {
        this.tempArticle = JSON.parse(JSON.stringify(item));
        this.$refs.delArticleModal.openModal();
      }
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
