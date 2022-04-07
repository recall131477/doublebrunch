<template>
  <div class="text-right h-[100px] p-5">
    <button type="button" class="btn-light text-white bg-primary h-full w-40">
      建立新的優惠券
    </button>
  </div>
  <ul class="border-primary border-t-2">
    <li>
      <ul class="grid grid-cols-5 text-primary px-5 py-2.5">
        <li>名稱</li>
        <li>折扣百分比</li>
        <li>到期日</li>
        <li>是否啟用</li>
        <li>編輯</li>
      </ul>
    </li>
    <li v-for="(item, index) in coupons" :key="index">
      <ul
        class="grid grid-cols-5 items-center text-primary border-primary border-t-2 px-5 py-2.5"
      >
        <li>{{ item.title }}</li>
        <li>{{ item.percent }}%</li>
        <li>{{ $filters.date(item.due_date) }}</li>
        <li>
          <div class="flex items-center">
            <input
              type="checkbox"
              :id="`${item.id}`"
              class="btn-check mr-2"
              v-model="item.is_enabled"
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
  <Pagination
    :pages="pagination"
    @change-pages="getCoupons"
    v-if="pagination.total_pages > 1"
  ></Pagination>
  <CouponModal></CouponModal>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue';
import CouponModal from '@/components/backend/modal/CouponModal.vue';

export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      status: '',
      pagination: {},
    };
  },
  components: {
    Pagination,
    CouponModal,
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
