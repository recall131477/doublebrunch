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
        <h2 class="text-white bg-primary text-center py-5">訂單細節</h2>
        <div class="bg-secondary">
          <div class="grid grid-cols-2 gap-5 p-5">
            <div class="col-span-1">
              <h3 class="text-24px text-primary mb-5">用戶資料</h3>
              <ul class="text-primary" v-if="tempOrder.user">
                <li class="flex pb-5">
                  <div class="w-1/2">
                    <span>姓名</span>
                  </div>
                  <div class="w-1/2">
                    <span>{{ tempOrder.user.name }}</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>Email</span>
                  </div>
                  <div class="w-1/2">
                    <span>{{ tempOrder.user.email }}</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>電話</span>
                  </div>
                  <div class="w-1/2">
                    <span>{{ tempOrder.user.tel }}</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 pt-5">
                  <div class="w-1/2">
                    <span>地址</span>
                  </div>
                  <div class="w-1/2">
                    <span>{{ tempOrder.user.address }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-span-1">
              <h3 class="text-24px text-primary mb-5">訂單細節</h3>
              <ul class="text-primary">
                <li class="flex pb-5">
                  <div class="w-1/2">
                    <span>訂單編號</span>
                  </div>
                  <div class="w-1/2">
                    <span>{{ tempOrder.id }}</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>下單時間</span>
                  </div>
                  <div class="w-1/2">
                    <span>2022/4/2</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>付款時間</span>
                  </div>
                  <div class="w-1/2">
                    <span v-if="tempOrder.paid_date">
                      {{ $filters.date(tempOrder.paid_date) }}
                    </span>
                    <span v-else>時間不正確</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 py-5">
                  <div class="w-1/2">
                    <span>付款狀態</span>
                  </div>
                  <div class="w-1/2">
                    <span class="text-primary" v-if="tempOrder.is_paid"
                      >已付款</span
                    >
                    <span class="text-warning" v-else>未付款</span>
                  </div>
                </li>
                <li class="flex border-primary border-t-2 pt-5">
                  <div class="w-1/2">
                    <span>總金額</span>
                  </div>
                  <div class="w-1/2">
                    <span>{{ $filters.currency(tempOrder.total) }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <h3 class="text-24px text-primary mb-5">選購商品</h3>
              <ul class="shopping text-primary">
                <li
                  class="flex border-primary border-t-2 py-5"
                  v-for="item in tempOrder.products"
                  :key="item.id"
                >
                  <div class="w-1/3">
                    <span>{{ item.product.title }}</span>
                  </div>
                  <div class="w-1/3">
                    <span>{{ item.qty }} / {{ item.product.unit }}</span>
                  </div>
                  <div class="w-1/3">
                    <span>{{ $filters.currency(item.final_total) }}</span>
                  </div>
                </li>
              </ul>
              <div class="flex justify-end items-center">
                <input
                  type="checkbox"
                  id="is_paid"
                  class="btn-check mr-2"
                  v-model="tempOrder.is_paid"
                />
                <label for="is_paid">
                  <span class="text-primary" v-if="tempOrder.is_paid"
                    >已付款</span
                  >
                  <span class="text-warning" v-else>未付款</span>
                </label>
              </div>
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
              @click="updatePaid(tempOrder)"
            >
              修改
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import emitter from '@/methods/emitter';

export default {
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  watch: {
    order() {
      this.tempOrder = JSON.parse(JSON.stringify(this.order));
    },
  },
  data() {
    return {
      isOpen: false,
      tempOrder: {},
    };
  },
  methods: {
    updatePaid(item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      const status = '更新付款狀態成功';
      this.$http
        .put(url, { data: paid })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: status,
            showConfirmButton: false,
            timer: 1500,
          });
          this.$emit('update-paid', this.currentPage);
          this.$emit('cancel-id');
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
  mounted() {
    emitter.on('update-paid', (item) => {
      this.tempOrder = item;
      this.updatePaid(item);
    });
  },
};
</script>

<style lang="scss">
.shopping {
  li {
    &:first-child {
      border: none;
      padding-top: 0;
    }
  }
}
</style>
