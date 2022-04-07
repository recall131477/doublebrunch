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
        <li>{{ item.total }}</li>
        <li>
          <div class="flex items-center">
            <input
              type="checkbox"
              :id="`${item.id}`"
              class="btn-check mr-2"
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
            >
              編輯
            </button>
          </div>
          <div class="col-span-1">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 w-full py-2.5 hover:text-white hover:bg-warning"
            >
              刪除
            </button>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  <Pagination :pages="pagination" @change-pages="getOrders"></Pagination>
  <OrderModal></OrderModal>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue';
import OrderModal from '@/components/backend/modal/OrderModal.vue';

export default {
  data() {
    return {
      orders: {},
      status: '',
      pagination: {},
      tempOrder: {},
    };
  },
  components: {
    Pagination,
    OrderModal,
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
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
