<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <div class="text-right h-[100px] p-5">
    <button
      type="button"
      class="btn-light text-white bg-primary h-full w-40"
      @click="openModal('add')"
    >
      建立新的產品
    </button>
  </div>
  <ul class="border-primary border-t-2">
    <li>
      <ul class="grid grid-cols-6 text-primary px-5 py-2.5">
        <li>分類</li>
        <li>產品名稱</li>
        <li>原價</li>
        <li>售價</li>
        <li>是否啟用</li>
        <li>編輯</li>
      </ul>
    </li>
    <li v-for="item in products" :key="item.id">
      <ul
        class="grid grid-cols-6 items-center text-primary border-primary border-t-2 px-5 py-2.5"
      >
        <li>{{ item.category }}</li>
        <li>{{ item.title }}</li>
        <li>{{ item.origin_price }}</li>
        <li>{{ item.price }}</li>
        <li>
          <div class="flex items-center">
            <input
              type="checkbox"
              :id="`${item.id}`"
              class="btn-check mr-2"
              :true-value="1"
              :false-value="0"
              v-model="item.is_enabled"
              @change="updateProduct(item)"
            />
            <label :for="`${item.id}`">
              <span v-if="item.is_enabled">啟用</span>
              <span :class="{ 'text-warning': !item.is_enabled }" v-else
                >未啟用</span
              >
            </label>
          </div>
        </li>
        <li class="grid grid-cols-2 gap-x-2.5">
          <div class="col-span-1">
            <button
              type="button"
              class="duration-300 border-primary border-2 w-full py-2.5 hover:text-white hover:bg-primary"
              @click="openModal('edit', item)"
            >
              編輯
            </button>
          </div>
          <div class="col-span-1">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 w-full py-2.5 hover:text-white hover:bg-warning"
              @click="openModal('delete', item)"
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
    @change-pages="getProducts"
    v-if="pagination.total_pages > 1"
  ></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    :status="status"
    :currentPage="pagination.current_page"
    @update-product="getProducts"
  ></ProductModal>
  <DeleteModal
    ref="delProductModal"
    :delProduct="tempProduct"
    :currentPage="pagination.current_page"
    :navItem="navItem"
    @update-product="getProducts"
  ></DeleteModal>
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '@/components/PaginationComponent.vue';
import ProductModal from '@/components/backend/modal/ProductModal.vue';
import DeleteModal from '@/components/backend/modal/DeleteModal.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      status: '',
      pagination: {},
      navItem: 'product',
      isLoading: false,
    };
  },
  components: {
    Pagination,
    ProductModal,
    DeleteModal,
    LoadingComponent,
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    updateProduct(item) {
      emitter.emit('update-product', item);
    },
    openModal(status, item) {
      this.status = status;
      if (status === 'add') {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.$refs.productModal.openModal();
      } else if (status === 'edit') {
        this.tempProduct = JSON.parse(JSON.stringify(item));
        this.$refs.productModal.openModal();
      } else if (status === 'delete') {
        this.tempProduct = JSON.parse(JSON.stringify(item));
        this.$refs.delProductModal.openModal();
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
