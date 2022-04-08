<template>
  <div class="text-right h-[100px] p-5">
    <button
      type="button"
      class="btn-light text-white bg-primary h-full w-40"
      @click="openModal('add')"
    >
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
              :true-value="1"
              :false-value="0"
              @change="updateCoupon(item)"
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
    @change-pages="getCoupons"
    v-if="pagination.total_pages > 1"
  ></Pagination>
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    :status="status"
    :currentPage="pagination.current_page"
    @update-coupon="getCoupons"
  ></CouponModal>
  <DeleteModal
    ref="delCouponModal"
    :delCoupon="tempCoupon"
    :currentPage="pagination.current_page"
    :navItem="navItem"
    @update-coupon="getCoupons"
  ></DeleteModal>
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '@/components/PaginationComponent.vue';
import CouponModal from '@/components/backend/modal/CouponModal.vue';
import DeleteModal from '@/components/backend/modal/DeleteModal.vue';

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
      navItem: 'coupon',
    };
  },
  components: {
    Pagination,
    CouponModal,
    DeleteModal,
  },
  methods: {
    getCoupons(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
    updateCoupon(item) {
      emitter.emit('update-coupon', item);
    },
    openModal(status, item) {
      this.status = status;
      if (status === 'add') {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
        this.$refs.couponModal.openModal();
      } else if (status === 'edit') {
        this.tempCoupon = JSON.parse(JSON.stringify(item));
        this.$refs.couponModal.openModal();
      } else if (status === 'delete') {
        this.tempCoupon = JSON.parse(JSON.stringify(item));
        this.$refs.delCouponModal.openModal();
      }
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
