<template>
  <div
    class="duration-300 fixed overflow-y-auto z-[1000] inset-0"
    :class="{ 'opacity-0 invisible': !isOpen, 'opacity-100 visible': isOpen }"
  >
    <div
      class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50"
      @click="closeModal"
    ></div>
    <div
      class="relative flex justify-center items-center w-full min-h-[calc(100%-2.5rem)] max-w-[960px] mx-auto my-5"
    >
      <div class="w-full">
        <h2 class="text-white bg-warning text-center py-5">刪除</h2>
        <div class="bg-secondary">
          <div class="p-5">
            <h3 class="text-20px text-primary" v-if="navbarItem === 'product'">
              是否刪除{{ delProduct.title }}(刪除後將無法恢復)
            </h3>
            <h3 class="text-20px text-primary" v-if="navbarItem === 'order'">
              是否刪除訂單(刪除後將無法恢復)
            </h3>
            <h3 class="text-20px text-primary" v-if="navbarItem === 'coupon'">
              是否刪除優惠券(刪除後將無法恢復)
            </h3>
            <h3 class="text-20px text-primary" v-if="navbarItem === 'article'">
              是否刪除文章(刪除後將無法恢復)
            </h3>
          </div>
          <div class="text-right border-primary border-t-2 p-5">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 px-12 py-2.5 hover:text-white hover:bg-warning"
              @click="closeModal"
            >
              取消
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
              @click="deleteProduct"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delProduct: {
      type: Object,
      default() {
        return {};
      },
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    navbarItem: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    deleteProduct() {
      const status = '刪除商品';
      const { id } = this.delProduct;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          this.$messageState(res, status);
          this.$emit('update-product', this.currentPage);
          this.closeModal();
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>
