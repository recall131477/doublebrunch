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
      class="relative flex justify-center items-center w-full min-h-[calc(100%-2.5rem)] max-w-[960px] pointer-events-none mx-auto my-5"
    >
      <div class="w-full pointer-events-auto">
        <h2 class="text-white bg-warning text-center py-5">刪除</h2>
        <div class="bg-secondary">
          <div class="p-5">
            <h3 class="text-20px text-primary" v-if="navItem === 'product'">
              是否刪除商品：{{ delProduct.title }} (刪除後將無法恢復)
            </h3>
            <h3 class="text-20px text-primary" v-if="navItem === 'order'">
              是否刪除訂單編號：{{ delOrder.id }} (刪除後將無法恢復)
            </h3>
            <h3 class="text-20px text-primary" v-if="navItem === 'coupon'">
              是否刪除優惠券：{{ delCoupon.title }} (刪除後將無法恢復)
            </h3>
            <h3 class="text-20px text-primary" v-if="navItem === 'article'">
              是否刪除文章：{{ delArticle.title }} (刪除後將無法恢復)
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
              v-if="navItem === 'product'"
              @click="deleteProduct"
            >
              確認刪除
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
              v-if="navItem === 'order'"
              @click="deleteOrder"
            >
              確認刪除
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
              v-if="navItem === 'coupon'"
              @click="deleteCoupon"
            >
              確認刪除
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
              v-if="navItem === 'article'"
              @click="deleteArticle"
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
import Swal from 'sweetalert2';

export default {
  props: {
    delProduct: {
      type: Object,
      default() {
        return {};
      },
    },
    delOrder: {
      type: Object,
      default() {
        return {};
      },
    },
    delCoupon: {
      type: Object,
      default() {
        return {};
      },
    },
    delArticle: {
      type: Object,
      default() {
        return {};
      },
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    navItem: {
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
      const status = '刪除商品成功';
      const { id } = this.delProduct;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http
        .delete(url)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit('update-product', this.currentPage);
          this.closeModal();
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
    deleteOrder() {
      const status = '刪除訂單成功';
      const { id } = this.delOrder;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http
        .delete(url)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit('update-order', this.currentPage);
          this.closeModal();
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
    deleteCoupon() {
      const status = '刪除優惠券成功';
      const { id } = this.delCoupon;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.$http
        .delete(url)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit('update-coupon', this.currentPage);
          this.closeModal();
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
    deleteArticle() {
      const status = '刪除文章成功';
      const { id } = this.delArticle;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.$http
        .delete(url)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit('update-article', this.currentPage);
          this.closeModal();
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
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>
