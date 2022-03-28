<template>
  <div class="favorite">
    <div
      class="duration-300 fixed top-[82px] left-[260px] z-10 bg-secondary border-primary border-2 w-[400px] overflow-hidden p-5 md:top-[102px] lg:top-[122px]"
      :class="{ 'opacity-0 invisible': !isOpen, 'opacity-100 visible': isOpen }"
    >
      <div class="overflow-y-auto max-h-[400px]">
        <ul>
          <li
            class="flex justify-between items-center border-primary border-t-2 pt-5 mb-5"
            v-for="product in favorite"
            :key="product.id"
          >
            <div class="flex items-center">
              <img
                :src="product.imageUrl"
                :alt="product.title"
                class="w-20 h-20 object-cover"
              />
              <div class="text-primary ml-2.5">
                <span class="block">{{ product.title }}</span>
                <span class="block">${{ product.price }}</span>
              </div>
            </div>
            <button
              type="button"
              class="text-primary border-primary border-2 px-4 py-3"
              @click="addToCart(product.id)"
            >
              加入購物車
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  props: {
    favorite: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route: {
      // 網址變更時觸發
      handler() {
        this.isOpen = false;
      },
    },
  },
  methods: {
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const status = '加入購物車';
      this.$http
        .post(url, { data })
        .then((res) => {
          this.$messageState(res, status);
          this.isLoadingItem = '';
          emitter.emit('get-cart');
        })
        .catch((err) => {
          this.$messageState(err.response, '錯誤訊息');
        });
    },
  },
};
</script>
