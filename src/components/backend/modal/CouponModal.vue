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
        <h2
          class="text-white bg-primary text-center py-5"
          v-if="status === 'add'"
        >
          新增優惠卷
        </h2>
        <h2 class="text-white bg-primary text-center py-5" v-else>
          編輯優惠卷
        </h2>
        <div class="bg-secondary">
          <div class="space-y-5 p-5">
            <div>
              <label for="title" class="block text-primary w-full mb-1"
                >標題</label
              >
              <input
                type="text"
                id="title"
                placeholder="請輸入標題"
                class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                v-model="tempCoupon.title"
              />
            </div>
            <div>
              <label for="couponCode" class="block text-primary w-full mb-1"
                >優惠碼</label
              >
              <input
                type="text"
                id="couponCode"
                placeholder="請輸入優惠碼"
                class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                v-model="tempCoupon.code"
              />
            </div>
            <div>
              <label for="dueDate" class="block text-primary w-full mb-1"
                >到期日</label
              >
              <input
                type="date"
                id="dueDate"
                placeholder="請輸入到期日"
                class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                v-model="dueDate"
              />
            </div>
            <div>
              <label for="discount" class="block text-primary w-full mb-1"
                >折扣百分比</label
              >
              <input
                type="text"
                id="discount"
                min="0"
                placeholder="請輸入折扣百分比"
                class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
                v-model.number="tempCoupon.percent"
              />
            </div>
            <div class="flex justify-end items-center">
              <input
                type="checkbox"
                id="is_enabled"
                class="btn-check mr-2"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
              />
              <label for="is_enabled" class="text-primary">是否啟用</label>
            </div>
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
              @click="updateCoupon(tempCoupon.id)"
            >
              {{ status === 'add' ? '新增' : '修改' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
    status: {
      type: String,
      default: '',
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = JSON.parse(JSON.stringify(this.coupon));
      // 時間戳轉換 yyyy-mm-dd
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString()
        .split('T');
      [this.dueDate] = dateAndTime;
    },
    dueDate() {
      this.tempCoupon.due_date = Math.floor(new Date(this.dueDate) / 1000);
    },
  },
  data() {
    return {
      isOpen: false,
      tempCoupon: {},
      dueDate: '',
    };
  },
  methods: {
    updateCoupon(id) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      let status = '新增優惠券';
      if (this.status !== 'add') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
        httpMethod = 'put';
        status = '更新優惠券';
      }
      this.$http[httpMethod](url, { data: this.tempCoupon })
        .then((res) => {
          this.$messageState(res, status);
          this.$emit('update-coupon', this.currentPage);
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
  mounted() {
    emitter.on('update-coupon', (item) => {
      this.tempCoupon = item;
      this.updateCoupon(item.id);
    });
  },
};
</script>
