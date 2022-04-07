<template>
  <div
    class="duration-300 fixed overflow-y-auto z-[1000] inset-0"
    v-if="isOpen"
  >
    <div
      class="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-50"
    ></div>
    <div
      class="relative flex justify-center items-center w-full min-h-[calc(100%-2.5rem)] max-w-[960px] mx-auto my-5"
    >
      <div class="w-full">
        <h2 class="text-white bg-primary text-center py-5">新增優惠卷</h2>
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
              />
            </div>
            <div>
              <label for="discount" class="block text-primary w-full mb-1"
                >折扣百分比</label
              >
              <input
                type="text"
                id="discount"
                placeholder="請輸入折扣百分比"
                class="text-primary bg-secondary border-primary border-2 w-full h-[60px] px-5"
              />
            </div>
            <div class="flex justify-end items-center">
              <input
                type="checkbox"
                id="test"
                class="btn-check mr-2"
                :true-value="1"
                :false-value="0"
              />
              <label for="test" class="text-primary">是否啟用</label>
            </div>
          </div>
          <div class="text-right border-primary border-t-2 p-5">
            <button
              type="button"
              class="duration-300 text-warning border-warning border-2 px-12 py-2.5 hover:text-white hover:bg-warning"
            >
              取消
            </button>
            <button
              type="button"
              class="duration-300 text-primary border-primary border-2 px-12 py-2.5 ml-2.5 hover:text-white hover:bg-primary"
            >
              新增
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
