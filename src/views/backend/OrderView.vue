<template>
  <ul class="border-primary border-t-2 mt-10">
    <li>
      <ul class="grid grid-cols-6 text-primary px-5 py-2.5">
        <li>購買時間</li>
        <li>Email</li>
        <li>購買款項</li>
        <li>應付金額</li>
        <li>是否付款</li>
        <li>編輯</li>
      </ul>
    </li>
    <li v-for="(item, key) in orders" :key="key">
      <ul
        class="grid grid-cols-6 items-center text-primary border-primary border-t-2 px-5 py-2.5"
      >
        <li>{{ $filters.date(item.create_at) }}</li>
        <li>{{ item.user.email }}</li>
        <li>
          <ul>
            <li v-for="(product, index) in item.products" :key="index">
              {{ product.product.title }}： {{ product.qty }}
              {{ product.product.unit }}
            </li>
          </ul>
        </li>
        <li>{{ $filters.currency(Math.round(item.total)) }}</li>
        <li>
          <div class="flex items-center">
            <input
              type="checkbox"
              :id="`${item.id}`"
              class="btn-check mr-2"
              :disabled="tempId === item.id"
              v-model="item.is_paid"
              @change="updatePaid(item)"
            />
            <label :for="`${item.id}`">
              <span v-if="item.is_paid">已付款</span>
              <span :class="{ 'text-warning': !item.is_paid }" v-else
                >未付款</span
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
    @change-pages="getOrders"
    v-if="pagination.total_pages > 1"
  ></Pagination>
  <OrderModal
    ref="orderModal"
    :order="tempOrder"
    :currentPage="pagination.current_page"
    @update-paid="getOrders"
    @cancel-id="cancelId"
  ></OrderModal>
  <DeleteModal
    ref="delOrderModal"
    :delOrder="tempOrder"
    :currentPage="pagination.current_page"
    :navItem="navItem"
    @update-order="getOrders"
  ></DeleteModal>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';
import Pagination from '@/components/PaginationComponent.vue';
import OrderModal from '@/components/backend/modal/OrderModal.vue';
import DeleteModal from '@/components/backend/modal/DeleteModal.vue';

export default {
  components: {
    Pagination,
    OrderModal,
    DeleteModal,
  },
  data() {
    return {
      orders: {},
      status: '',
      pagination: {},
      tempOrder: {},
      navItem: 'order',
      tempId: '',
    };
  },
  methods: {
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url, this.tempProduct)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
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
    updatePaid(item) {
      this.tempId = item.id;
      emitter.emit('update-paid', item);
    },
    cancelId() {
      this.tempId = '';
    },
    openModal(status, item) {
      this.status = status;
      if (status === 'edit') {
        this.tempOrder = JSON.parse(JSON.stringify(item));
        this.$refs.orderModal.openModal();
      } else if (status === 'delete') {
        this.tempOrder = JSON.parse(JSON.stringify(item));
        this.$refs.delOrderModal.openModal();
      }
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
